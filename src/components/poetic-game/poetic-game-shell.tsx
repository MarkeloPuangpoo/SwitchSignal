"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from "lucide-react";

import { useLocale } from "@/components/providers/locale-provider";
import { usePoeticGame } from "@/components/providers/poetic-game-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import {
  poeticAnswerMood,
  poeticQuestions,
  poeticSections,
} from "@/data/poetic-game";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { PoeticSectionId } from "@/types/poetic-game";

type Stage =
  | { type: "interlude"; sectionId: PoeticSectionId }
  | { type: "question"; questionId: number };

const sectionQuestionStarts: Record<PoeticSectionId, number> = {
  light: 1,
  silence: 5,
  connection: 9,
  becoming: 13,
};

const stageOrder: Stage[] = poeticSections.flatMap((section) => [
  { type: "interlude", sectionId: section.id } as const,
  ...poeticQuestions
    .filter((question) => question.section === section.id)
    .map((question) => ({ type: "question", questionId: question.id }) as const),
]);

const copy = {
  th: {
    back: "กลับหน้าเกม",
    ready: "ห้องสุดท้ายรออยู่",
    progress: "กำลังเดินผ่าน 4 ห้อง",
    restart: "เริ่มเกมนี้ใหม่",
    helper: "เลือกคำตอบที่ใกล้ความจริงในใจคุณที่สุดตอนนี้ ไม่ต้องพยายามตอบให้ดีหรือสวยกว่าเดิม",
    helperSaved: "บันทึกแล้ว ค่อยๆ เดินต่อไปทีละห้องได้เลย",
    helperLast: "อีกข้อเดียว เดี๋ยวชื่อของประกายข้างในจะค่อยๆ ปรากฏขึ้น",
    prev: "ย้อนกลับ",
    next: "ถัดไป",
    begin: "เข้าไปต่อ",
    reveal: "ดูชื่อของประกายนี้",
    stage: "ห้อง",
    progressLabel: "จังหวะของการเดินทาง",
  },
  en: {
    back: "Back to game page",
    ready: "Final room ahead",
    progress: "Walking through four rooms",
    restart: "Restart this game",
    helper: "Choose the answer that feels most true to you right now. No need to pick the prettiest version.",
    helperSaved: "Saved. Keep moving through the rooms at your own pace.",
    helperLast: "One final answer, and the name of your inner light begins to appear.",
    prev: "Back",
    next: "Next",
    begin: "Keep walking",
    reveal: "Reveal the name",
    stage: "Room",
    progressLabel: "Journey rhythm",
  },
} as const;

function getInitialStageIndex(answers: Record<number, string | undefined>) {
  const firstUnanswered = poeticQuestions.find((question) => !answers[question.id]);

  if (!firstUnanswered) {
    return stageOrder.length - 1;
  }

  const isSectionStart = sectionQuestionStarts[firstUnanswered.section] === firstUnanswered.id;

  return stageOrder.findIndex((stage) =>
    isSectionStart
      ? stage.type === "interlude" && stage.sectionId === firstUnanswered.section
      : stage.type === "question" && stage.questionId === firstUnanswered.id,
  );
}

function getQuestionPosition(questionId: number) {
  return poeticQuestions.findIndex((question) => question.id === questionId) + 1;
}

function PoeticAnswerButton({
  label,
  eyebrow,
  selected,
  onSelect,
  index,
}: {
  label: string;
  eyebrow: string;
  selected: boolean;
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
      transition={{ duration: 0.38, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      onClick={onSelect}
      className={cn(
        "group flex w-full items-start justify-between gap-4 rounded-[1.65rem] border px-5 py-4 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-6 sm:py-5",
        selected
          ? "border-sky-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(239,246,255,0.95),rgba(224,242,254,0.78))] shadow-[0_18px_55px_rgba(125,211,252,0.18)]"
          : "border-white/45 bg-white/55 shadow-[0_12px_40px_rgba(15,23,42,0.07)] hover:border-white/80 hover:bg-white/74",
      )}
    >
      <div className="space-y-2">
        <div className={`text-zinc-400 ${locale === "th" ? "text-[0.8rem] tracking-[0.01em]" : "text-xs tracking-[0.14em] uppercase"}`}>{eyebrow}</div>
        <div className={`text-zinc-900 ${locale === "th" ? "text-[1rem] leading-7 sm:text-[1.06rem]" : "text-base leading-7 sm:text-lg"}`}>{label}</div>
      </div>

      <div className={cn("mt-1 h-3.5 w-3.5 rounded-full border transition-all", selected ? "border-sky-300 bg-sky-300 shadow-[0_0_0_5px_rgba(186,230,253,0.35)]" : "border-zinc-300/70 bg-white")} />
    </motion.button>
  );
}

export function PoeticGameShell() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const { answers, selectAnswer, resetGame, answeredCount } = usePoeticGame();
  const text = copy[locale];
  const [stageIndex, setStageIndex] = useState(() => getInitialStageIndex(answers));
  const stage = stageOrder[stageIndex];
  const currentQuestion = stage.type === "question" ? poeticQuestions.find((question) => question.id === stage.questionId) : null;
  const currentSection = poeticSections.find((section) => section.id === (stage.type === "interlude" ? stage.sectionId : currentQuestion?.section)) ?? poeticSections[0];
  const selectedAnswerId = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isLastQuestion = currentQuestion?.id === poeticQuestions[poeticQuestions.length - 1]?.id;
  const isInterlude = stage.type === "interlude";
  const currentQuestionPosition = currentQuestion ? getQuestionPosition(currentQuestion.id) : Math.max(1, sectionQuestionStarts[currentSection.id] - 1);
  const progressPercent = Math.round((Math.max(currentQuestionPosition - (isInterlude ? 1 : 0), 0) / poeticQuestions.length) * 100);
  const helperCopy = isInterlude
    ? t(currentSection.intro, locale)
    : isLastQuestion && selectedAnswerId
      ? text.helperLast
      : selectedAnswerId
        ? text.helperSaved
        : text.helper;

  const handleAdvance = () => {
    if (isInterlude) {
      setStageIndex((value) => Math.min(value + 1, stageOrder.length - 1));
      return;
    }

    if (!currentQuestion || !selectedAnswerId) {
      return;
    }

    if (isLastQuestion) {
      router.push("/games/inner-light/result");
      return;
    }

    setStageIndex((value) => Math.min(value + 1, stageOrder.length - 1));
  };

  const handlePrevious = () => {
    setStageIndex((value) => Math.max(value - 1, 0));
  };

  const handleRestart = () => {
    resetGame();
    setStageIndex(0);
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/games/inner-light">
            <Button variant="ghost" className="px-0 text-zinc-600 hover:bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              {text.back}
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <Pill>{answeredCount === poeticQuestions.length ? text.ready : text.progress}</Pill>
            <Button variant="secondary" size="icon" onClick={handleRestart} aria-label={text.restart}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>{`${text.stage} ${poeticSections.findIndex((section) => section.id === currentSection.id) + 1}`}</Pill>
                <span className={`text-zinc-500 ${locale === "th" ? "text-[0.84rem] tracking-[0.01em]" : "text-sm"}`}>{t(currentSection.title, locale)}</span>
              </div>
              <p className={`text-zinc-500 ${locale === "th" ? "text-[0.92rem] leading-7" : "text-sm leading-6"}`}>{text.progressLabel}</p>
            </div>
            <span className={`text-zinc-600 ${locale === "th" ? "text-[0.84rem] tracking-[0.01em]" : "text-sm"}`}>{progressPercent}%</span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/55 shadow-inner">
            <motion.div
              initial={reduceMotion ? false : { width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-[linear-gradient(90deg,rgba(125,211,252,0.92),rgba(192,132,252,0.82),rgba(253,224,71,0.76))]"
            />
          </div>
        </Card>
      </motion.div>

      <AnimatePresence mode="wait">
        {isInterlude ? (
          <motion.div
            key={`interlude-${currentSection.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.18)_55%,rgba(255,255,255,0)_80%)]" />
              <div className="relative flex flex-col gap-6">
                <div className="space-y-3">
                  <Pill>{t(currentSection.ambientLabel, locale)}</Pill>
                  <h2 className={`max-w-3xl text-4xl font-semibold text-zinc-950 sm:text-5xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.18]" : "tracking-[-0.05em]"}`}>
                    {t(currentSection.title, locale)}
                  </h2>
                  <p className={`max-w-3xl text-zinc-700 ${locale === "th" ? "text-[1.06rem] leading-9 sm:text-[1.12rem]" : "text-lg leading-8"}`}>
                    {t(currentSection.bridge, locale)}
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-white/55 bg-white/58 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-white/72">
                      <Sparkles className="h-5 w-5 text-zinc-900" />
                    </div>
                    <div className="text-sm text-zinc-500">{t(currentSection.intro, locale)}</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : currentQuestion ? (
          <motion.div
            key={`question-${currentQuestion.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-5 sm:p-7">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill>{`${locale === "th" ? "คำถาม" : "Question"} ${currentQuestionPosition} / ${poeticQuestions.length}`}</Pill>
                    <span className={`text-zinc-500 ${locale === "th" ? "text-[0.82rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.14em]"}`}>{t(currentSection.title, locale)}</span>
                  </div>
                  <h2 className={`max-w-3xl text-2xl font-semibold text-zinc-950 sm:text-[2rem] ${locale === "th" ? "tracking-[-0.02em] leading-[1.45] sm:leading-[1.4]" : "tracking-[-0.04em] sm:leading-[1.15]"}`}>
                    {t(currentQuestion.prompt, locale)}
                  </h2>
                </div>

                <div className="grid gap-3">
                  {currentQuestion.answers.map((answer, index) => (
                    <PoeticAnswerButton
                      key={answer.id}
                      label={t(answer.label, locale)}
                      eyebrow={poeticAnswerMood[locale][index]}
                      selected={selectedAnswerId === answer.id}
                      onSelect={() => selectAnswer(currentQuestion.id, answer.id)}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layout
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className={`max-w-2xl text-zinc-600 ${locale === "th" ? "text-[0.96rem] leading-7 sm:text-base" : "text-sm leading-6 sm:text-base"}`}>{helperCopy}</p>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Button variant="secondary" onClick={handlePrevious} disabled={stageIndex === 0}>
              {text.prev}
            </Button>
            <Button onClick={handleAdvance} disabled={!isInterlude && !selectedAnswerId}>
              {isInterlude ? text.begin : isLastQuestion ? text.reveal : text.next}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
