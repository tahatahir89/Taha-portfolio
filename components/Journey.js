import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { timeline } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="relative border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="How I got here"
            description="A self-taught path, in the order it actually happened."
          />
        </Reveal>

        <div className="relative mt-14 border-l border-base-border pl-8 sm:pl-10">
          {timeline.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal-bright shadow-[0_0_10px_2px_rgba(92,141,255,0.7)] sm:-left-[calc(2.5rem+5px)]" />
              <p className="font-mono text-xs text-ink-dim">{step.period}</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
