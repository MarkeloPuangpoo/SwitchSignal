"use client";

import Link from "next/link";
import Script from "next/script";
import { ArrowUpRight, HeartHandshake, Layers3, Sparkles } from "lucide-react";

import { appCopy } from "@/data/copy";
import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { HeroSection } from "@/components/hero-section";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { getSiteUrl, siteConfig } from "@/lib/seo";

const steps = [
  {
    title: "Answer instinctively",
    description: "Sixteen mood-rich scenarios designed to read your chemistry style, not your performance.",
    icon: Sparkles,
  },
  {
    title: "Let the axes speak",
    description: "Lead, Care, Soft, Tease, and Flex build your profile with a clean scoring model under the gloss.",
    icon: Layers3,
  },
  {
    title: "Keep the payoff",
    description: "Your result arrives as a premium social card made to feel special on both screen and screenshot.",
    icon: HeartHandshake,
  },
];

export default function HomePage() {
  const { locale } = useLocale();
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: ["th", "en"],
    creator: {
      "@type": "Person",
      name: siteConfig.creator,
      url: siteConfig.githubUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <main className="app-shell">
      <Script
        id="switch-signal-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FloatingBackground />

      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <HeroSection />

        <section id="how-it-works" className="section-frame mt-14">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
            <Card className="p-6 sm:p-7">
              <div className="space-y-5">
                <Pill>{t(appCopy.stepsTitle, locale)}</Pill>
                <div className="space-y-4">
                  <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.22]" : "tracking-[-0.05em]"}`}>{t(appCopy.stepsHeading, locale)}</h2>
                  <p className={`text-zinc-700 sm:text-lg ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.04rem]" : "text-base leading-7"}`}>
                    {t(appCopy.stepsBody, locale)}
                  </p>
                </div>

                <Link href="/quiz" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800 transition-colors hover:text-zinc-950">
                  {t(appCopy.startNow, locale)}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const copy = appCopy.steps[index];

                return (
                  <Card key={t(copy.title, locale)} className="p-5 sm:p-6">
                    <div className="space-y-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/60">
                        <Icon className="h-5 w-5 text-zinc-800" />
                      </div>
                      <div className="space-y-2">
                        <h3 className={`text-xl font-semibold text-zinc-950 ${locale === "th" ? "tracking-[-0.02em] leading-[1.3]" : "tracking-[-0.04em]"}`}>{t(copy.title, locale)}</h3>
                        <p className={`text-zinc-600 ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm leading-6"}`}>{t(copy.description, locale)}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-frame mt-10">
          <Card className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div className="space-y-4">
                <Pill>{t(appCopy.disclaimerPill, locale)}</Pill>
                <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.22]" : "tracking-[-0.05em]"}`}>{t(appCopy.disclaimerHeading, locale)}</h2>
                <p className={`max-w-2xl text-zinc-700 sm:text-lg ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.04rem]" : "text-base leading-7"}`}>
                  {t(appCopy.disclaimerBody, locale)}
                </p>
              </div>

              <div className={`grid gap-3 text-zinc-600 ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm"}`}>
                {appCopy.homeHighlights.map((item) => (
                  <div key={t(item, locale)} className="rounded-[1.5rem] border border-white/50 bg-white/50 px-4 py-4">
                    {t(item, locale)}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
