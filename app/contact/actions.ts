"use server";

import { Resend } from "resend";

type SendContactResult =
  | { ok: true }
  | {
      ok: false;
      message: string;
      debug?: {
        hasApiKey: boolean;
        hasFrom: boolean;
        from?: string;
      };
    };

function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

export async function sendContact(formData: FormData): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "onboarding@resend.dev";
  const to = process.env.CONTACT_TO || "packwoodplates@gmail.com";

  if (!apiKey) {
    return {
      ok: false,
      message: "Missing RESEND_API_KEY on the server.",
      debug: { hasApiKey: false, hasFrom: Boolean(process.env.RESEND_FROM), from },
    };
  }

  const name = asString(formData.get("name")).trim();
  const email = asString(formData.get("email")).trim();
  const phone = asString(formData.get("phone")).trim();
  const consentText = asString(formData.get("consentText")).trim() === "yes";
  const details = asString(formData.get("details")).trim();
  const file = formData.get("attachment");

  if (!name || !email || !details) {
    return { ok: false, message: "Please complete name, email, and details." };
  }

  const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
  if (file instanceof File && file.size > 0) {
    const maxBytes = 5 * 1024 * 1024;
    if (file.size > maxBytes) {
      return { ok: false, message: "Attachment is too large (max 5MB)." };
    }

    const contentType = file.type || "application/octet-stream";
    const bytes = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name || "attachment", content: bytes, contentType });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
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

    return { ok: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error sending email.";
    return {
      ok: false,
      message: `Resend error: ${message}`,
      debug: { hasApiKey: true, hasFrom: Boolean(process.env.RESEND_FROM), from },
    };
  }
}
