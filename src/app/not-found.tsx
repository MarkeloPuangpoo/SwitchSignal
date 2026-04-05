"use client";

import Link from "next/link";
import { ArrowRight, House, Orbit, Sparkles } from "lucide-react";

import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { appCopy } from "@/data/copy";
import { gameRegistry } from "@/data/games";
import { t } from "@/lib/i18n";

export default function NotFound() {
  const { locale } = useLocale();
  const featuredGame = gameRegistry[0];

  return (
    <main className="app-shell">
      <FloatingBackground />

      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <section className="section-frame flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.88fr] lg:items-center">
            <div className="space-y-6">
              <Pill>{t(appCopy.notFound.pill, locale)}</Pill>

              <div className="space-y-4">
                <h1 className={`max-w-3xl text-4xl font-semibold text-zinc-950 sm:text-5xl lg:text-6xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.12]" : "tracking-[-0.06em]"}`}>
                  {t(appCopy.notFound.heading, locale)}
                </h1>
                <p className={`max-w-2xl text-zinc-700 sm:text-lg ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.06rem]" : "text-base leading-7"}`}>
                  {t(appCopy.notFound.body, locale)}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    <House className="h-4 w-4" />
                    {t(appCopy.notFound.primary, locale)}
                  </Button>
                </Link>
                <Link href={featuredGame?.href ?? "/"}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    {t(appCopy.notFound.secondary, locale)}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/52 px-4 py-2 text-zinc-500 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                <Sparkles className="h-4 w-4 text-rose-400" />
                <span className={locale === "th" ? "text-[0.84rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.18em]"}>
                  {t(appCopy.notFound.ambient, locale)}
                </span>
              </div>
            </div>

            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.18)_60%,rgba(255,255,255,0)_80%)]" />
              <div className="relative flex min-h-[22rem] flex-col justify-between gap-6">
                <div className="flex items-center justify-between">
                  <Pill className="bg-white/70">{t(appCopy.brandTag, locale)}</Pill>
                  <Orbit className="h-5 w-5 text-zinc-500" />
                </div>

                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/55 bg-white/60 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                    <span className="font-display text-4xl font-semibold tracking-[-0.06em] text-zinc-950">404</span>
                  </div>
                  <div className="space-y-2">
                    <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.12]" : "tracking-[-0.05em]"}`}>
                      Switch Signal
                    </h2>
                    <p className={`mx-auto max-w-sm text-zinc-600 ${locale === "th" ? "text-[0.96rem] leading-7" : "text-sm leading-6 sm:text-base"}`}>
                      {t(appCopy.heroBody, locale)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    t({ th: "เกม", en: "Games" }, locale),
                    t({ th: "ภาษา", en: "Languages" }, locale),
                    t({ th: "โหมด", en: "Modes" }, locale),
                  ].map((label, index) => (
                    <div
                      key={label}
                      className="rounded-[1.4rem] border border-white/50 bg-white/52 p-4 text-center shadow-[0_10px_26px_rgba(15,23,42,0.06)]"
                    >
                      <div className={`text-zinc-500 ${locale === "th" ? "text-[0.78rem] tracking-[0.01em]" : "text-[0.68rem] uppercase tracking-[0.18em]"}`}>
                        {label}
                      </div>
                      <div className="mt-2 text-xl font-semibold text-zinc-900">
                        {[String(gameRegistry.length).padStart(2, "0"), "TH/EN", locale === "th" ? "เดี่ยว" : "Solo"][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
