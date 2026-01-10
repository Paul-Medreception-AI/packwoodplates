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

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = cleanEnvEmail(process.env.RESEND_FROM || "orders@packwoodsplates.com");
  const to = cleanEnvEmail(process.env.CONTACT_TO || "orders@packwoodsplates.com");

  if (!apiKey) {
    return Response.json({ ok: false, message: "Missing RESEND_API_KEY on the server." }, { status: 500 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ ok: false, message: "Invalid form submission." }, { status: 400 });
  }

  const name = asString(formData.get("name")).trim();
  const email = asString(formData.get("email")).trim();
  const phone = asString(formData.get("phone")).trim();
  const consentText = asString(formData.get("consentText")).trim() === "yes";
  const details = asString(formData.get("details")).trim();
  const file = formData.get("attachment");

  if (!name || !email || !details) {
    return Response.json({ ok: false, message: "Please complete name, email, and details." }, { status: 400 });
  }

  const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
  if (file instanceof File && file.size > 0) {
    const maxBytes = 5 * 1024 * 1024;
    if (file.size > maxBytes) {
      return Response.json({ ok: false, message: "Attachment is too large (max 5MB)." }, { status: 400 });
    }

    const contentType = file.type || "application/octet-stream";
    const bytes = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name || "attachment", content: bytes, contentType });
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Packwood Plates Inquiry — ${name}`,
      text: [
        "New inquiry from packwoodplates.com",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "Phone: (not provided)",
        phone ? `OK to text: ${consentText ? "Yes" : "No"}` : "OK to text: (n/a)",
        "",
        "Details:",
        details,
      ].join("\n"),
      attachments: attachments.length ? attachments : undefined,
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
          debug: { from, to, hasApiKey: Boolean(apiKey) },
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error sending email.";
    return Response.json(
      {
        ok: false,
        message: `Resend error: ${message}`,
        debug: { from, to, hasApiKey: Boolean(apiKey) },
      },
      { status: 502 }
    );
  }
}

