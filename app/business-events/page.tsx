import Image from "next/image";

const featuredBuilds = [
  { name: "Paradise", src: "/ParadiseAd.png" },
  { name: "Beer 30", src: "/Beer30.webp" },
  { name: "Ginny Jane", src: "/GinnyJane.webp" },
  { name: "Wine O'Clock", src: "/WineOclock.webp" },
  { name: "US Map", src: "/USMap.webp" },
  { name: "US Navy", src: "/USNavy.webp" },
];

const useCases = [
  {
    title: "Bars & Restaurants",
    description: "Signature wall pieces, menu-callouts, and bar signage that look like collectibles — not print-outs.",
  },
  {
    title: "Retail & Storefronts",
    description: "Brand marks and logo signs with depth, shine, and presence from the sidewalk to the back wall.",
  },
  {
    title: "Events & Sponsorship",
    description: "Sponsor recognition plates, step-and-repeat accents, and VIP gifts that people keep.",
  },
  {
    title: "Real Estate & Developments",
    description: "Neighborhood names, model-home pieces, and community identity signage built to last.",
  },
  {
    title: "Military / Clubs / Causes",
    description: "Tribute pieces for units, VFW halls, service clubs, and fundraisers with heritage weight.",
  },
  {
    title: "Corporate Gifts",
    description: "Client thank-yous, partner awards, and milestone gifts with a premium, metallic finish.",
  },
];

function BuildCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#0EA5A8]/20 bg-[#062338] shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
      <Image
        src={src}
        alt={name}
        width={900}
        height={650}
        unoptimized
        className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
      />
      <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-[#062338] via-[#083A57] to-[#062338] px-5 py-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">{name}</p>
        <a href="/contact" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5EEAD4] transition hover:text-white">
          Quote
        </a>
      </div>
    </div>
  );
}

export default function BusinessEventsPage() {
  return (
    <main className="space-y-14 bg-[#F7F3EA] px-6 py-16 text-[#0B2A3A]">
      <section className="mx-auto max-w-6xl space-y-6">
        <div
          className="relative overflow-hidden rounded-[32px] border border-[#0EA5A8]/20 bg-[#062338] px-6 py-14 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.20)]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(6,35,56,0.92), rgba(6,35,56,0.78), rgba(6,35,56,0.62)), radial-gradient(circle at 65% 35%, rgba(14,165,168,0.28), transparent 58%), radial-gradient(circle at 20% 80%, rgba(255,90,95,0.20), transparent 55%), url('/ParadiseAd.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#062338]/55 px-6 py-8 backdrop-blur-md shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/90">Business & Events</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl [text-shadow:0_14px_45px_rgba(0,0,0,0.65)]">Your Brand in Steel</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/95 md:text-xl [text-shadow:0_10px_30px_rgba(0,0,0,0.65)]">
              Storefronts, bars, breweries, trade shows, real estate offices, clubs, and events — we turn logos and slogans into pieces people remember.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#featured"
                className="rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition hover:bg-[#FF7A7E]"
              >
                See Examples
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/15"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-6xl space-y-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Featured builds</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#062338] md:text-4xl">Signs, Promos, and Event Pieces</h2>
          <p className="mx-auto mt-2 max-w-3xl text-[#0B2A3A]/80">
            These are real examples from the Packwood Plates style universe — bold, legible, and built to feel premium.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBuilds.map((build) => (
            <BuildCard key={`${build.name}-${build.src}`} name={build.name} src={build.src} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <a
            href="/contact"
            className="rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E]"
          >
            Request a Business Quote
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Use cases</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#062338] md:text-4xl">Where These Plates Shine</h2>
          <p className="mx-auto mt-2 max-w-3xl text-[#0B2A3A]/80">
            Built for visibility, durability, and that “people stop and look” effect.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl border border-[#0EA5A8]/20 bg-white p-7 shadow-[0_25px_60px_rgba(0,0,0,0.10)]"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Use case</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#062338]">{c.title}</h3>
              <p className="mt-2 text-[#0B2A3A]/80">{c.description}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-[#062338] transition hover:text-[#0EA5A8]"
              >
                Get a quote
                <span className="ml-2 text-lg">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.10)]">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#062338]">Fast, Clear, Repeatable</h2>
            <p className="mt-2 text-[#0B2A3A]/80">Send the idea. We translate it into steel. You hang it and watch people notice.</p>
          </div>
          <div className="md:col-span-2 grid gap-4">
            {[
              {
                title: "Share your logo + size",
                text: "PNG/JPG is fine. Tell us where it’s going (wall, booth, bar, entrance) and the rough size.",
              },
              {
                title: "Approve the look",
                text: "We confirm layout, materials, and finish so it reads clean from across the room.",
              },
              {
                title: "We build + ship",
                text: "Laser cut, finished, and ready to mount. Great for installs, gifts, and event drops.",
              },
            ].map((step, idx) => (
              <div key={step.title} className="rounded-2xl border border-[#0EA5A8]/15 bg-[#F7F3EA] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0EA5A8]">Step {idx + 1}</p>
                <p className="mt-2 text-xl font-semibold text-[#062338]">{step.title}</p>
                <p className="mt-2 text-[#0B2A3A]/80">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-gradient-to-r from-[#062338] via-[#083A57] to-[#062338] p-10 text-center text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
        <h3 className="text-3xl font-semibold">Turn your logo into something people remember.</h3>
        <p className="mx-auto mt-3 max-w-3xl text-white/85">
          Send your brand guide, event vibe, or sponsor list. We’ll craft a piece that feels premium and photographs beautifully.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition hover:bg-[#FF7A7E]"
          >
            Get a Quote
          </a>
          <a
            href="/custom-plates"
            className="rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/15"
          >
            See Custom Plates
          </a>
        </div>
      </section>
    </main>
  );
}
