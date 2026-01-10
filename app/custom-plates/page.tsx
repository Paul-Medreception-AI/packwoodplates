import Image from "next/image";

const animalPlates = [
  { name: "Turtle", src: "/TurtleKidHand.png" },
  { name: "Two Turtles", src: "/TwoTurtles.png" },
  { name: "Turtle", src: "/Turtle.webp" },
  { name: "Salt Life Turtle", src: "/SaltLifeTurtle.webp" },
  { name: "Seahorse", src: "/Seahorse.webp" },
  { name: "Dolphin", src: "/dolphin.webp" },
  { name: "Dragonfly", src: "/Dragonfly.webp" },
];

const otherCustomPlates = [
  { name: "Ginny & Jane", src: "/GinnyJane.webp" },
  { name: "Jeep Life", src: "/JeepLife.webp" },
  { name: "Wine O'Clock", src: "/WineOclock.webp" },
  { name: "Beach Bum", src: "/BeachBum.webp" },
  { name: "Paradise", src: "/Paradise.webp" },
  { name: "US Map", src: "/USMap.webp" },
  { name: "US Navy", src: "/USNavy.webp" },
];

const requestIdeas = ["Last names", "Street signs", "Garage names", "Ranch signs", "Gift plates", "Business logos", "Boat names"];

function PlateCard({ name, src }: { name: string; src: string }) {
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
          Request
        </a>
      </div>
    </div>
  );
}

export default function CustomPlatesPage() {
  return (
    <main className="space-y-14 bg-[#F7F3EA] px-6 py-16 text-[#0B2A3A]">
      <section className="mx-auto max-w-6xl space-y-5 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Personalized Metal Plates</p>
        <h1 className="text-4xl font-semibold text-[#062338] md:text-6xl">Make It Personal</h1>
        <p className="mx-auto max-w-3xl text-lg text-[#0B2A3A]/80 md:text-xl">
          Names, nicknames, animals, family signs, garage plates, beach house slogans — if you can imagine it, we can cut it.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#animals"
            className="rounded-full bg-[#FF5A5F] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E]"
          >
            View Animal Plates
          </a>
          <a
            href="#other"
            className="rounded-full border border-[#0EA5A8] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#062338] transition hover:bg-[#0EA5A8] hover:text-white"
          >
            Other Customs
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.10)]">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Popular requests</p>
            <h2 className="text-3xl font-semibold text-[#062338]">Custom Plates, Built Like Trophies</h2>
            <p className="text-[#0B2A3A]/80">
              Send us your idea (words, colors, shape, and vibe). We’ll turn it into steel art with clean edges and a collector feel.
            </p>
          </div>
          <div className="rounded-2xl border border-[#0EA5A8]/15 bg-[#F7F3EA] p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Ideas</p>
            <ul className="mt-3 grid gap-2 text-sm text-[#0B2A3A]/80 sm:grid-cols-2">
              {requestIdeas.map((item) => (
                <li key={item} className="rounded-xl border border-[#0EA5A8]/15 bg-white px-3 py-2">
                  <span className="font-semibold text-[#062338]">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#FF5A5F] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#FF7A7E]"
            >
              Design My Plate
            </a>
            <p className="mt-3 text-center text-sm text-[#0B2A3A]/70">You’ll receive a quote within 1–2 business days.</p>
          </div>
        </div>
      </section>

      <section id="animals" className="mx-auto max-w-6xl space-y-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Animals together</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#062338] md:text-4xl">Animal Plates</h2>
          <p className="mx-auto mt-2 max-w-3xl text-[#0B2A3A]/80">
            Ocean, wildlife, and custom silhouettes — grouped here so your animal builds feel like a collection.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {animalPlates.map((plate) => (
            <PlateCard key={`${plate.name}-${plate.src}`} name={plate.name} src={plate.src} />
          ))}
        </div>
      </section>

      <section id="other" className="mx-auto max-w-6xl space-y-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Everything else</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#062338] md:text-4xl">Other Custom Builds</h2>
          <p className="mx-auto mt-2 max-w-3xl text-[#0B2A3A]/80">
            Slogans, lifestyle, brand marks, and one-off ideas — if you can describe it, we can cut it.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherCustomPlates.map((plate) => (
            <PlateCard key={`${plate.name}-${plate.src}`} name={plate.name} src={plate.src} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-gradient-to-r from-[#062338] via-[#083A57] to-[#062338] p-10 text-center text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
        <h3 className="text-3xl font-semibold">Tell us what you want. We’ll make it real.</h3>
        <p className="mx-auto mt-3 max-w-3xl text-white/85">
          Share your story, colors, and copy. We’ll turn it into a collectible plate ready for your wall.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E]"
          >
            Design My Plate
          </a>
          <a
            href="/sports-teams"
            className="rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/15"
          >
            Shop Team Plates
          </a>
        </div>
      </section>
    </main>
  );
}
