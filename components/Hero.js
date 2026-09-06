"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileDown, Github } from "lucide-react";
import Button from "@/components/ui/Button";
import { business } from "@/lib/business";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "Muhammad Taha",` },
  { indent: 1, text: `role: "Full-Stack Web Developer",` },
  { indent: 1, text: "stack: [React, Next.js, Node.js, MongoDB]," },
  { indent: 1, text: "basedIn: " + '"Karachi, Pakistan",' },
  { indent: 1, text: "status: " + '"open to work",' },
  { indent: 0, text: "};" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-signal/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-52 h-80 w-80 rounded-full bg-signal-deep/30 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-card/60 px-4 py-1.5 text-sm text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-signal-bright shadow-[0_0_10px_2px_rgba(92,141,255,0.8)]" />
            Available for internships & junior developer roles
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
            I build full-stack web applications that businesses actually run on.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Self-taught full-stack developer from Karachi. I design and ship
            e-commerce platforms, tutoring and booking systems, and real-time
            applications — frontend to database, deployed and working.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#hire-me" icon={ArrowRight}>
              Hire Me
            </Button>
            <Button href="#projects" variant="secondary">
              View My Work
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-muted">
            <a
              href={business.resumeUrl}
              download
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <FileDown size={16} /> Download Resume
            </a>
            <a
              href={business.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-base-border bg-base-card/80 shadow-glow">
            <div className="flex items-center gap-2 border-b border-base-border bg-base-panel px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-ink-dim">profile.js</span>
            </div>
            <div className="px-6 py-6 font-mono text-sm leading-7 text-ink-muted sm:text-[15px]">
              {codeLines.map((line, i) => (
                <motion.div
                  key={line.text}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.09 }}
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  <span className="text-signal-glow">{line.text}</span>
                </motion.div>
              ))}
              <motion.span
                className="mt-2 inline-block h-4 w-2 bg-signal-bright align-middle"
                animate={shouldReduceMotion ? {} : { opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-base-border bg-base-card/90 px-4 py-3 shadow-glow-sm backdrop-blur sm:block">
            <p className="font-mono text-xs text-ink-dim">deployed on</p>
            <p className="text-sm font-semibold text-white">Vercel</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
