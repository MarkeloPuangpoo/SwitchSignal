"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

import { quizQuestions } from "@/data/questions";
import { buildResult } from "@/lib/scoring";
import type { ArchetypeResult } from "@/types/quiz";

type AnswersByQuestion = Record<number, string | undefined>;

interface QuizState {
  answers: AnswersByQuestion;
}

type QuizAction =
  | { type: "select"; questionId: number; answerId: string }
  | { type: "hydrate"; payload: QuizState }
  | { type: "reset" };

interface QuizContextValue {
  answers: AnswersByQuestion;
  result: ArchetypeResult | null;
  answeredCount: number;
  selectAnswer: (questionId: number, answerId: string) => void;
  resetQuiz: () => void;
}

const STORAGE_KEY = "switch-signal.quiz";

const QuizContext = createContext<QuizContextValue | null>(null);

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "select":
      return { answers: { ...state.answers, [action.questionId]: action.answerId } };
    case "hydrate":
      return action.payload;
    case "reset":
      return { answers: {} };
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { answers: {} });

  useEffect(() => {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as QuizState;
      dispatch({ type: "hydrate", payload: parsed });
    } catch {
      window.sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<QuizContextValue>(() => {
    const orderedAnswers = quizQuestions.map((question) => state.answers[question.id]).filter(Boolean) as string[];

    return {
      answers: state.answers,
      result: buildResult(orderedAnswers),
      answeredCount: orderedAnswers.length,
      selectAnswer: (questionId, answerId) => dispatch({ type: "select", questionId, answerId }),
      resetQuiz: () => dispatch({ type: "reset" }),
    };
  }, [state.answers]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used inside QuizProvider");
  }

  return context;
}
