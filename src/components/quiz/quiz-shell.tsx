"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

import { appCopy } from "@/data/copy";
import { quizQuestions } from "@/data/questions";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { QuestionCard } from "@/components/quiz/question-card";
import { ProgressHeader } from "@/components/quiz/progress-header";
import { useQuiz } from "@/components/providers/quiz-provider";

export function QuizShell() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const { answers, selectAnswer, resetQuiz, answeredCount } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(() => {
    const firstUnanswered = quizQuestions.findIndex((question) => !answers[question.id]);
    return firstUnanswered === -1 ? quizQuestions.length - 1 : firstUnanswered;
  });

  const question = quizQuestions[currentIndex];
  const selectedAnswerId = answers[question.id];
  const isLast = currentIndex === quizQuestions.length - 1;
  const allAnswered = answeredCount === quizQuestions.length;

  const helperCopy = useMemo(() => {
    if (isLast && selectedAnswerId) {
      return t(appCopy.quiz.oneMoreTap, locale);
    }

    if (selectedAnswerId) {
      return t(appCopy.quiz.saved, locale);
    }

    return t(appCopy.quiz.instinct, locale);
  }, [isLast, locale, selectedAnswerId]);

  const handleNext = () => {
    if (!selectedAnswerId) {
      return;
    }

    if (isLast) {
      router.push("/result");
      return;
    }

    setCurrentIndex((value) => Math.min(value + 1, quizQuestions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((value) => Math.max(value - 1, 0));
  };

  const handleRestart = () => {
    resetQuiz();
    setCurrentIndex(0);
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/">
            <Button variant="ghost" className="px-0 text-zinc-600 hover:bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              {t(appCopy.quiz.backHome, locale)}
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Pill>{allAnswered ? t(appCopy.quiz.ready, locale) : t(appCopy.quiz.inProgress, locale)}</Pill>
            <Button variant="secondary" size="icon" onClick={handleRestart} aria-label={t(appCopy.quiz.restartAria, locale)}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="p-5 sm:p-6">
          <ProgressHeader currentStep={currentIndex + 1} totalSteps={quizQuestions.length} />
        </Card>
      </motion.div>

      <QuestionCard question={question} selectedAnswerId={selectedAnswerId} onSelect={(answerId) => selectAnswer(question.id, answerId)} />

      <motion.div
        layout
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="max-w-xl text-sm leading-6 text-zinc-600 sm:text-base">{helperCopy}</p>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Button variant="secondary" onClick={handlePrevious} disabled={currentIndex === 0}>
              {t(appCopy.quiz.previous, locale)}
            </Button>
            <Button onClick={handleNext} disabled={!selectedAnswerId}>
              {isLast ? t(appCopy.quiz.reveal, locale) : t(appCopy.quiz.next, locale)}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
