"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { appCopy } from "@/data/copy";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { AxisBars } from "@/components/result/axis-bars";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import type { ArchetypeResult } from "@/types/quiz";

export function ShareResultCard({ result }: { result: ArchetypeResult }) {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="relative overflow-hidden p-5 text-center sm:p-8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${result.archetype.accent.from} ${result.archetype.accent.via} ${result.archetype.accent.to} opacity-50`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.16)_60%,rgba(255,255,255,0)_80%)]" />
        <div className="relative z-10 flex flex-col items-center gap-5">
          <Pill className="bg-white/72">{t(appCopy.result.shareCard, locale)}</Pill>
          <div className="space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/55 bg-white/58 shadow-[0_10px_40px_rgba(255,255,255,0.35)]">
              <Sparkles className="h-6 w-6 text-zinc-800" />
            </div>
            <h2
              className={`text-4xl font-semibold text-zinc-950 sm:text-5xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.08]" : "tracking-[-0.05em]"}`}
            >
              {t(result.archetype.name, locale)}
            </h2>
            <p className={`mx-auto max-w-md text-zinc-700 sm:text-base ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm leading-6"}`}>
              {t(result.archetype.descriptor, locale)}
            </p>
          </div>

          <div className="w-full rounded-[1.6rem] border border-white/50 bg-white/45 p-4 text-left shadow-[0_12px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-5">
            <AxisBars scores={result.scores} compact />
          </div>

          <div
            className={`max-w-full rounded-[1.35rem] border border-white/50 bg-white/52 px-4 py-3 text-zinc-600 ${locale === "th" ? "text-[0.95rem] leading-7 tracking-[0.01em]" : "text-sm uppercase tracking-[0.24em]"}`}
          >
            {result.archetype.aestheticKeywords[locale].join(" • ")}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
