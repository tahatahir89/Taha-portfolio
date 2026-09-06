"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectTypeOptions } from "@/lib/data";

const initialState = {
  name: "",
  email: "",
  phone: "",
  projectType: projectTypeOptions[0],
  details: "",
  budget: "",
  preferredTime: "",
  company: "", // honeypot field — real users never fill this in
};

export default function HireMe() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and a short project description.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong sending your request.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong sending your request.");
    }
  }

  return (
    <section id="hire-me" className="relative border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            title="Tell me about your project"
            description="Share the basics and I'll get back to you to schedule a time to talk it through."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-base-border bg-base-card/50 p-6 sm:p-8"
          >
            {/* Honeypot — hidden from real users, visible to most bots */}
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
              <Field label="Name" htmlFor="hire-name" required>
                <input
                  id="hire-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email" htmlFor="hire-email" required>
                <input
                  id="hire-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClasses}
                  placeholder="you@company.com"
                />
              </Field>

              <Field label="Phone (optional)" htmlFor="hire-phone">
                <input
                  id="hire-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClasses}
                  placeholder="+1 555 000 0000"
                />
              </Field>

              <Field label="Project type" htmlFor="hire-type">
                <select
                  id="hire-type"
                  value={form.projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                  className={inputClasses}
                >
                  {projectTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Budget (optional)" htmlFor="hire-budget">
                <input
                  id="hire-budget"
                  type="text"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. $500–$1000"
                />
              </Field>

              <Field label="Preferred meeting time (optional)" htmlFor="hire-time">
                <input
                  id="hire-time"
                  type="datetime-local"
                  value={form.preferredTime}
                  onChange={(e) => update("preferredTime", e.target.value)}
                  className={inputClasses}
                />
              </Field>

              <Field label="Tell me about your project" htmlFor="hire-details" required className="sm:col-span-2">
                <textarea
                  id="hire-details"
                  required
                  rows={5}
                  value={form.details}
                  onChange={(e) => update("details", e.target.value)}
                  className={inputClasses}
                  placeholder="What are you trying to build? What does it need to do?"
                />
              </Field>
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
                    <Send size={16} /> Send Request
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-signal-glow">
                  <CheckCircle2 size={16} /> Request sent — I'll reply by email to set up a time.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputClasses =
  "w-full rounded-lg border border-base-border bg-base-panel px-3.5 py-2.5 text-sm text-white placeholder:text-ink-dim focus:border-signal outline-none transition-colors";

function Field({ label, htmlFor, required, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-muted">
        {label} {required && <span className="text-signal-glow">*</span>}
      </label>
      {children}
    </div>
  );
}
