import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviderWrapper } from "./components/ThemeProviderWrapper";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_OWNER, SITE_TITLE, SOCIAL_LINKS } from "@/app/lib/constants";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_OWNER,
  jobTitle: SITE_TITLE,
  url: "https://onurhaktan.com",
  image: "https://onurhaktan.com/me.jpeg",
  sameAs: SOCIAL_LINKS.filter((link) => !link.href.startsWith("mailto:")).map(
    (link) => link.href
  ),
};

export const metadata: Metadata = {
  metadataBase: new URL("https://onurhaktan.com"),
  title: {
    default: "Onur Haktan",
    template: "%s | Onur Haktan",
  },
  description:
    "Software Engineer portfolio - backend and full-stack development",
  openGraph: {
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-stone-50 text-stone-800 dark:bg-stone-950 dark:text-stone-200 min-h-screen transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProviderWrapper>
          <Navbar />
          <main className="max-w-3xl mx-auto px-6 pb-16">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <BackToTop />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
