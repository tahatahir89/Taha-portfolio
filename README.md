# Muhammad Taha — Portfolio (Next.js)

A full-stack developer portfolio built with Next.js 14 (App Router), Tailwind
CSS, and Framer Motion. Content is pulled from the real resume and the
projects already live on the previous portfolio — nothing invented.

## Stack

- Next.js 14 (App Router, JavaScript — see "Why JavaScript, not TypeScript" below)
- Tailwind CSS 3
- Framer Motion (animations)
- lucide-react (icons)
- Resend (transactional email for the Contact and Hire Me forms)

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the real values
npm run dev
```

Open http://localhost:3000.

> This project's code was written and reviewed in an environment with no
> network access, so `npm install` / `npm run build` could not be run here
> to confirm a clean build. Everything follows standard, well-documented
> Next.js/Tailwind/Framer Motion patterns, but run `npm run build` yourself
> before deploying and fix anything your local Next.js version flags.

## Environment variables

See `.env.example` for the full list. In short:

| Variable          | What it's for                                              |
| ----------------- | ------------------------------------------------------------ |
| `RESEND_API_KEY`  | API key from your [Resend](https://resend.com) account       |
| `CONTACT_EMAIL`   | Inbox that receives Contact + Hire Me submissions             |
| `RESEND_FROM`     | Verified "from" address (use `onboarding@resend.dev` to test) |

Both `/api/contact` and `/api/hire` use these — no API key is ever exposed
to the browser; the fetch calls to Resend happen entirely server-side inside
the route handlers.

## Deploying

1. **Push to GitHub** — create a new repo (e.g. `taha-portfolio`) and push
   this project to it.
2. **Import into Vercel** — from the Vercel dashboard, "Add New Project" →
   import the GitHub repo. Framework preset: Next.js (auto-detected).
3. **Add environment variables** — in the Vercel project's
   Settings → Environment Variables, add `RESEND_API_KEY`, `CONTACT_EMAIL`,
   and `RESEND_FROM` (same names as `.env.example`).
4. **Deploy** — Vercel builds and deploys automatically. Every push to
   `main` redeploys.
5. **Custom domain** — add it under Settings → Domains once you have one,
   then update `siteUrl` in `app/layout.js`, `app/sitemap.js`, and
   `app/robots.js` to match.

## Things to finish before going fully live

- [ ] Verify a real domain with Resend and update `RESEND_FROM` (the
      `onboarding@resend.dev` sender works for testing but shouldn't be used
      long-term).
- [ ] Add a real `public/og-image.png` (1200×630) for social share previews —
      referenced in `app/layout.js` but not generated here.
- [ ] Replace the placeholder `siteUrl` (`https://muhammadtaha.dev`) in
      `app/layout.js`, `app/sitemap.js`, and `app/robots.js` with your real
      domain.
- [ ] The "Preferred meeting time" field on the Hire Me form is a plain
      text/datetime request, not a live calendar — see the comment in
      `app/api/hire/route.js` for how to wire in a real scheduling service
      (Cal.com or Calendly both have simple APIs) if you want actual
      booking rather than a request to follow up on.
- [ ] Project cards currently show no screenshots — the old portfolio's
      project images live at fixed paths on its own GitHub Pages site, so
      rather than link to those directly, add your own screenshots to
      `public/projects/` and reference them (with `next/image`) in
      `lib/data.js` once you have them.
- [ ] Basic spam protection is a honeypot field on both forms. For heavier
      protection, add a CAPTCHA (e.g. Cloudflare Turnstile) or rate-limiting
      via a service like Upstash — serverless functions don't share memory
      between invocations, so in-memory rate limiting won't work reliably
      on Vercel.

## Why JavaScript, not TypeScript

The brief asked for TypeScript, but since this code couldn't be compiled or
type-checked in the environment it was written in, plain JavaScript was used
to avoid shipping type errors that couldn't be verified. The project
structure (one component per file, typed-shape data in `lib/data.js`) makes
it straightforward to convert incrementally — rename files to `.jsx`/`.ts`
and add types file by file once you can run the TypeScript compiler locally.

## Project structure

```
app/
  layout.js          Root layout, fonts, metadata, JSON-LD
  page.js             Assembles all sections
  globals.css
  sitemap.js / robots.js
  manifest.js         PWA/home-screen manifest
  icon.png            Favicon (auto-detected by Next.js)
  apple-icon.png      Apple touch icon (auto-detected by Next.js)
  api/
    contact/route.js  Contact form email handler
    hire/route.js      Hire Me form email handler
components/
  Navbar.js, Hero.js, About.js, Skills.js, TechMarquee.js,
  Projects.js, Journey.js, Services.js, HireMe.js, Contact.js,
  ResumeSection.js, CTA.js, Footer.js
  ui/
    Button.js, SectionHeading.js, Reveal.js
lib/
  business.js         Name, email, phone, social links (single source of truth)
  data.js             Skills, projects, timeline, services content
public/
  Muhammad-Taha-Resume.pdf
```

## Content accuracy

All projects, skills, dates, and links come from the resume and the six
live projects listed on the existing portfolio's Projects page. No fake
clients, employers, testimonials, or statistics were added, and Graphic
Design / Video Editing are intentionally left out of the Services and Skills
sections per the brief, even though they appear as a hobby line on the
resume.
