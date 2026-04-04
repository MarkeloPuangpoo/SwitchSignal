"use client";

import { motion, useReducedMotion } from "framer-motion";

import { appCopy } from "@/data/copy";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Pill } from "@/components/ui/pill";

export function ProgressHeader({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <Pill>{`${t(appCopy.quiz.question, locale)} ${currentStep} / ${totalSteps}`}</Pill>
        <span className={`text-zinc-600 ${locale === "th" ? "text-[0.82rem] tracking-[0.01em]" : "text-sm"}`}>{Math.round(progress)}% {t(appCopy.quiz.complete, locale)}</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/55 shadow-inner">
        <motion.div
          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(251,113,133,0.88),rgba(244,114,182,0.82),rgba(251,191,36,0.72))]"
          initial={reduceMotion ? false : { width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
