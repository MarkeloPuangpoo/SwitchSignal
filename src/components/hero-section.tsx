"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { appCopy } from "@/data/copy";
import { archetypes } from "@/data/archetypes";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

const teaser = archetypes["versatile-seke"];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-6 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
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
            <Link href="/quiz">
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
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0.42)_45%,rgba(255,255,255,0)_78%)]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <Pill className="bg-white/75">{t(appCopy.previewResult, locale)}</Pill>
                <Sparkles className="h-5 w-5 text-rose-400" />
              </div>

              <div className="space-y-3 text-center">
                <p className={`text-sm text-zinc-500 ${locale === "th" ? "tracking-[0.01em]" : "uppercase tracking-[0.32em]"}`}>{t(appCopy.youCouldBe, locale)}</p>
                <h2 className={`text-4xl font-semibold text-zinc-950 sm:text-5xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.1]" : "tracking-[-0.05em]"}`}>{t(teaser.name, locale)}</h2>
                <p className={`mx-auto max-w-sm text-zinc-600 sm:text-base ${locale === "th" ? "text-[0.97rem] leading-7" : "text-sm leading-6"}`}>{t(teaser.descriptor, locale)}</p>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {[
                  [t({ th: "นำ", en: "Lead" }, locale), 72],
                  [t({ th: "ดูแล", en: "Care" }, locale), 81],
                  [t({ th: "อ่อนโยน", en: "Soft" }, locale), 57],
                  [t({ th: "ขี้แซว", en: "Tease" }, locale), 63],
                  [t({ th: "ยืดหยุ่น", en: "Flex" }, locale), 77],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.3rem] border border-white/55 bg-white/60 p-3 text-center">
                    <div className={`text-zinc-500 ${locale === "th" ? "text-[0.72rem] tracking-[0.01em]" : "text-[0.65rem] uppercase tracking-[0.24em]"}`}>{label}</div>
                    <div className="mt-2 text-lg font-semibold text-zinc-900">{value}</div>
                  </div>
                ))}
              </div>

              <div className={`rounded-[1.5rem] border border-white/50 bg-zinc-950/[0.02] p-4 text-zinc-700 ${locale === "th" ? "text-[0.94rem] leading-7" : "text-sm leading-6"}`}>
                <span className="font-medium text-zinc-950">{t(appCopy.editorialEnergyLabel, locale)}</span>{" "}
                {t(appCopy.editorialEnergyValue, locale)}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
