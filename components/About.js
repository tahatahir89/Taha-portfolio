import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const facts = [
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Learning since", value: "2022" },
  { label: "Projects shipped", value: "6 live builds" },
  { label: "Looking for", value: "Internship / junior role" },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Self-taught, and built on real projects"
            description="No bootcamp, no CS degree — just consistent building since 2022, and a habit of shipping things that actually run in production."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.05} className="space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              I learned web development the way most self-taught developers do —
              one concept at a time, then immediately trying to build something
              with it. HTML and CSS came first, then JavaScript, then the
              frameworks and tools that let me build faster: React, Tailwind
              CSS, and animation libraries like GSAP and Locomotive.js.
            </p>
            <p>
              From there I moved into the backend — Node.js, Express, and later
              NestJS — so I could own a project end to end instead of only the
              interface. That's where projects like{" "}
              <span className="text-white">Maroof Sweets</span>,{" "}
              <span className="text-white">MT Tutors</span>, and{" "}
              <span className="text-white">Chat-Saas</span> came from: real
              products with authentication, databases, and admin tooling, not
              just static pages.
            </p>
            <p>
              I plan, build, and deploy these independently — handling the UI,
              the API layer, and the database design, then shipping them with
              Git, GitHub, Vercel, and Railway. I'm currently looking for an
              internship or junior web developer role where I can bring that
              same hands-on approach to a professional team, and keep learning
              from developers who've done this longer than I have.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-base-border bg-base-card/60 p-5"
                >
                  <p className="font-mono text-xs text-ink-dim">{fact.label}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
