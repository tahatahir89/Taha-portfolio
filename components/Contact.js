"use client";

import { useState } from "react";
import { CheckCircle2, Copy, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/lib/business";

const initialState = { name: "", email: "", subject: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and a message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Message couldn't be sent — please try again.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Message couldn't be sent — please try again.");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(business.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail silently in unsupported contexts — no action needed.
    }
  }

  return (
    <section id="contact" className="relative border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Get in touch"
            description="Questions, feedback, or just want to say hello — this goes straight to my inbox."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.05} className="space-y-4">
            <button
              type="button"
              onClick={copyEmail}
              className="flex w-full items-center justify-between rounded-xl border border-base-border bg-base-card/50 p-4 text-left transition-colors hover:border-signal/40"
            >
              <span className="flex items-center gap-3">
                <Mail size={18} className="text-signal-glow" />
                <span className="text-sm text-ink-muted">{business.email}</span>
              </span>
              {copied ? (
                <CheckCircle2 size={16} className="text-signal-glow" />
              ) : (
                <Copy size={16} className="text-ink-dim" />
              )}
            </button>

            <a
              href={business.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-base-border bg-base-card/50 p-4 transition-colors hover:border-signal/40"
            >
              <Github size={18} className="text-signal-glow" />
              <span className="text-sm text-ink-muted">github.com/tahatahir89</span>
            </a>

            <a
              href={business.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-base-border bg-base-card/50 p-4 transition-colors hover:border-signal/40"
            >
              <Linkedin size={18} className="text-signal-glow" />
              <span className="text-sm text-ink-muted">LinkedIn Profile</span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-base-border bg-base-card/50 p-6 sm:p-8"
            >
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink-muted">
                    Name <span className="text-signal-glow">*</span>
                  </label>
                  <input
                    id="c-name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-ink-muted">
                    Email <span className="text-signal-glow">*</span>
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-subject" className="mb-1.5 block text-sm font-medium text-ink-muted">
                    Subject
                  </label>
                  <input
                    id="c-subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={inputClasses}
                    placeholder="What's this about?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-ink-muted">
                    Message <span className="text-signal-glow">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={inputClasses}
                    placeholder="Write your message..."
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-signal px-6 py-3 text-sm font-semibold text-white shadow-glow-sm transition-shadow hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-signal-glow">
                    <CheckCircle2 size={16} /> Message sent — thanks for reaching out.
                  </p>
                )}
                {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClasses =
  "w-full rounded-lg border border-base-border bg-base-panel px-3.5 py-2.5 text-sm text-white placeholder:text-ink-dim focus:border-signal outline-none transition-colors";
