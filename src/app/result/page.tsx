"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import { appCopy } from "@/data/copy";
import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { useQuiz } from "@/components/providers/quiz-provider";
import { ResultHero } from "@/components/result/result-hero";
import { ResultInsightCard } from "@/components/result/result-insight-card";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

export default function ResultPage() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const { result, resetQuiz } = useQuiz();

  useEffect(() => {
    if (!result) {
      router.replace("/quiz");
    }
  }, [result, router]);

  if (!result) {
    return null;
  }

  return (
    <main className="app-shell">
      <FloatingBackground />
      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <section className="section-frame flex flex-1 flex-col gap-5 sm:gap-6">
          <ResultHero
            result={result}
            onRetake={() => {
              resetQuiz();
              router.push("/quiz");
            }}
          />

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <ResultInsightCard title={t(appCopy.result.coreVibe, locale)} body={t(result.archetype.coreVibe, locale)} />
            <ResultInsightCard title={t(appCopy.result.howYouLove, locale)} body={t(result.archetype.howYouLove, locale)} />
            <ResultInsightCard title={t(appCopy.result.misunderstood, locale)} body={t(result.archetype.misunderstood, locale)} />
          </motion.section>

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-6 sm:p-7">
              <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-4">
                  <Pill>{t(appCopy.result.chemistry, locale)}</Pill>
                  <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.12]" : "tracking-[-0.05em]"}`}>
                    {t(result.archetype.name, locale)} {t(appCopy.result.chemistryHeadingSuffix, locale)}
                  </h2>
                  <p className={`text-zinc-700 ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.02rem]" : "text-base leading-7 sm:text-lg"}`}>
                    {t(result.archetype.bestChemistry, locale)}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <Pill>{t(appCopy.result.keywords, locale)}</Pill>
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {result.archetype.aestheticKeywords[locale].map((keyword) => (
                      <span
                        key={keyword}
                        className={`inline-flex w-fit items-center rounded-full border border-white/55 bg-white/55 px-4 py-2 text-zinc-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ${locale === "th" ? "text-[0.95rem] leading-6 tracking-[0.01em]" : "text-sm"}`}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>
        </section>

        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
