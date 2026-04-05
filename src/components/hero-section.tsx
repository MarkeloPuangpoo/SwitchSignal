"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock3, Layers3, Sparkles, Trophy } from "lucide-react";

import { appCopy } from "@/data/copy";
import { gameRegistry } from "@/data/games";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

const featuredGame = gameRegistry[0];
const liveGames = gameRegistry.filter((game) => game.status === "live");

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-6 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:gap-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-start gap-6"
        >
          <Pill>{t(appCopy.brandTag, locale)}</Pill>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl">
              Switch Signal
            </h1>
            <p className={`max-w-xl text-zinc-700 sm:text-xl ${locale === "th" ? "text-[1.05rem] leading-[1.95] sm:text-[1.18rem]" : "text-lg leading-8"}`}>
              {t(appCopy.heroBody, locale)}
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link href={featuredGame.href}>
              <Button size="lg" className="w-full sm:w-auto">
                {t(appCopy.startQuiz, locale)}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                {t(appCopy.howItWorks, locale)}
              </Button>
            </a>
          </div>

          <p className={`max-w-lg text-zinc-500 ${locale === "th" ? "text-[0.96rem] leading-7" : "text-sm leading-6"}`}>
            {t(appCopy.heroFooter, locale)}
          </p>

          <div className="grid w-full gap-3 sm:grid-cols-3">
            {[
              {
                icon: Layers3,
                label: locale === "th" ? "จำนวนเกมที่ live" : "Live titles",
                value: String(liveGames.length).padStart(2, "0"),
              },
              {
                icon: Clock3,
                label: locale === "th" ? "ช่วงเวลาเล่น" : "Session length",
                value: locale === "th" ? "3-7 นาที" : "3-7 min",
              },
              {
                icon: Trophy,
                label: locale === "th" ? "ปลายทางของเกม" : "End payoff",
                value: locale === "th" ? "ผลลัพธ์พร้อมแชร์" : "Share-ready result",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-white/50 bg-white/54 px-4 py-4 shadow-[0_14px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/76">
                    <Icon className="h-4 w-4 text-zinc-800" />
                  </div>
                  <div className="space-y-1.5">
                    <div className={`text-zinc-500 ${locale === "th" ? "text-[0.8rem] tracking-[0.01em]" : "text-[0.68rem] uppercase tracking-[0.18em]"}`}>
                      {item.label}
                    </div>
                    <div className="text-lg font-semibold text-zinc-950">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Card className="relative overflow-hidden p-0">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(255,255,255,0.48),rgba(253,242,248,0.5))]" />
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0)_72%)]" />

            <div className="relative flex flex-col gap-0">
              <div className="flex items-center justify-between border-b border-white/45 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-zinc-950 text-white shadow-[0_10px_24px_rgba(24,24,27,0.18)]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-zinc-950">{t(appCopy.previewResult, locale)}</div>
                    <div className={`text-zinc-500 ${locale === "th" ? "text-[0.8rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.16em]"}`}>
                      {featuredGame.status === "live" ? (locale === "th" ? "เล่นได้แล้วตอนนี้" : "Playable right now") : "Soon"}
                    </div>
                  </div>
                </div>
                <Layers3 className="h-5 w-5 text-zinc-500" />
              </div>

              <div className="grid gap-6 p-5 sm:p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill className="bg-white/72">{featuredGame.status === "live" ? (locale === "th" ? "เกมที่เปิดอยู่" : "Live game") : (locale === "th" ? "เร็วๆ นี้" : "Soon")}</Pill>
                    <span className={`text-zinc-500 ${locale === "th" ? "text-[0.82rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.18em]"}`}>
                      {t(featuredGame.category, locale)}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.14]" : "tracking-[-0.05em]"}`}>
                      {t(featuredGame.title, locale)}
                    </h2>
                    <p className={`max-w-lg text-zinc-600 ${locale === "th" ? "text-[0.97rem] leading-7" : "text-sm leading-6 sm:text-base"}`}>
                      {t(featuredGame.description, locale)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    [t({ th: "สถานะ", en: "Status" }, locale), featuredGame.status === "live" ? "Live" : "Soon"],
                    [t({ th: "จำนวนคำถาม", en: "Questions" }, locale), String(featuredGame.questionCount ?? 0)],
                    [t({ th: "โหมด", en: "Mode" }, locale), "Solo"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1.35rem] border border-white/55 bg-white/66 p-3.5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                      <div className={`text-zinc-500 ${locale === "th" ? "text-[0.72rem] tracking-[0.01em]" : "text-[0.65rem] uppercase tracking-[0.22em]"}`}>{label}</div>
                      <div className="mt-2 text-lg font-semibold text-zinc-900">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.6rem] border border-white/55 bg-zinc-950 px-4 py-4 text-white shadow-[0_18px_45px_rgba(24,24,27,0.18)]">
                  <div className={`mb-2 text-zinc-300 ${locale === "th" ? "text-[0.82rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.18em]"}`}>
                    {t(appCopy.editorialEnergyLabel, locale)}
                  </div>
                  <p className={`max-w-md ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm leading-6"}`}>{t(featuredGame.hook, locale)}</p>
                </div>

                <Link href={featuredGame.href}>
                  <Button size="lg" className="w-full">
                    {locale === "th" ? "เข้า launcher ของเกมนี้" : "Open this game launcher"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
