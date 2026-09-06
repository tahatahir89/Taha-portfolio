import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="What I build with"
            description="Technologies I actually use in production, grouped by where they sit in the stack — not a percentage bar in sight."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div className="h-full rounded-2xl border border-base-border bg-base-card/50 p-6">
                <h3 className="font-display text-base font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="group inline-flex cursor-default items-center rounded-lg border border-base-border bg-base-panel px-3 py-1.5 text-sm text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/50 hover:text-white hover:shadow-glow-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
