import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Metal Art — Pricing | Packwood Plates",
  description:
    "Transparent starting prices for custom metal art made from real license plates. Pricing varies by size, complexity, and materials.",
};

const categories = [
  {
    title: "Custom Art Pieces",
    price: "Starting at $249",
    bullets: ["Dolphins", "Dragonflies", "Wildlife", "Custom shapes", "License plate collages"],
    range: "Most pieces range from $249–$799 depending on size and complexity.",
    cta: { href: "/contact", label: "Request a Design" },
  },
  {
    title: "Sports Team Plates",
    price: "Starting at $199",
    bullets: ["NFL", "College", "High school", "Custom fan art"],
    range: "Most sports pieces range from $199–$499",
    cta: { href: "/sports-teams", label: "Find Your Team" },
  },
  {
    title: "Business & Event Signs",
    price: "Starting at $299",
    bullets: ["Logos", "Restaurant signs", "Offices", "Events", "Trade show displays"],
    range: "Large or multi-layer signs range from $299–$1,500+",
    cta: { href: "/contact", label: "Get a Quote" },
  },
] as const;

const priceFactors = [
  { icon: "📐", title: "Size", copy: "Bigger pieces require more metal, cutting time, and finishing." },
  { icon: "🧩", title: "Number of plates", copy: "More plates means more material, layout, and detailing." },
  { icon: "✂️", title: "Shape complexity", copy: "Fine details and curves take additional cutting and cleanup." },
  { icon: "🎨", title: "Color matching", copy: "Matching specific looks can require more plate selection and layering." },
  { icon: "🧷", title: "Mounting style", copy: "Different backing and hanging options change labor and materials." },
] as const;

export default function PricingPage() {
  return (
    <main className="bg-[#F7F3EA] text-[#0B2A3A]">
      <section className="px-6 pb-10 pt-16">
        <div className="mx-auto max-w-5xl text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">PRICING</p>
          <h1 className="text-4xl font-semibold text-[#062338] md:text-6xl">Custom Metal Art — Pricing</h1>
          <p className="mx-auto max-w-3xl text-lg text-[#0B2A3A]/80 md:text-xl">
            Every Packwood Plate is handcrafted from real metal and real license plates. Pricing depends on size,
            complexity, and the story being told.
          </p>
        </div>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#0EA5A8]/20 bg-white p-7 shadow-[0_30px_90px_rgba(0,0,0,0.10)]"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#062338]">{item.title}</h2>
                <p className="text-sm font-semibold text-[#FF5A5F]">{item.price}</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-[#0B2A3A]/80">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFEFF] text-[#0EA5A8]">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-[#0B2A3A]/75">{item.range}</p>

              <div className="mt-6">
                <Link
                  href={item.cta.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0EA5A8] px-5 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#14B8A6]"
                >
                  {item.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-gradient-to-br from-[#062338] to-[#083A57] p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.16)]">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.32em] text-white/80">WHAT AFFECTS PRICE?</p>
            <h2 className="text-3xl font-semibold">What affects price?</h2>
            <p className="text-white/85">
              Because every piece is custom-built from real metal, your final price is based on how much material and
              craftsmanship your piece requires.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-xl">
                    {f.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-white/80">{f.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-white p-10 shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
          <div className="grid gap-8 lg:grid-cols-[1.3fr,0.7fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.32em] text-[#0EA5A8]">SIMPLE OPTION</p>
              <h2 className="text-3xl font-semibold text-[#062338]">Just want a simple plate?</h2>
              <p className="text-[#0B2A3A]/80">
                Looking for a simple name, street sign, or novelty plate? We have options that make great gifts—without
                cheapening custom art.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/nameplates"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#FF5A5F] px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#FF7A7E] lg:w-auto"
              >
                Visit Packwood Nameplates →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

