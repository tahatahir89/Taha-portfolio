import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="What I can build for you"
            description="Focused on web development end to end — no design-only or video work, just working software."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-base-border bg-base-card/50 p-6 transition-colors hover:border-signal/40">
                <h3 className="font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <Button href="#hire-me">Start a project</Button>
        </Reveal>
      </div>
    </section>
  );
}
