"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, RotateCcw, Sparkles } from "lucide-react";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import {
  poeticAxisDescriptions,
  poeticAxisLabels,
  poeticSectionHeadings,
  poeticSectionInsightCopy,
} from "@/data/poetic-game";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { PoeticGameResult } from "@/types/poetic-game";

const copy = {
  th: {
    pill: "ชื่อของประกายนี้",
    subtitle: "ผลลัพธ์นี้ไม่ได้พยายามตัดสินคุณ มันแค่เรียกชื่อบางอย่างที่กำลังก่อตัวอยู่ข้างใน",
    axisPill: "แกนหลักของคุณ",
    cardPill: "บทกวีประจำตัว",
    restart: "เล่นอีกครั้ง",
    back: "กลับหน้าเกม",
    misunderstood: "สิ่งที่คนมักเข้าใจผิด",
    primary: "แกนหลัก",
    secondary: "แกนรอง",
    artworkCredit: "ภาพพื้นหลังสร้างด้วยเครื่องมือสร้างภาพ",
  },
  en: {
    pill: "The name of your light",
    subtitle: "This result is not here to judge you. It is only here to name something that has been forming inside you.",
    axisPill: "Your strongest currents",
    cardPill: "Your personal poem",
    restart: "Play again",
    back: "Back to game page",
    misunderstood: "What people often miss",
    primary: "Primary axis",
    secondary: "Secondary axis",
    artworkCredit: "Background artwork created with generative tools",
  },
} as const;

export function PoeticGameResult({
  result,
  onRestart,
}: {
  result: PoeticGameResult;
  onRestart: () => void;
}) {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const text = copy[locale];
  const artworkUrl = `/${encodeURIComponent(result.archetype.name.en)}.png`;

  return (
    <div className="section-frame flex flex-1 flex-col gap-6">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.92fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <Pill>{text.pill}</Pill>
            <div className="space-y-3">
              <h1 className={`text-5xl font-semibold text-zinc-950 sm:text-6xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.08]" : "tracking-[-0.06em]"}`}>
                {t(result.archetype.name, locale)}
              </h1>
              <p className={`max-w-2xl text-zinc-700 ${locale === "th" ? "text-[1.02rem] leading-8 sm:text-[1.08rem]" : "text-lg leading-8"}`}>
                {t(result.archetype.tagline, locale)}
              </p>
              <p className={`max-w-2xl text-zinc-600 ${locale === "th" ? "text-[0.98rem] leading-8 sm:text-[1.02rem]" : "text-base leading-7"}`}>
                {t(result.archetype.summary, locale)}
              </p>
            </div>
          </div>

          <Card className="p-5 sm:p-6">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Pill>{text.axisPill}</Pill>
              <span className={`text-zinc-500 ${locale === "th" ? "text-[0.84rem] tracking-[0.01em]" : "text-sm"}`}>{text.subtitle}</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: text.primary, axis: result.primaryAxis },
                { label: text.secondary, axis: result.secondaryAxis },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.45rem] border border-white/50 bg-white/56 p-4 shadow-[0_10px_26px_rgba(15,23,42,0.05)]">
                  <div className={`text-zinc-500 ${locale === "th" ? "text-[0.8rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.14em]"}`}>{item.label}</div>
                  <div className="mt-2 text-xl font-semibold text-zinc-950">{t(poeticAxisLabels[item.axis], locale)}</div>
                  <p className={`mt-2 text-zinc-600 ${locale === "th" ? "text-[0.92rem] leading-7" : "text-sm leading-6"}`}>{t(poeticAxisDescriptions[item.axis], locale)}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {(["G", "V", "T", "F", "B"] as const).map((axis) => (
                <div key={axis} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-zinc-600">
                    <span className="font-medium text-zinc-800">{t(poeticAxisLabels[axis], locale)}</span>
                    <span>{result.scores[axis]}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/55 shadow-inner">
                    <motion.div
                      initial={reduceMotion ? false : { width: 0 }}
                      animate={{ width: `${result.percents[axis]}%` }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(125,211,252,0.95),rgba(196,181,253,0.86),rgba(253,224,71,0.78))]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5 sm:p-6">
            <div className="space-y-3">
              <Pill>{text.misunderstood}</Pill>
              <p className={`text-zinc-700 ${locale === "th" ? "text-[0.98rem] leading-8 sm:text-[1.02rem]" : "text-base leading-7"}`}>{t(result.archetype.misunderstood, locale)}</p>
            </div>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={onRestart}>
              <RotateCcw className="h-4 w-4" />
              {text.restart}
            </Button>
            <Link href="/games/inner-light">
              <Button variant="secondary" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                {text.back}
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <Card className={cn("relative min-h-[44rem] overflow-hidden p-6 sm:min-h-[48rem] sm:p-8", result.archetype.accent.glow)}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${artworkUrl}")` }} />
            <div className={`absolute inset-0 bg-gradient-to-br ${result.archetype.accent.from} ${result.archetype.accent.via} ${result.archetype.accent.to} opacity-18`} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.18)_18%,rgba(15,23,42,0.48)_54%,rgba(15,23,42,0.76)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),rgba(255,255,255,0.06)_28%,rgba(255,255,255,0)_54%)]" />

            <div className="relative flex min-h-[39rem] flex-col items-center justify-between gap-6 text-center sm:min-h-[42rem]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-md">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <div className="space-y-3">
                <Pill className="border-white/25 bg-white/16 text-white backdrop-blur-md">{text.cardPill}</Pill>
                <h2 className={`text-4xl font-semibold text-white sm:text-5xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.08]" : "tracking-[-0.05em]"}`}>
                  {t(result.archetype.name, locale)}
                </h2>
                <p className={`mx-auto max-w-md text-white/88 ${locale === "th" ? "text-[0.96rem] leading-7" : "text-sm leading-6 sm:text-base"}`}>
                  {t(result.archetype.tagline, locale)}
                </p>
              </div>

              <div className="grid w-full gap-3">
                {(["light", "silence", "connection", "becoming"] as const).map((sectionId) => (
                  <div
                    key={sectionId}
                    className="rounded-[1.45rem] border border-white/20 bg-[linear-gradient(180deg,rgba(10,12,22,0.34),rgba(10,12,22,0.52))] px-4 py-4 text-left shadow-[0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur-md"
                  >
                    <div className={`text-white/62 ${locale === "th" ? "text-[0.8rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.14em]"}`}>
                      {t(poeticSectionHeadings[sectionId], locale)}
                    </div>
                    <p className={`mt-2 text-white ${locale === "th" ? "text-[0.98rem] leading-7" : "text-sm leading-6 sm:text-base"}`}>
                      {t(poeticSectionInsightCopy[sectionId][result.sectionDominants[sectionId]], locale)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full text-right">
                <span className={cn(locale === "th" ? "text-[0.62rem] tracking-[0.01em]" : "text-[0.58rem] tracking-[0.08em] uppercase", "text-white/34")}>
                  {text.artworkCredit}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
