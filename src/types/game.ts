import type { LocalizedText } from "@/types/quiz";

export type GameStatus = "live" | "upcoming";

export interface GameDefinition {
  id: string;
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  hook: LocalizedText;
  href: string;
  status: GameStatus;
  questionCount?: number;
  accent: {
    from: string;
    via: string;
    to: string;
  };
}
