import type { LocalizedText } from "@/types/quiz";

export type SchoolAxisKey = "S" | "E";

export interface SchoolGameAnswer {
  id: string;
  label: LocalizedText;
  score: Partial<Record<SchoolAxisKey, number>>;
}

export interface SchoolGameQuestion {
  id: number;
  prompt: LocalizedText;
  answers: SchoolGameAnswer[];
}

export type SchoolArchetypeId =
  | "true-student"
  | "chill-student"
  | "hybrid"
  | "structured-edge"
  | "school-icon";

export interface SchoolArchetype {
  id: SchoolArchetypeId;
  name: LocalizedText;
  nickname: LocalizedText;
  descriptor: LocalizedText;
  summary: LocalizedText;
  classAura: LocalizedText;
  survivalStyle: LocalizedText;
  misunderstood: LocalizedText;
  socialRole: LocalizedText;
  aestheticKeywords: {
    th: string[];
    en: string[];
  };
  accent: {
    from: string;
    via: string;
    to: string;
  };
}

export interface SchoolGameResult {
  archetype: SchoolArchetype;
  scores: Record<SchoolAxisKey, number>;
  difference: number;
}
