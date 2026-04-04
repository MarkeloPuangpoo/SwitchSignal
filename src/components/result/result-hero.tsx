"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { House, RotateCcw } from "lucide-react";

import { appCopy } from "@/data/copy";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { AxisBars } from "@/components/result/axis-bars";
import { ShareResultCard } from "@/components/result/share-result-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import type { ArchetypeResult } from "@/types/quiz";

export function ResultHero({ result, onRetake }: { result: ArchetypeResult; onRetake: () => void }) {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <Pill>{t(appCopy.result.finalArchetype, locale)}</Pill>
          <div className="space-y-3">
            <h1 className={`text-5xl font-semibold text-zinc-950 sm:text-6xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.08]" : "tracking-[-0.06em]"}`}>
              {t(result.archetype.name, locale)}
            </h1>
            <p className={`max-w-xl text-zinc-700 ${locale === "th" ? "text-[1.02rem] leading-8" : "text-lg leading-8"}`}>{t(result.archetype.summary, locale)}</p>
          </div>
        </div>

        <Card className="p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <Pill>{t(appCopy.result.axisMix, locale)}</Pill>
              <span className="text-sm text-zinc-500">{t(result.archetype.motif, locale)}</span>
            </div>
            <AxisBars scores={result.scores} />
          </div>
        </Card>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={onRetake}>
            <RotateCcw className="h-4 w-4" />
            {t(appCopy.result.retake, locale)}
          </Button>
          <Link href="/">
            <Button variant="secondary" className="w-full sm:w-auto">
              <House className="h-4 w-4" />
              {t(appCopy.result.backHome, locale)}
            </Button>
          </Link>
        </div>
      </motion.div>

      <ShareResultCard result={result} />
    </div>
  );
}
