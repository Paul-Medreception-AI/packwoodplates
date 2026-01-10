import Image from "next/image";

const galleryImages = [
  { src: "/Colts.png", alt: "Colts plate" },
  { src: "/BuffaloBills.png", alt: "Bills plate" },
  { src: "/Dragonfly.webp", alt: "Dragonfly plate" },
  { src: "/Leashes.webp", alt: "Leashes plate" },
];

const lifestyleImages = ["/DolphinKidBreakfast.png"];

export default function Home() {
  return (
    <main className="space-y-20 bg-[#F7F3EA] text-[#0B2A3A]">
      <section
        className="hero relative flex min-h-[760px] items-center justify-center px-0 py-16 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6,35,56,0.25) 0%, rgba(6,35,56,0.82) 62%, rgba(6,35,56,0.95) 100%), url('/DolphinWallArt.png')",
          backgroundSize: "min(1100px, 92vw) auto",
          backgroundPosition: "center 18%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content hero-overlay mx-auto flex h-full max-w-4xl flex-col justify-between rounded-3xl border border-white/20 bg-[#F7F3EA]/90 px-6 py-10 text-center text-[#062338] shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
          <h1 className="text-5xl font-bold leading-tight text-[#062338] md:text-6xl">Your Wall Has a Story</h1>
          <div className="hero-buttons flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="/custom-plates"
              className="btn-primary rounded-lg bg-[#FF5A5F] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition hover:bg-[#FF7A7E]"
            >
              Design Your Own
            </a>
            <a
              href="/sports-teams"
              className="btn-secondary rounded-lg border border-[#0EA5A8] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#062338] transition hover:bg-[#0EA5A8] hover:text-white"
            >
              Browse Teams
            </a>
          </div>
          <p className="text-sm text-[#0B2A3A]/80">
            Hand-crafted metal art built from real license plates, sports history, and personal moments.
          </p>
        </div>
      </section>

      <section className="gallery space-y-6 px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Craftsmanship gallery</p>
          <h2 className="text-4xl font-semibold text-[#062338]">Real Metal. Real Craft.</h2>
        </div>
        <div className="grid gap-4 px-2 md:grid-cols-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-2xl border border-[#1F2933] bg-[#1F2933] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={240}
                unoptimized
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="lifestyle space-y-6 px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Lifestyle proof</p>
          <h2 className="text-4xl font-semibold text-[#062338]">Where Packwood Plates Live</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <Image
            src={lifestyleImages[0]}
            alt="Kid eating breakfast"
            width={680}
            height={420}
            unoptimized
            className="h-[420px] w-full rounded-3xl object-cover shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
          />
          <div className="flex flex-col justify-between rounded-3xl border border-[#0EA5A8]/20 bg-white p-6 text-left text-[#0B2A3A] shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
            <p className="text-2xl font-semibold text-[#062338]">From family kitchens to restaurants and beach houses, every piece becomes part of a real story.</p>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-[#0EA5A8]">Proof points</p>
              <ul className="space-y-1 text-sm">
                <li>Restaurant signs that glow with depth</li>
                <li>Kid-friendly kitchens with collectible flair</li>
                <li>Ocean-inspired art like Guy Harvey scenes</li>
              </ul>
              <a
                href="/custom-plates"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#FF5A5F] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#FF7A7E]"
              >
                Create Yours
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="story space-y-6 px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Story section</p>
          <h2 className="text-4xl font-semibold text-[#062338]">Every Plate Has a Past</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="order-1 lg:order-2">
            <Image
              src="/TurtleKidHand.png"
              alt="Turtle plate in hands"
              width={680}
              height={420}
              unoptimized
              className="h-[420px] w-full rounded-3xl object-cover shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div className="order-2 flex flex-col justify-center rounded-3xl border border-[#0EA5A8]/20 bg-gradient-to-br from-[#062338] to-[#083A57] p-8 text-white shadow-[0_25px_60px_rgba(0,0,0,0.25)] lg:order-1">
            <p className="text-lg text-white/95">
              Each Packwood Plate is cut from real license plates and steel — every number, scratch, and color once lived on the road.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.4em] text-[#5EEAD4]">Legacy Materials</p>
          </div>
        </div>
      </section>

      <section className="sports space-y-6 px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Sports Fans Strip</p>
          <h2 className="text-4xl font-semibold text-[#062338]">Your Team. Your Wall.</h2>
        </div>
        <div className="grid gap-4 px-2 md:grid-cols-3">
          {["/BuffaloBills.png", "/Ravens.png", "/CubsJourney.png"].map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-3xl border border-[#0EA5A8]/20 bg-[#062338] shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
            >
              <Image
                src={src}
                alt="Sports plate"
                width={520}
                height={260}
                unoptimized
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/sports-teams"
            className="btn-primary rounded-lg bg-[#0EA5A8] px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#14B8A6]"
          >
            Find Your Team
          </a>
        </div>
      </section>

      <section
        className="cta relative space-y-6 px-6 py-16"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6,35,56,0.92), rgba(14,165,168,0.55), rgba(255,90,95,0.65)), url('/GinnyJane.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center text-white">
          <h2 className="text-4xl font-semibold">Turn Your Story Into Steel</h2>
          <p className="max-w-2xl text-lg text-white/90">
            Names, teams, memories, logos — we turn them into wall-mounted art.
          </p>
          <a
            href="/contact"
            className="btn-primary rounded-lg bg-[#FF5A5F] px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#FF7A7E]"
          >
            Start My Piece
          </a>
        </div>
      </section>
    </main>
  );
}
