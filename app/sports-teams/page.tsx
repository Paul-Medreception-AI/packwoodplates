import Image from "next/image";

const featuredTeams = [
  { name: "Buffalo Bills", src: "/BuffaloBills.png" },
  { name: "Bills Road Trip", src: "/BillsRoadTripToVictory.png" },
  { name: "Indianapolis Colts", src: "/Colts.png" },
  { name: "Chicago Cubs", src: "/CubsJourney.png" },
  { name: "Detroit Lions", src: "/DetroitLions.png" },
  { name: "Green Bay Packers", src: "/Packers.png" },
  { name: "Baltimore Ravens", src: "/Ravens.png" },
  { name: "Pittsburgh Steelers", src: "/Steelers.png" },
  { name: "Texas Longhorns", src: "/TexasLonghorns.jpg" },
];

const startingAt = "$199";
const typicalRange = "$199–$499";

function sportsTeamContactHref(team?: string) {
  const params = new URLSearchParams({ prefill: "sports-team" });
  if (team) params.set("team", team);
  return `/contact?${params.toString()}`;
}

const teamSections = [
  {
    title: "NFL Teams",
    description: "Seasons, rivalries, and game-day energy captured in mirror-polished steel.",
  },
  {
    title: "College Teams",
    description: "Tailgates, terraces, and alma mater pride represented in heavy-gauge stainless.",
  },
  {
    title: "High School Teams",
    description: "Celebrate your community champions with durable, collectible tribute plates.",
  },
  {
    title: "Custom Team Requests",
    description: "Request a plate for the club, league, or fantasy roster that deserves an exclusive badge.",
  },
];

export default function SportsTeamsPage() {
  return (
    <main className="space-y-12 bg-[#F7F3EA] px-6 py-16 text-[#0B2A3A]">
      <section className="mx-auto max-w-6xl space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Team Loyalty in Forged Steel</p>
        <h1 className="text-4xl font-semibold text-[#062338] md:text-6xl">Show Your Team Loyalty in Steel</h1>
        <p className="text-lg text-[#0B2A3A]/80 md:text-xl">
          From college teams to pro franchises, Packwood Plates creates bold, wall-mounted steel plates that show your pride.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#teams"
            className="rounded-full bg-[#FF5A5F] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E]"
          >
            Browse Teams
          </a>
          <a
            href="#sections"
            className="rounded-full border border-[#0EA5A8] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#062338] transition hover:bg-[#0EA5A8] hover:text-white"
          >
            Request Your Team
          </a>
        </div>
      </section>

      <section id="teams" className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Featured plates</p>
          <h2 className="text-3xl font-semibold text-[#062338] md:text-4xl">Popular Teams We’ve Built</h2>
          <p className="text-base text-[#0B2A3A]/80">
            Tap any example to get something like it — or request your exact team, colors, and style.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTeams.map((team) => (
            <div
              key={team.name}
              className="group overflow-hidden rounded-3xl border border-[#0EA5A8]/20 bg-[#062338] shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
            >
              <Image
                src={team.src}
                alt={team.name}
                width={900}
                height={600}
                unoptimized
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-[#062338] via-[#083A57] to-[#062338] px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">{team.name}</p>
                <a
                  href={sportsTeamContactHref(team.name)}
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5EEAD4] transition hover:text-white"
                >
                  Request
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <a
            href={sportsTeamContactHref()}
            className="rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E]"
          >
            Request a Team Plate
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
        <div className="grid gap-6 md:grid-cols-[1.3fr,0.7fr] md:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Pricing</p>
            <h2 className="text-3xl font-semibold text-[#062338]">Sports Team Plates</h2>
            <p className="text-[#0B2A3A]/80">
              Because every build is cut-to-order (size, detail, and plate layout), we price these as a starting point + typical range.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="rounded-full bg-[#ECFEFF] px-4 py-2 text-sm font-semibold text-[#062338]">
                Starting at <span className="text-[#FF5A5F]">{startingAt}</span>
              </span>
              <span className="rounded-full border border-[#0EA5A8]/20 bg-white px-4 py-2 text-sm font-semibold text-[#062338]">
                Most builds range <span className="text-[#0EA5A8]">{typicalRange}</span>
              </span>
            </div>
            <p className="text-sm text-[#0B2A3A]/70">Want an exact quote? We’ll reply within 1–2 business days.</p>
          </div>

          <div className="flex md:justify-end">
            <a
              href={sportsTeamContactHref()}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E] md:w-auto"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <section id="sections" className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {teamSections.map((section) => (
          <article
            key={section.title}
            className="flex flex-col justify-between rounded-3xl border border-[#0EA5A8]/20 bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.10)]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#0EA5A8]">Packwood Plates</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#062338]">{section.title}</h2>
              <p className="mt-2 text-[#0B2A3A]/80">{section.description}</p>
            </div>
            <a
              href={sportsTeamContactHref(section.title)}
              className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-[#062338] transition hover:text-[#0EA5A8]"
            >
              Request Your Team
              <span className="ml-2 text-lg">→</span>
            </a>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl rounded-3xl border border-[#0EA5A8]/20 bg-gradient-to-r from-[#062338] via-[#083A57] to-[#062338] p-8 text-center text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
        <h3 className="text-3xl font-semibold text-white">Don’t see your team?</h3>
        <p className="mt-2 text-white/85">
          Every plate is cut-to-order, so drop us a line with the colors, crest, or tribute you’re after and we’ll sculpt it.
        </p>
        <a
          href={sportsTeamContactHref("Custom Team Request")}
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#FF5A5F] px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#FF7A7E]"
        >
          Request a Custom Plate
        </a>
      </section>
    </main>
  );
}
