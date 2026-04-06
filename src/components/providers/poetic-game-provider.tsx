"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

import { poeticQuestions } from "@/data/poetic-game";
import { buildPoeticGameResult } from "@/lib/poetic-game";
import type { PoeticGameResult } from "@/types/poetic-game";

type AnswersByQuestion = Record<number, string | undefined>;

interface PoeticGameState {
  answers: AnswersByQuestion;
}

type PoeticGameAction =
  | { type: "select"; questionId: number; answerId: string }
  | { type: "hydrate"; payload: PoeticGameState }
  | { type: "reset" };

interface PoeticGameContextValue {
  answers: AnswersByQuestion;
  result: PoeticGameResult | null;
  answeredCount: number;
  selectAnswer: (questionId: number, answerId: string) => void;
  resetGame: () => void;
}

const STORAGE_KEY = "switch-signal.poetic-game";
const PoeticGameContext = createContext<PoeticGameContextValue | null>(null);

function reducer(state: PoeticGameState, action: PoeticGameAction): PoeticGameState {
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

export function PoeticGameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { answers: {} });

  useEffect(() => {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as PoeticGameState;
      dispatch({ type: "hydrate", payload: parsed });
    } catch {
      window.sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<PoeticGameContextValue>(() => {
    const orderedAnswers = poeticQuestions.map((question) => state.answers[question.id]).filter(Boolean) as string[];

    return {
      answers: state.answers,
      result: buildPoeticGameResult(orderedAnswers),
      answeredCount: orderedAnswers.length,
      selectAnswer: (questionId, answerId) => dispatch({ type: "select", questionId, answerId }),
      resetGame: () => dispatch({ type: "reset" }),
    };
  }, [state.answers]);

  return <PoeticGameContext.Provider value={value}>{children}</PoeticGameContext.Provider>;
}

export function usePoeticGame() {
  const context = useContext(PoeticGameContext);

  if (!context) {
    throw new Error("usePoeticGame must be used inside PoeticGameProvider");
  }

  return context;
}
