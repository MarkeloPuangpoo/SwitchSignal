"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { appCopy } from "@/data/copy";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Card } from "@/components/ui/card";
import { AnswerOption } from "@/components/quiz/answer-option";
import type { LocalizedText } from "@/types/quiz";

interface QuestionCardShape {
  id: number;
  prompt: LocalizedText;
  answers: Array<{
    id: string;
    label: LocalizedText;
  }>;
}

export function QuestionCard({
  question,
  selectedAnswerId,
  onSelect,
}: {
  question: QuestionCardShape;
  selectedAnswerId?: string;
  onSelect: (answerId: string) => void;
}) {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="p-5 sm:p-7">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className={`text-sm text-zinc-500 ${locale === "th" ? "tracking-[0.01em]" : "uppercase tracking-[0.28em]"}`}>{t(appCopy.quiz.readMoment, locale)}</p>
              <h2 className={`max-w-2xl text-2xl font-semibold text-zinc-950 sm:text-[2rem] ${locale === "th" ? "tracking-[-0.02em] leading-[1.45] sm:leading-[1.4]" : "tracking-[-0.04em] sm:leading-[1.15]"}`}>
                {t(question.prompt, locale)}
              </h2>
            </div>

            <div className="grid gap-3">
              {question.answers.map((answer, index) => (
                <AnswerOption
                  key={answer.id}
                  label={t(answer.label, locale)}
                  index={index}
                  isSelected={selectedAnswerId === answer.id}
                  onSelect={() => onSelect(answer.id)}
                />
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
