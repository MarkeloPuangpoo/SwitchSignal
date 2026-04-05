import type { Metadata } from "next";

import { LanguageToggle } from "@/components/language-toggle";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { QuizProvider } from "@/components/providers/quiz-provider";
import { getSiteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: "Switch Signal | A Modern Quiz-Game Hub",
    template: "%s | Switch Signal",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator, url: siteConfig.githubUrl }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Switch Signal | A Modern Quiz-Game Hub",
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Switch Signal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Switch Signal | A Modern Quiz-Game Hub",
    description: siteConfig.description,
    creator: `@${siteConfig.creator}`,
    images: ["/og-image.png"],
  },
  category: "quiz-game hub",
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] antialiased">
        <LocaleProvider>
          <QuizProvider>
            <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-end px-4 py-4 sm:px-6 lg:px-8">
              <LanguageToggle className="pointer-events-auto" />
            </div>
            {children}
          </QuizProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
