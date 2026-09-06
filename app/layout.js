import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { business, seoKeywords } from "@/lib/business";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// TODO: replace with the real production domain before deploying.
const siteUrl = "https://muhammadtaha.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — Full-Stack Web Developer`,
    template: `%s — ${business.name}`,
  },
  description:
    "Self-taught full-stack web developer based in Karachi, Pakistan, building real-world React, Next.js and Node.js applications — e-commerce platforms, dashboards, and full-stack web apps.",
  keywords: seoKeywords,
  authors: [{ name: business.name, url: business.github }],
  creator: business.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${business.name} — Full-Stack Web Developer`,
    description:
      "Self-taught full-stack web developer building real-world React, Next.js and Node.js applications.",
    siteName: `${business.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Full-Stack Web Developer`,
    description:
      "Self-taught full-stack web developer building real-world React, Next.js and Node.js applications.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: business.name,
  jobTitle: business.role,
  url: siteUrl,
  email: `mailto:${business.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  sameAs: [business.github, business.linkedin],
  knowsAbout: seoKeywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-base text-ink antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
