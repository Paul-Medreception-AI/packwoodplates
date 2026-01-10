import { randomUUID } from "crypto";

import { Resend } from "resend";

export const runtime = "nodejs";

function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

function cleanEnvEmail(value: string): string {
  const v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1).trim();
  }
  return v;
}

function stripHeaderUnsafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function ensureFromFormat(value: string): string {
  const v = stripHeaderUnsafe(value);
  if (v.includes("<") && v.includes(">")) return v;
  return `Packwood Plates <${v}>`;
}

export async function POST(request: Request) {
  const requestId = randomUUID();
  const startedAt = Date.now();
  const url = request.url;
  const cfIp = request.headers.get("cf-connecting-ip");
  const fwdFor = request.headers.get("x-forwarded-for");
  const ua = request.headers.get("user-agent");

  console.log("[api/contact] start", {
    requestId,
    url,
    ip: cfIp || fwdFor || null,
    ua,
  });

  const apiKey = process.env.RESEND_API_KEY;
  const from = ensureFromFormat(cleanEnvEmail(process.env.RESEND_FROM || "orders@packwoodsplates.com"));
  const to = cleanEnvEmail(process.env.CONTACT_TO || "orders@packwoodsplates.com");

  console.log("[api/contact] env", {
    requestId,
    hasApiKey: Boolean(apiKey),
    hasFromEnv: Boolean(process.env.RESEND_FROM),
    hasToEnv: Boolean(process.env.CONTACT_TO),
    from,
    to,
  });

  if (!apiKey) {
    console.error("[api/contact] missing api key", { requestId });
    return Response.json(
      { ok: false, message: "Missing RESEND_API_KEY on the server.", requestId },
      { status: 500 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    console.error("[api/contact] invalid formData", { requestId });
    return Response.json({ ok: false, message: "Invalid form submission.", requestId }, { status: 400 });
  }

  const clientRequestId = asString(formData.get("_clientRequestId")).trim();
  console.log("[api/contact] parsed formData", { requestId, clientRequestId: clientRequestId || null });

  const name = asString(formData.get("name")).trim();
  const email = asString(formData.get("email")).trim();
  const phone = asString(formData.get("phone")).trim();
  const consentText = asString(formData.get("consentText")).trim() === "yes";
  const details = asString(formData.get("details")).trim();
  const file = formData.get("attachment");

  console.log("[api/contact] fields", {
    requestId,
    clientRequestId: clientRequestId || null,
    nameLength: name.length,
    emailProvided: Boolean(email),
    phoneProvided: Boolean(phone),
    consentText,
    detailsLength: details.length,
    hasFile: file instanceof File ? file.size > 0 : false,
  });

  if (!name || !email || !details) {
    console.warn("[api/contact] validation failed", {
      requestId,
      clientRequestId: clientRequestId || null,
      hasName: Boolean(name),
      hasEmail: Boolean(email),
      hasDetails: Boolean(details),
    });
    return Response.json(
      { ok: false, message: "Please complete name, email, and details.", requestId },
      { status: 400 }
    );
  }

  const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
  if (file instanceof File && file.size > 0) {
    const maxBytes = 5 * 1024 * 1024;
    if (file.size > maxBytes) {
      console.warn("[api/contact] attachment too large", {
        requestId,
        clientRequestId: clientRequestId || null,
        bytes: file.size,
        maxBytes,
      });
      return Response.json({ ok: false, message: "Attachment is too large (max 5MB).", requestId }, { status: 400 });
    }

    const contentType = file.type || "application/octet-stream";
    const bytes = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name || "attachment", content: bytes, contentType });

    console.log("[api/contact] attachment accepted", {
      requestId,
      clientRequestId: clientRequestId || null,
      filename: file.name || "attachment",
      contentType,
      bytes: bytes.byteLength,
    });
  }

  try {
    const resend = new Resend(apiKey);
    console.log("[api/contact] resend send start", {
      requestId,
      clientRequestId: clientRequestId || null,
      from,
      to,
      hasAttachments: attachments.length > 0,
      attachmentsCount: attachments.length,
    });

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: stripHeaderUnsafe(email),
      subject: `Packwood Plates Inquiry — ${name}`,
      text: [
        "New inquiry from packwoodsplates.com",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "Phone: (not provided)",
        phone ? `OK to text: ${consentText ? "Yes" : "No"}` : "OK to text: (n/a)",
        "",
        "Details:",
        details,
      ].join("\n"),
      html: (() => {
        const safeName = escapeHtml(stripHeaderUnsafe(name));
        const safeEmail = escapeHtml(stripHeaderUnsafe(email));
        const safePhone = escapeHtml(stripHeaderUnsafe(phone));
        const safeDetails = escapeHtml(details).replace(/\n/g, "<br />");

        const phoneLine = phone
          ? `<div style=\"margin:0 0 4px;\"><strong>Phone:</strong> ${safePhone}</div>`
          : `<div style=\"margin:0 0 4px;\"><strong>Phone:</strong> (not provided)</div>`;

        const consentLine = phone
          ? `<div style=\"margin:0 0 4px;\"><strong>OK to text:</strong> ${consentText ? "Yes" : "No"}</div>`
          : `<div style=\"margin:0 0 4px;\"><strong>OK to text:</strong> (n/a)</div>`;

        return `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Packwood Plates Inquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f7fb;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#062338;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f7fb;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid rgba(14,165,168,0.22);border-radius:20px;overflow:hidden;">
            <tr>
              <td style=\"padding:18px 20px;background:linear-gradient(135deg,#103780 0%, #0EA5A8 100%);color:#ffffff;\">
                <div style=\"font-size:12px;letter-spacing:0.32em;font-weight:700;opacity:0.9;\">PACKWOOD PLATES</div>
                <div style=\"font-size:20px;font-weight:700;margin-top:6px;\">New Inquiry</div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 20px;">
                <div style="margin:0 0 10px;font-size:14px;color:rgba(6,35,56,0.8);">New inquiry from <a href="https://packwoodsplates.com" style="color:#0EA5A8;text-decoration:none;">packwoodsplates.com</a></div>
                <div style="margin:0 0 4px;"><strong>Name:</strong> ${safeName}</div>
                <div style="margin:0 0 4px;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#103780;text-decoration:underline;">${safeEmail}</a></div>
                ${phoneLine}
                ${consentLine}
                <hr style="border:none;border-top:1px solid rgba(6,35,56,0.12);margin:14px 0;" />
                <div style="font-weight:700;margin:0 0 6px;">Details</div>
                <div style="font-size:14px;line-height:1.55;color:rgba(6,35,56,0.9);white-space:normal;">${safeDetails}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;background:#f8fafc;color:rgba(6,35,56,0.65);font-size:12px;">
                <div>Reply directly to this email to respond to the customer.</div>
                <div style="margin-top:6px;">Packwood Plates • <a href="https://packwoodsplates.com" style="color:#0EA5A8;text-decoration:none;">packwoodsplates.com</a></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
      })(),
      headers: {
        "X-Packwood-Request-Id": requestId,
      },
      attachments: attachments.length ? attachments : undefined,
    });

    console.log("[api/contact] resend send result", {
      requestId,
      clientRequestId: clientRequestId || null,
      data,
      error,
      durationMs: Date.now() - startedAt,
    });

    if (error || !data?.id) {
      const errorMessage = error
        ? typeof error === "string"
          ? error
          : (error as { message?: string }).message || JSON.stringify(error)
        : "Unknown error sending email.";

      return Response.json(
        {
          ok: false,
          message: `Resend error: ${errorMessage}`,
          requestId,
          debug: { from, to, hasApiKey: Boolean(apiKey) },
        },
        { status: 502 }
      );
    }

    console.log("[api/contact] success", {
      requestId,
      clientRequestId: clientRequestId || null,
      resendId: data.id,
      durationMs: Date.now() - startedAt,
    });

    return Response.json({ ok: true, requestId, resendId: data.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error sending email.";
    console.error("[api/contact] exception", {
      requestId,
      clientRequestId: clientRequestId || null,
      message,
      durationMs: Date.now() - startedAt,
    });
    return Response.json(
      {
        ok: false,
        message: `Resend error: ${message}`,
        requestId,
        debug: { from, to, hasApiKey: Boolean(apiKey) },
      },
      { status: 502 }
    );
  }
}

