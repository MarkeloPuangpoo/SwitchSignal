"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

import { schoolGameQuestions } from "@/data/school-game";
import { buildSchoolGameResult } from "@/lib/school-game";
import type { SchoolGameResult } from "@/types/school-game";

type AnswersByQuestion = Record<number, string | undefined>;

interface SchoolGameState {
  answers: AnswersByQuestion;
}

type SchoolGameAction =
  | { type: "select"; questionId: number; answerId: string }
  | { type: "hydrate"; payload: SchoolGameState }
  | { type: "reset" };

interface SchoolGameContextValue {
  answers: AnswersByQuestion;
  result: SchoolGameResult | null;
  answeredCount: number;
  selectAnswer: (questionId: number, answerId: string) => void;
  resetGame: () => void;
}

const STORAGE_KEY = "switch-signal.school-game";
const SchoolGameContext = createContext<SchoolGameContextValue | null>(null);

function reducer(state: SchoolGameState, action: SchoolGameAction): SchoolGameState {
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

export function SchoolGameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { answers: {} });

  useEffect(() => {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as SchoolGameState;
      dispatch({ type: "hydrate", payload: parsed });
    } catch {
      window.sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<SchoolGameContextValue>(() => {
    const orderedAnswers = schoolGameQuestions.map((question) => state.answers[question.id]).filter(Boolean) as string[];

    return {
      answers: state.answers,
      result: buildSchoolGameResult(orderedAnswers),
      answeredCount: orderedAnswers.length,
      selectAnswer: (questionId, answerId) => dispatch({ type: "select", questionId, answerId }),
      resetGame: () => dispatch({ type: "reset" }),
    };
  }, [state.answers]);

  return <SchoolGameContext.Provider value={value}>{children}</SchoolGameContext.Provider>;
}

export function useSchoolGame() {
  const context = useContext(SchoolGameContext);
  if (!context) {
    throw new Error("useSchoolGame must be used inside SchoolGameProvider");
  }

  return context;
}
