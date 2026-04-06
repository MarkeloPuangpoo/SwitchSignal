import type { LocalizedText } from "@/types/quiz";

export type PoeticAxisKey = "G" | "V" | "T" | "F" | "B";
export type PoeticSectionId = "light" | "silence" | "connection" | "becoming";
export type PoeticArchetypeId =
  | "quiet-flame"
  | "midnight-bloom"
  | "tender-archive"
  | "velvet-storm"
  | "soft-orbit"
  | "golden-wound"
  | "hidden-spring"
  | "unfinished-light";

export type PoeticAxisScore = Partial<Record<PoeticAxisKey, number>>;

export interface PoeticGameAnswer {
  id: string;
  label: LocalizedText;
  score: PoeticAxisScore;
}

export interface PoeticGameQuestion {
  id: number;
  section: PoeticSectionId;
  prompt: LocalizedText;
  answers: PoeticGameAnswer[];
}

export interface PoeticSection {
  id: PoeticSectionId;
  title: LocalizedText;
  intro: LocalizedText;
  bridge: LocalizedText;
  ambientLabel: LocalizedText;
}

export interface PoeticArchetype {
  id: PoeticArchetypeId;
  name: LocalizedText;
  tagline: LocalizedText;
  summary: LocalizedText;
  light: LocalizedText;
  silence: LocalizedText;
  love: LocalizedText;
  misunderstood: LocalizedText;
  becoming: LocalizedText;
  accent: {
    from: string;
    via: string;
    to: string;
    glow: string;
  };
}

export interface PoeticGameResult {
  archetype: PoeticArchetype;
  scores: Record<PoeticAxisKey, number>;
  percents: Record<PoeticAxisKey, number>;
  primaryAxis: PoeticAxisKey;
  secondaryAxis: PoeticAxisKey;
  sectionDominants: Record<PoeticSectionId, PoeticAxisKey>;
}
