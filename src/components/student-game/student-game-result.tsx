"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, BadgeCheck, Shield, Sparkles, Zap } from "lucide-react";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import type { SchoolGameResult } from "@/types/school-game";

const copy = {
  th: {
    pill: "ผลลัพธ์ประจำโรงเรียน",
    axes: ["สายเรียน", "สายซ่า"],
    restart: "เล่นอีกครั้ง",
    back: "กลับหน้าเกม",
    cards: ["ออร่าในห้อง", "วิธีเอาตัวรอด", "สิ่งที่คนเข้าใจผิด", "บทบาทในโรงเรียน"],
    keywords: "mood tags",
  },
  en: {
    pill: "Your school result",
    axes: ["Student", "Edge"],
    restart: "Play again",
    back: "Back to game page",
    cards: ["Class aura", "Survival style", "Misunderstood", "School role"],
    keywords: "mood tags",
  },
} as const;

export function StudentGameResult({
  result,
  onRestart,
}: {
  result: SchoolGameResult;
  onRestart: () => void;
}) {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const text = copy[locale];
  const studentPercent = Math.min(100, Math.round((result.scores.S / 40) * 100));
  const edgePercent = Math.min(100, Math.round((result.scores.E / 40) * 100));

  return (
    <div className="section-frame flex flex-1 flex-col gap-5 sm:gap-6">
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
                {result.archetype.name[locale]}
              </h1>
              <p className="text-lg font-medium text-zinc-700">{result.archetype.nickname[locale]}</p>
              <p className={`max-w-2xl text-zinc-700 ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.04rem]" : "text-base leading-7 sm:text-lg"}`}>
                {result.archetype.summary[locale]}
              </p>
            </div>
          </div>

          <Card className="p-5 sm:p-6">
            <div className="space-y-5">
              {[
                { label: text.axes[0], value: result.scores.S, percent: studentPercent, color: "from-sky-300 via-cyan-200 to-emerald-200" },
                { label: text.axes[1], value: result.scores.E, percent: edgePercent, color: "from-amber-200 via-orange-200 to-rose-300" },
              ].map((axis) => (
                <div key={axis.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-zinc-600">
                    <span className="font-medium text-zinc-800">{axis.label}</span>
                    <span>{axis.value}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/55 shadow-inner">
                    <motion.div
                      initial={reduceMotion ? false : { width: 0 }}
                      animate={{ width: `${axis.percent}%` }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${axis.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={onRestart}>{text.restart}</Button>
            <Link href="/games/student-or-school-legend">
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
          <Card className="relative overflow-hidden p-6 text-center sm:p-8">
            <div className={`absolute inset-0 bg-gradient-to-br ${result.archetype.accent.from} ${result.archetype.accent.via} ${result.archetype.accent.to} opacity-40`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.14)_58%,rgba(255,255,255,0)_80%)]" />
            <div className="relative flex flex-col items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/55 bg-white/62 shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
                <Sparkles className="h-6 w-6 text-zinc-900" />
              </div>
              <div className="space-y-3">
                <div className="text-sm text-zinc-600">{result.archetype.nickname[locale]}</div>
                <h2 className={`text-4xl font-semibold text-zinc-950 sm:text-5xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.08]" : "tracking-[-0.05em]"}`}>
                  {result.archetype.name[locale]}
                </h2>
                <p className={`mx-auto max-w-md text-zinc-700 ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm leading-6 sm:text-base"}`}>
                  {result.archetype.descriptor[locale]}
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-3">
                {[
                  { icon: Shield, title: text.cards[0], body: result.archetype.classAura[locale] },
                  { icon: Zap, title: text.cards[1], body: result.archetype.survivalStyle[locale] },
                  { icon: BadgeCheck, title: text.cards[2], body: result.archetype.misunderstood[locale] },
                  { icon: Sparkles, title: text.cards[3], body: result.archetype.socialRole[locale] },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-[1.35rem] border border-white/55 bg-white/60 p-4 text-left shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/55 bg-white/78">
                        <Icon className="h-4 w-4 text-zinc-800" />
                      </div>
                      <div className="text-sm font-semibold text-zinc-900">{item.title}</div>
                      <p className={`mt-2 text-zinc-600 ${locale === "th" ? "text-[0.88rem] leading-6" : "text-xs leading-5 sm:text-sm"}`}>{item.body}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-2.5">
                {result.archetype.aestheticKeywords[locale].map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/55 bg-white/60 px-4 py-2 text-sm text-zinc-700 shadow-[0_10px_26px_rgba(15,23,42,0.04)]">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
