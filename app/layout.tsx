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
      <body
        className="bg-white text-black dark:bg-[#0F0A0A] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800"
      >
        <ThemeProviderWrapper>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
