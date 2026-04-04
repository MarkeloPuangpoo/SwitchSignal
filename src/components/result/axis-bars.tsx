"use client";

import { motion, useReducedMotion } from "framer-motion";

import { axisLabels } from "@/data/copy";
import { getAxisDisplay } from "@/lib/scoring";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import type { AxisKey } from "@/types/quiz";

const axisColorMap: Record<AxisKey, string> = {
  L: "from-rose-300 via-pink-300 to-orange-200",
  C: "from-amber-200 via-rose-200 to-pink-200",
  S: "from-sky-200 via-violet-200 to-pink-200",
  T: "from-fuchsia-300 via-rose-300 to-amber-200",
  F: "from-cyan-200 via-sky-200 to-indigo-200",
};

export function AxisBars({ scores, compact = false }: { scores: Record<AxisKey, number>; compact?: boolean }) {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const axes = getAxisDisplay(scores);
  const maxValue = Math.max(...axes.map((axis) => axis.value), 1);

  return (
    <div className="grid gap-3">
      {axes.map((axis, index) => {
        const percent = Math.max(16, (axis.value / maxValue) * 100);

        return (
          <div key={axis.key} className="grid gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-zinc-700">{t(axisLabels[axis.key], locale)}</span>
              <span className="text-zinc-500">{axis.value}</span>
            </div>

            <div className={compact ? "h-2 overflow-hidden rounded-full bg-white/60" : "h-3 overflow-hidden rounded-full bg-white/60"}>
              <motion.div
                initial={reduceMotion ? false : { width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-full bg-gradient-to-r ${axisColorMap[axis.key]}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
