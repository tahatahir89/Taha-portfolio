import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { business } from "@/lib/business";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">{business.name}</p>
            <p className="mt-1 text-sm text-ink-muted">{business.role}</p>
            {business.availableForWork && (
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-signal-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-bright" />
                Available for freelance & full-time opportunities
              </p>
            )}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a
              href={`mailto:${business.email}`}
              aria-label="Email"
              className="rounded-lg border border-base-border p-2.5 text-ink-muted hover:text-white"
            >
              <Mail size={18} />
            </a>
            <a
              href={business.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-base-border p-2.5 text-ink-muted hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href={business.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-base-border p-2.5 text-ink-muted hover:text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-base-border pt-6 text-xs text-ink-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
