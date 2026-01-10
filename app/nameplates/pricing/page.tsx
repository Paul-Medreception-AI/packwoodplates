import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nameplates Pricing | Packwood Nameplates",
  description: "Simple, giftable pricing for custom metal nameplates made to order.",
};

function nameplatesContactHref() {
  const params = new URLSearchParams({ source: "nameplates" });
  return `/contact?${params.toString()}`;
}

const pricingRows = [
  { product: "Single Plate", price: "$39" },
  { product: "Double Plate", price: "$79" },
  { product: "Triple Plate", price: "$119" },
  { product: "Custom Shape", price: "$149+" },
] as const;

const steps = [
  "Enter your text",
  "Choose size",
  "Choose color style",
  "Checkout",
  "We build it",
] as const;

export default function NameplatesPricingPage() {
  return (
    <main className="bg-[#F7F3EA] px-6 py-16 text-[#0B2A3A]">
      <section className="mx-auto max-w-5xl space-y-4 text-center">
        <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">NAMEPLATES PRICING</p>
        <h1 className="text-4xl font-semibold text-[#062338] md:text-6xl">Simple Pricing. Fast Gifts.</h1>
        <p className="mx-auto max-w-3xl text-lg text-[#0B2A3A]/80 md:text-xl">
          No quotes. No emails. Just pick your style and we make it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href={nameplatesContactHref()}
            className="inline-flex items-center justify-center rounded-full bg-[#FF5A5F] px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_14px_40px_rgba(0,0,0,0.12)] transition hover:bg-[#FF7A7E]"
          >
            Create My Plate
          </Link>
          <Link
            href="/nameplates"
            className="inline-flex items-center justify-center rounded-full border border-[#0EA5A8] bg-[#ECFEFF] px-8 py-3 text-sm font-semibold tracking-wide text-[#062338] transition hover:bg-[#0EA5A8] hover:text-white"
          >
            See Examples
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[#0EA5A8]/20 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.10)] md:p-8">
        <div className="grid gap-3">
          {pricingRows.map((row) => (
            <div
              key={row.product}
              className="flex items-center justify-between rounded-2xl border border-[#0EA5A8]/15 bg-[#F7F3EA] px-5 py-4"
            >
              <p className="text-sm font-semibold tracking-wide text-[#062338]">{row.product}</p>
              <p className="text-sm font-semibold text-[#FF5A5F]">{row.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[#0EA5A8]/20 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.10)] md:p-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">HOW ORDERING WORKS</p>
          <h2 className="text-3xl font-semibold text-[#062338]">Five clicks to metal.</h2>
          <p className="mx-auto max-w-3xl text-[#0B2A3A]/80">Friendly, fast, and made to feel personal.</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {steps.map((s, idx) => (
            <div
              key={s}
              className="rounded-3xl border border-[#0EA5A8]/20 bg-[#ECFEFF] px-4 py-5 text-center"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#0EA5A8]">
                {idx + 1}
              </div>
              <p className="mt-4 text-sm font-semibold tracking-wide text-[#062338]">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={nameplatesContactHref()}
            className="inline-flex items-center justify-center rounded-full bg-[#FF5A5F] px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#FF7A7E]"
          >
            Create My Plate
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#0EA5A8]/30 bg-white px-8 py-3 text-sm font-semibold tracking-wide text-[#062338] transition hover:border-[#0EA5A8]"
          >
            Looking for art? Packwood Plates →
          </Link>
        </div>
      </section>
    </main>
  );
}
