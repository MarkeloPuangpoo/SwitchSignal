"use client";

import Link from "next/link";
import Script from "next/script";
import { ArrowRight, ArrowUpRight, Gamepad2, Layers3, Sparkles } from "lucide-react";

import { appCopy } from "@/data/copy";
import { gameRegistry } from "@/data/games";
import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { HeroSection } from "@/components/hero-section";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { getSiteUrl, siteConfig } from "@/lib/seo";

const steps = [
  {
    title: "Choose from the hub",
    description: "The home experience now behaves like a launcher, not a one-off campaign page.",
    icon: Sparkles,
  },
  {
    title: "Launch the live game",
    description: "Every live title gets its own launcher, play flow, and result payoff inside the same brand system.",
    icon: Layers3,
  },
  {
    title: "Stay expansion-ready",
    description: "The whole structure is now prepared for future drops without rebuilding the app each time.",
    icon: Gamepad2,
  },
];

export default function HomePage() {
  const { locale } = useLocale();
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: ["th", "en"],
    hasPart: gameRegistry.map((game) => ({
      "@type": "CreativeWork",
      name: game.title.en,
      url: `${siteUrl}${game.href}`,
      description: game.description.en,
    })),
    creator: {
      "@type": "Person",
      name: siteConfig.creator,
      url: siteConfig.githubUrl,
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
          <div className="mb-5 flex items-end justify-between gap-4">
            <div className="space-y-2">
              <Pill>{locale === "th" ? "เกมที่เปิดอยู่" : "Live in the hub"}</Pill>
              <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.22]" : "tracking-[-0.05em]"}`}>
                {locale === "th" ? "เลือกเกมที่อยากเล่นจาก hub ได้เลย" : "Pick the game you want from the hub"}
              </h2>
            </div>
          </div>

          <div className="mb-12 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            {gameRegistry.map((game) => (
              <Card key={game.id} className="relative overflow-hidden p-6 sm:p-7">
                <div className={`absolute inset-0 bg-gradient-to-br ${game.accent.from} ${game.accent.via} ${game.accent.to} opacity-25`} />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Pill className="bg-white/72">{game.status === "live" ? (locale === "th" ? "เปิดให้เล่น" : "Live") : (locale === "th" ? "เร็วๆ นี้" : "Soon")}</Pill>
                      <span className={`text-zinc-500 ${locale === "th" ? "text-[0.84rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.16em]"}`}>
                        {t(game.category, locale)}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.18]" : "tracking-[-0.05em]"}`}>
                        {t(game.title, locale)}
                      </h3>
                      <p className={`max-w-3xl text-zinc-700 sm:text-lg ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.04rem]" : "text-base leading-7"}`}>
                        {t(game.description, locale)}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        [locale === "th" ? "คำถาม" : "Questions", String(game.questionCount ?? 0)],
                        [locale === "th" ? "ผู้เล่น" : "Players", locale === "th" ? "เดี่ยว" : "Solo"],
                        [locale === "th" ? "ผลลัพธ์" : "Reward", locale === "th" ? "แชร์ได้" : "Sharable"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-[1.3rem] border border-white/55 bg-white/68 p-3">
                          <div className={`text-zinc-500 ${locale === "th" ? "text-[0.72rem] tracking-[0.01em]" : "text-[0.65rem] uppercase tracking-[0.18em]"}`}>
                            {label}
                          </div>
                          <div className="mt-2 text-lg font-semibold text-zinc-950">{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:items-end">
                      <Link href={game.href}>
                        <Button size="lg" className="w-full sm:w-auto">
                          {locale === "th" ? "เข้าเกมนี้" : "Open this game"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      <div className={`text-zinc-500 ${locale === "th" ? "text-[0.84rem] tracking-[0.01em]" : "text-sm"}`}>
                        {locale === "th" ? "เริ่มได้ทันทีจาก hub" : "Launch instantly from the hub"}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 sm:p-7">
              <div className="flex h-full flex-col gap-5">
                <div className="space-y-2">
                  <Pill>{locale === "th" ? "hub overview" : "Hub overview"}</Pill>
                  <h3 className={`text-2xl font-semibold text-zinc-950 sm:text-3xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.2]" : "tracking-[-0.05em]"}`}>
                    {locale === "th" ? "โครงนี้พร้อมรองรับเกมต่อไปแล้ว" : "This hub is already ready for the next drop"}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {[
                    {
                      title: locale === "th" ? "เกมที่เปิดอยู่" : "Live games",
                      body: locale === "th" ? "ตอนนี้มีหลายเกมที่เข้าเล่นได้ทันทีจากหน้า hub เดียวกัน" : "Multiple games are already playable directly from this single hub.",
                    },
                    {
                      title: locale === "th" ? "ระบบกลาง" : "Shared system",
                      body: locale === "th" ? "copy, registry, routing, และ branding ถูกจัดไว้เพื่อรองรับหลายเกม" : "Copy, registry, routing, and branding are structured for multiple game formats.",
                    },
                    {
                      title: locale === "th" ? "พร้อมขยาย" : "Expansion-ready",
                      body: locale === "th" ? "เมื่อจะเพิ่มเกมใหม่ เราแค่เติม entry ใหม่และต่อหน้าเกมเพิ่ม" : "Future games can be added as new entries without redesigning the whole product.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.45rem] border border-white/50 bg-white/54 px-4 py-4 shadow-[0_10px_26px_rgba(15,23,42,0.05)]">
                      <div className="text-sm font-semibold text-zinc-950">{item.title}</div>
                      <p className={`mt-2 text-zinc-600 ${locale === "th" ? "text-[0.92rem] leading-7" : "text-sm leading-6"}`}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.88fr_1.12fr] xl:gap-6">
            <Card className="p-6 sm:p-7">
              <div className="space-y-5">
                <Pill>{t(appCopy.stepsTitle, locale)}</Pill>
                <div className="space-y-4">
                  <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.22]" : "tracking-[-0.05em]"}`}>{t(appCopy.stepsHeading, locale)}</h2>
                  <p className={`text-zinc-700 sm:text-lg ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.04rem]" : "text-base leading-7"}`}>
                    {t(appCopy.stepsBody, locale)}
                  </p>
                </div>

                <Link href={gameRegistry[0]?.href ?? "/"} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800 transition-colors hover:text-zinc-950">
                  {t(appCopy.startNow, locale)}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const copy = appCopy.steps[index];

                return (
                  <Card key={t(copy.title, locale)} className="p-5 sm:p-6">
                    <div className="space-y-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/55 bg-white/60">
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
            <div className="grid gap-6 xl:grid-cols-[1fr_0.85fr] xl:items-center">
              <div className="space-y-4">
                <Pill>{t(appCopy.disclaimerPill, locale)}</Pill>
                <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.22]" : "tracking-[-0.05em]"}`}>{t(appCopy.disclaimerHeading, locale)}</h2>
                <p className={`max-w-2xl text-zinc-700 sm:text-lg ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.04rem]" : "text-base leading-7"}`}>
                  {t(appCopy.disclaimerBody, locale)}
                </p>
              </div>

              <div className={`grid gap-3 text-zinc-600 ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm"}`}>
                {appCopy.homeHighlights.map((item) => (
                  <div key={t(item, locale)} className="rounded-[1.5rem] border border-white/50 bg-white/50 px-4 py-4 shadow-[0_10px_26px_rgba(15,23,42,0.04)]">
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
