"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

type ApiResult =
  | { ok: true; requestId?: string; resendId?: string }
  | { ok: false; message: string; requestId?: string; debug?: unknown };

function makeClientRequestId() {
  try {
    if (typeof globalThis.crypto !== "undefined" && typeof globalThis.crypto.randomUUID === "function") {
      return globalThis.crypto.randomUUID();
    }
  } catch {
    // ignore
  }
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const prefill = useMemo(() => {
    const source = searchParams.get("source");

    if (source === "nameplates") {
      const product = searchParams.get("product");
      const price = searchParams.get("price");

      const headline = product
        ? `I would like to order the ${product}${price ? ` (${price})` : ""}.`
        : "I would like to order a Packwood Nameplate.";

      return [
        headline,
        "",
        "Details to include:",
        "- Text / Name:",
        "- Size (single, double, triple):",
        "- Color / Style:",
        "- Where it’s going (wall / desk / gift):",
        "- Deadline / need-by date:",
        "- Shipping city/state:",
        "- Any reference photo (optional):",
        "",
      ].join("\n");
    }

    const genericPrefill = searchParams.get("prefill");
    if (genericPrefill === "sports-team" || source === "sports-teams") {
      const team = searchParams.get("team");
      const headline = team
        ? `I would like to request a ${team} sports team plate.`
        : "I would like to request a sports team plate.";

      return [
        headline,
        "",
        "Details to include:",
        "- Team name:",
        "- League (NFL / College / High School / Other):",
        "- Size / approximate dimensions:",
        "- Colors / vibe:",
        "- Any logo/era/version you want:",
        "- Where it’s going (man cave / office / garage / gift):",
        "- Deadline / need-by date:",
        "- Shipping city/state:",
        "- Reference image or link (optional):",
        "",
      ].join("\n");
    }

    return "";
  }, [searchParams]);

  const [details, setDetails] = useState<string>("");

  useEffect(() => {
    if (!prefill) return;
    setDetails((current) => (current.trim().length > 0 ? current : prefill));
  }, [prefill]);

  const isDisabled = useMemo(() => pending || status.state === "sending", [pending, status.state]);

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus({ state: "sending" });

        const form = event.currentTarget;
        const formData = new FormData(form);
        const clientRequestId = makeClientRequestId();
        formData.set("_clientRequestId", clientRequestId);

        console.log("[ContactForm] submit", {
          clientRequestId,
          hasAttachment: (formData.get("attachment") instanceof File && (formData.get("attachment") as File).size > 0) || false,
          detailsLength: String(formData.get("details") || "").length,
          hasEmail: Boolean(formData.get("email")),
        });

        startTransition(async () => {
          let result: ApiResult;
          try {
            const startedAt = performance.now();
            const response = await fetch("/api/contact", { method: "POST", body: formData });
            const durationMs = Math.round(performance.now() - startedAt);

            console.log("[ContactForm] response", {
              clientRequestId,
              status: response.status,
              ok: response.ok,
              durationMs,
            });
            if (!response.ok) {
              let message = "Request failed. Please try again.";
              let requestId: string | undefined;
              try {
                const body = (await response.json()) as { message?: unknown; requestId?: unknown; debug?: unknown };
                if (typeof body.message === "string" && body.message.trim().length > 0) message = body.message;
                if (typeof body.requestId === "string") requestId = body.requestId;

                console.error("[ContactForm] server error body", {
                  clientRequestId,
                  requestId: requestId || null,
                  body,
                });
              } catch {
                // ignore
              }

              if (requestId) {
                console.error("[ContactForm] request failed (server requestId)", { clientRequestId, requestId });
              }
              setStatus({ state: "error", message });
              return;
            }

            result = (await response.json()) as ApiResult;
            console.log("[ContactForm] success body", {
              clientRequestId,
              requestId: result.requestId || null,
              resendId: "resendId" in result ? result.resendId || null : null,
              result,
            });
          } catch (error) {
            console.error("[ContactForm] network error", error);
            setStatus({ state: "error", message: "Network error. Please try again." });
            return;
          }

          if (result.ok) {
            form.reset();
            setDetails("");
            setStatus({ state: "success" });
            return;
          }
          setStatus({ state: "error", message: result.message });
          console.error("[ContactForm] send failed", result);
        });
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-[#062338]">
          Name
          <input
            className="rounded-2xl border border-[#0EA5A8]/25 bg-white px-4 py-3 text-base text-[#062338] outline-none transition focus:border-[#0EA5A8] focus:ring-4 focus:ring-[#5EEAD4]/30"
            placeholder="Jamie Carter"
            type="text"
            name="name"
            autoComplete="name"
            required
            disabled={isDisabled}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-[#062338]">
          Email
          <input
            className="rounded-2xl border border-[#0EA5A8]/25 bg-white px-4 py-3 text-base text-[#062338] outline-none transition focus:border-[#0EA5A8] focus:ring-4 focus:ring-[#5EEAD4]/30"
            placeholder="you@example.com"
            type="email"
            name="email"
            autoComplete="email"
            required
            disabled={isDisabled}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-[#062338]">
          Phone (optional)
          <input
            className="rounded-2xl border border-[#0EA5A8]/25 bg-white px-4 py-3 text-base text-[#062338] outline-none transition focus:border-[#0EA5A8] focus:ring-4 focus:ring-[#5EEAD4]/30"
            placeholder="(941) 555-0123"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            disabled={isDisabled}
          />
          <p className="text-xs text-[#0B2A3A]/70">Optional for quick clarifying questions.</p>
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-[#0EA5A8]/20 bg-[#ECFEFF] px-4 py-4 text-sm text-[#062338]">
          <input
            type="checkbox"
            name="consentText"
            value="yes"
            className="mt-1 h-4 w-4 accent-[#0EA5A8]"
            defaultChecked
            disabled={isDisabled}
          />
          <span>
            OK to text me about this quote. Uncheck if you do not want text updates.
            <span className="block text-xs text-[#0B2A3A]/70">
              Only for updates about this request. Msg/data rates may apply.
            </span>
          </span>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-[#062338]">
        What do you want made?
        <textarea
          className="min-h-[140px] rounded-2xl border border-[#0EA5A8]/25 bg-white px-4 py-3 text-base text-[#062338] outline-none transition focus:border-[#0EA5A8] focus:ring-4 focus:ring-[#5EEAD4]/30"
          placeholder="Team name, colors, sizes, where it’s going, and any logo you want us to use."
          name="details"
          required
          disabled={isDisabled}
          value={details}
          onChange={(event) => setDetails(event.currentTarget.value)}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-[#062338]">
        Upload design or logo (optional)
        <input
          type="file"
          name="attachment"
          accept="image/*,.pdf"
          className="rounded-2xl border border-[#0EA5A8]/25 bg-white px-4 py-3 text-[#062338] file:mr-4 file:rounded-full file:border-0 file:bg-[#0EA5A8] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#14B8A6]"
          disabled={isDisabled}
        />
        <p className="text-xs text-[#0B2A3A]/70">Max 5MB. PNG/JPG/PDF works best.</p>
      </label>

      {status.state === "success" ? (
        <div className="rounded-2xl border border-[#0EA5A8]/25 bg-[#ECFEFF] px-5 py-4 text-sm text-[#062338]">
          Sent — we’ll reply soon.
        </div>
      ) : null}
      {status.state === "error" ? (
        <div className="rounded-2xl border border-[#FF5A5F]/30 bg-[#FFF1F2] px-5 py-4 text-sm text-[#7F1D1D]">
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isDisabled}
        className="w-full rounded-full bg-[#FF5A5F] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending || status.state === "sending" ? "Sending…" : "Send My Design"}
      </button>

      <p className="text-center text-sm text-[#0B2A3A]/70">You’ll receive a quote within 1–2 business days.</p>
    </form>
  );
}
