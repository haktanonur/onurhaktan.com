import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviderWrapper } from "./components/ThemeProviderWrapper";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    card: "summary",
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
        <ThemeProviderWrapper>
          <Navbar />
          <main className="max-w-3xl mx-auto px-6 pb-16">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
