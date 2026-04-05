"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

import { schoolGameQuestions } from "@/data/school-game";
import { useLocale } from "@/components/providers/locale-provider";
import { useSchoolGame } from "@/components/providers/school-game-provider";
import { QuestionCard } from "@/components/quiz/question-card";
import { ProgressHeader } from "@/components/quiz/progress-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

const copy = {
  th: {
    back: "กลับไปหน้าเกม",
    ready: "พร้อมดูคาแรกเตอร์",
    progress: "กำลังเล่น",
    restart: "เริ่มเกมนี้ใหม่",
    oneMore: "อีกข้อเดียว เดี๋ยวรู้เลยว่าคุณเป็นสายเรียนหรือสายซ่าแบบไหน",
    saved: "บันทึกคำตอบแล้ว ไปต่อได้เลย",
    helper: "เลือกคำตอบที่ใกล้ตัวคุณที่สุดในบรรยากาศโรงเรียนจริงๆ",
    prev: "ก่อนหน้า",
    next: "ถัดไป",
    reveal: "ดูผลลัพธ์",
  },
  en: {
    back: "Back to game page",
    ready: "Ready for your result",
    progress: "In progress",
    restart: "Restart this game",
    oneMore: "One more question and your school character is ready.",
    saved: "Saved. Move on when it feels right.",
    helper: "Pick the answer that feels most like your real school energy.",
    prev: "Previous",
    next: "Next",
    reveal: "Reveal result",
  },
} as const;

export function StudentGameShell() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const { answers, selectAnswer, resetGame, answeredCount } = useSchoolGame();
  const text = copy[locale];
  const [currentIndex, setCurrentIndex] = useState(() => {
    const firstUnanswered = schoolGameQuestions.findIndex((question) => !answers[question.id]);
    return firstUnanswered === -1 ? schoolGameQuestions.length - 1 : firstUnanswered;
  });

  const question = schoolGameQuestions[currentIndex];
  const selectedAnswerId = answers[question.id];
  const isLast = currentIndex === schoolGameQuestions.length - 1;
  const allAnswered = answeredCount === schoolGameQuestions.length;

  const helperCopy = useMemo(() => {
    if (isLast && selectedAnswerId) {
      return text.oneMore;
    }

    if (selectedAnswerId) {
      return text.saved;
    }

    return text.helper;
  }, [isLast, selectedAnswerId, text]);

  const handleNext = () => {
    if (!selectedAnswerId) {
      return;
    }

    if (isLast) {
      router.push("/games/student-or-school-legend/result");
      return;
    }

    setCurrentIndex((value) => Math.min(value + 1, schoolGameQuestions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((value) => Math.max(value - 1, 0));
  };

  const handleRestart = () => {
    resetGame();
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
          <Link href="/games/student-or-school-legend">
            <Button variant="ghost" className="px-0 text-zinc-600 hover:bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              {text.back}
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Pill>{allAnswered ? text.ready : text.progress}</Pill>
            <Button variant="secondary" size="icon" onClick={handleRestart} aria-label={text.restart}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="p-5 sm:p-6">
          <ProgressHeader currentStep={currentIndex + 1} totalSteps={schoolGameQuestions.length} />
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
          <p className={`max-w-xl text-zinc-600 ${locale === "th" ? "text-[0.95rem] leading-7 sm:text-base" : "text-sm leading-6 sm:text-base"}`}>{helperCopy}</p>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Button variant="secondary" onClick={handlePrevious} disabled={currentIndex === 0}>
              {text.prev}
            </Button>
            <Button onClick={handleNext} disabled={!selectedAnswerId}>
              {isLast ? text.reveal : text.next}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
