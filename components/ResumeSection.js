import { Eye, FileDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { business } from "@/lib/business";

export default function ResumeSection() {
  return (
    <section className="relative border-t border-base-border py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Want to know more about my experience?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-muted">
            The full breakdown of my skills, projects, and background — one PDF,
            always up to date.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={business.resumeUrl} external icon={Eye} variant="secondary">
              View Resume
            </Button>
            <Button href={business.resumeUrl} icon={FileDown} download>
              Download Resume
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
