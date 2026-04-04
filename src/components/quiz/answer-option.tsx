"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

import { appCopy } from "@/data/copy";
import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";

export function AnswerOption({
  label,
  isSelected,
  onSelect,
  index,
}: {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <motion.button
      type="button"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      onClick={onSelect}
      className={cn(
        "group flex w-full items-start justify-between gap-4 rounded-[1.6rem] border px-5 py-4 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-6 sm:py-5",
        isSelected
          ? "border-rose-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(253,242,248,0.92),rgba(254,215,226,0.78))] shadow-[0_18px_55px_rgba(244,114,182,0.18)]"
          : "border-white/45 bg-white/55 shadow-[0_12px_45px_rgba(15,23,42,0.08)] hover:border-white/80 hover:bg-white/75",
      )}
    >
      <div className="space-y-2">
        <div className={`text-zinc-400 ${locale === "th" ? "text-[0.8rem] tracking-[0.01em]" : "text-sm uppercase tracking-[0.24em]"}`}>
          {t(appCopy.quiz.option, locale)} {String.fromCharCode(65 + index)}
        </div>
        <div className={`text-zinc-900 sm:text-lg ${locale === "th" ? "text-[1rem] leading-7 sm:text-[1.06rem]" : "text-base leading-7"}`}>{label}</div>
      </div>

      <div
        className={cn(
          "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
          isSelected ? "border-rose-300 bg-rose-400 text-white" : "border-zinc-300/70 bg-white/80 text-transparent group-hover:text-zinc-300",
        )}
      >
        <Check className="h-4 w-4" />
      </div>
    </motion.button>
  );
}
