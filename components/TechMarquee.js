import { marqueeTech } from "@/lib/data";

export default function TechMarquee() {
  // Duplicate once so the loop can shift exactly -50% with no visible seam.
  const track = [...marqueeTech, ...marqueeTech];

  return (
    <div className="border-y border-base-border bg-base-panel/60 py-6">
      <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm text-ink-dim transition-colors hover:text-signal-glow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
