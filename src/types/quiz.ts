export type AxisKey = "L" | "C" | "S" | "T" | "F";
export type Locale = "th" | "en";

export interface LocalizedText {
  th: string;
  en: string;
}

export type AxisScore = Partial<Record<AxisKey, number>>;

export type AxisLabel = "Lead" | "Care" | "Soft" | "Tease" | "Flex";

export type ArchetypeId =
  | "king-seme"
  | "gentle-seme"
  | "puppy-seme"
  | "pure-uke"
  | "queen-uke"
  | "fierce-uke"
  | "versatile-seke";

export interface QuizAnswer {
  id: string;
  label: LocalizedText;
  score: AxisScore;
}

export interface QuizQuestion {
  id: number;
  prompt: LocalizedText;
  answers: QuizAnswer[];
}

export interface ResultArchetype {
  id: ArchetypeId;
  name: LocalizedText;
  descriptor: LocalizedText;
  summary: LocalizedText;
  coreVibe: LocalizedText;
  howYouLove: LocalizedText;
  misunderstood: LocalizedText;
  bestChemistry: LocalizedText;
  aestheticKeywords: Record<Locale, string[]>;
  motif: LocalizedText;
  accent: {
    from: string;
    via: string;
    to: string;
    glow: string;
  };
}

export interface ArchetypeResult {
  archetype: ResultArchetype;
  scores: Record<AxisKey, number>;
  direction: number;
}

export interface AxisDisplay {
  key: AxisKey;
  label: AxisLabel;
  value: number;
}
