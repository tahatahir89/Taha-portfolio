"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectFilters, projects } from "@/lib/data";

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col rounded-2xl border border-base-border bg-base-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-dim">{project.tagline}</p>
        </div>
        <span className="rounded-full border border-base-border px-2.5 py-1 font-mono text-[11px] text-ink-dim">
          {project.status === "live" ? "Live" : "Source"}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.features.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2 text-sm text-ink-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-bright" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-base-border bg-base-panel px-2 py-1 font-mono text-[11px] text-ink-dim"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 border-t border-base-border pt-4 text-sm font-semibold">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-signal-glow hover:text-white"
          >
            Live Demo <ArrowUpRight size={15} />
          </a>
        ) : null}
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-ink-muted hover:text-white"
        >
          <Github size={15} /> {project.liveUrl ? "View Code" : "Source Code"}
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="relative border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Real projects, not landing-page demos"
              description="Six live builds — from full-stack platforms with auth and databases to front-end rebuilds for real venues."
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f
                  ? "border-signal bg-signal/15 text-white"
                  : "border-base-border text-ink-muted hover:text-white"
              }`}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
