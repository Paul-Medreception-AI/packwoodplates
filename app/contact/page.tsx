import { Suspense } from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="space-y-10 bg-[#F7F3EA] px-6 py-16 text-[#0B2A3A]">
      <section className="mx-auto max-w-5xl space-y-4 text-center">
        <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">CONTACT</p>
        <h1 className="text-4xl font-semibold text-[#062338] md:text-6xl">Let’s Build Your Plate</h1>
        <p className="text-lg text-[#0B2A3A]/80 md:text-xl">
          Tell us what you want — a team, a name, a logo, or something totally custom.
        </p>
      </section>

      <section className="mx-auto max-w-5xl rounded-3xl border border-[#0EA5A8]/20 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
        <Suspense
          fallback={<div className="rounded-2xl border border-[#0EA5A8]/20 bg-[#ECFEFF] px-5 py-4 text-sm text-[#062338]">Loading…</div>}
        >
          <ContactForm />
        </Suspense>
      </section>
    </main>
  );
}
