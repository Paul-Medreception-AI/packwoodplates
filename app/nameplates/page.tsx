import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Packwood Nameplates | Packwood Plates",
  description: "Simple nameplates and novelty plates—great gifts with the same Packwood craftsmanship.",
};

const products = [
  {
    title: "Classic Name Plate",
    price: "$39",
    description: "Single metal plate with any word or name.",
    bullets: ["Any name/word", "Clean cut edges", "Fast giftable option"],
  },
  {
    title: "Stacked Name Sign",
    price: "$79",
    description: "Two-plate or layered design for more depth.",
    bullets: ["Layered look", "More depth", "Bolder presence"],
  },
  {
    title: "Gift Plate",
    price: "$59",
    description: "Includes wall mount + gift packaging.",
    bullets: ["Gift-ready", "Wall mount included", "Easy win"],
  },
] as const;

const exampleWords = ["GINNY", "JANE", "LEASHES", "THE JOHNSONS", "SALT LIFE", "OCEAN AVE"] as const;

const examplePhotos = [
  { label: "GINNY & JANE", src: "/GinnyJane.webp" },
  { label: "LEASHES", src: "/Leashes.webp" },
  { label: "WINE", src: "/WineOclock.webp" },
  { label: "BEER 30", src: "/Beer30.webp" },
] as const;

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

function nameplatesContactHref(product?: string, price?: string) {
  const params = new URLSearchParams({ source: "nameplates" });
  if (product) params.set("product", product);
  if (price) params.set("price", price);
  return `/contact?${params.toString()}`;
}

export default function NameplatesPage() {
  return (
    <main className="bg-[#F7F3EA] text-[#0B2A3A] px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-[#0EA5A8]/20 bg-white p-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.10)] md:p-14">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">PACKWOOD NAMEPLATES</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#062338] md:text-6xl">Make It Yours. In Metal.</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-[#0B2A3A]/80 md:text-xl">
            Custom metal license plates with any name, word, or phrase — made to order.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={nameplatesContactHref()}
              className="inline-flex items-center justify-center rounded-full bg-[#FF5A5F] px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_14px_40px_rgba(0,0,0,0.12)] transition hover:bg-[#FF7A7E]"
            >
              Create My Plate
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-[#0EA5A8] bg-[#ECFEFF] px-8 py-3 text-sm font-semibold tracking-wide text-[#062338] transition hover:bg-[#0EA5A8] hover:text-white"
            >
              See Prices
            </Link>
          </div>
          <p className="mt-4 text-sm text-[#0B2A3A]/70">Fun. Giftable. Fast. Zero intimidation.</p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">PRODUCT TYPES</p>
          <h2 className="text-3xl font-semibold text-[#062338] md:text-4xl">Pick a Style</h2>
          <p className="mx-auto max-w-3xl text-[#0B2A3A]/80">
            Keep it simple or stack it up — same Packwood build quality, just made for quick nameplates.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-[#0EA5A8]/20 bg-white p-7 shadow-[0_25px_60px_rgba(0,0,0,0.10)]"
            >
              <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">Nameplates</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#062338]">{p.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[#FF5A5F]">{p.price}</p>
              <p className="mt-3 text-[#0B2A3A]/80">{p.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[#0B2A3A]/80">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFEFF] text-[#0EA5A8]">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={nameplatesContactHref(p.title, p.price)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#FF5A5F] px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#FF7A7E]"
                >
                  Create My Plate
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">EXAMPLES</p>
          <h2 className="text-3xl font-semibold text-[#062338] md:text-4xl">Popular Words & Gift Ideas</h2>
          <p className="mx-auto max-w-3xl text-[#0B2A3A]/80">
            Names, family signs, street signs, funny phrases — make it personal.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {examplePhotos.map((ex) => (
            <div
              key={ex.src}
              className="group overflow-hidden rounded-3xl border border-[#0EA5A8]/20 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={ex.src}
                alt={ex.label}
                width={700}
                height={500}
                unoptimized
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="flex items-center justify-between gap-3 px-4 py-4">
                <p className="text-sm font-semibold tracking-[0.22em] text-[#062338]">{ex.label}</p>
                <span className="rounded-full bg-[#ECFEFF] px-3 py-1 text-xs font-semibold text-[#0EA5A8]">example</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {exampleWords.map((w) => (
            <span
              key={w}
              className="rounded-full border border-[#0EA5A8]/20 bg-[#ECFEFF] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#062338]"
            >
              {w}
            </span>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto mt-12 max-w-6xl space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">PRICING</p>
          <h2 className="text-3xl font-semibold text-[#062338] md:text-4xl">Simple, Giftable Pricing</h2>
          <p className="mx-auto max-w-3xl text-[#0B2A3A]/80">
            No quotes. No emails. Instant conversion.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0EA5A8]/20 bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.10)] md:p-8">
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

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={nameplatesContactHref()}
              className="inline-flex items-center justify-center rounded-full bg-[#FF5A5F] px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#FF7A7E]"
            >
              Create My Plate
            </Link>
            <Link
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-[#0EA5A8] bg-[#ECFEFF] px-8 py-3 text-sm font-semibold tracking-wide text-[#062338] transition hover:bg-[#0EA5A8] hover:text-white"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto mt-12 max-w-6xl space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">HOW ORDERING WORKS</p>
          <h2 className="text-3xl font-semibold text-[#062338] md:text-4xl">From Idea to Metal (Fast)</h2>
          <p className="mx-auto max-w-3xl text-[#0B2A3A]/80">Simple flow. Quick gift. Big smile.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((s, idx) => (
            <div
              key={s}
              className="rounded-3xl border border-[#0EA5A8]/20 bg-white p-5 text-center shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ECFEFF] text-sm font-semibold text-[#0EA5A8]">
                {idx + 1}
              </div>
              <p className="mt-4 text-sm font-semibold tracking-wide text-[#062338]">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#0EA5A8]/20 bg-gradient-to-br from-[#062338] to-[#083A57] p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.16)]">
            <p className="text-xs font-semibold tracking-[0.32em] text-white/85">LOOKING FOR ART?</p>
            <h3 className="mt-3 text-3xl font-semibold">Looking for art, animals, or sports signs?</h3>
            <p className="mt-3 text-white/85">
              That’s the main Packwood Plates site — premium, cinematic, custom builds.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-wide text-[#062338] transition hover:bg-[#ECFEFF]"
              >
                Visit Packwood Plates →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#0EA5A8]/20 bg-white p-10 shadow-[0_25px_60px_rgba(0,0,0,0.10)]">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">JUST WANT A NAME OR SIMPLE SIGN?</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#062338]">You’re in the right place.</h3>
            <p className="mt-3 text-[#0B2A3A]/80">
              Packwood Nameplates is built for quick, giftable wins.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={nameplatesContactHref()}
                className="inline-flex items-center justify-center rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#FF7A7E]"
              >
                Create My Plate
              </Link>
              <Link
                href="/custom-plates"
                className="inline-flex items-center justify-center rounded-full border border-[#0EA5A8] bg-[#ECFEFF] px-7 py-3 text-sm font-semibold tracking-wide text-[#062338] transition hover:bg-[#0EA5A8] hover:text-white"
              >
                Browse Custom Plates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
