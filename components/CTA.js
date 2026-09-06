import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-base-border py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-radial-glow"
        style={{ "--x": "50%", "--y": "40%" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let's turn your idea into a real web experience — built, deployed,
            and working.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#hire-me" icon={ArrowRight}>
              Hire Me
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
