import { archetypes } from "@/data/archetypes";
import { quizQuestions } from "@/data/questions";
import type { ArchetypeId, ArchetypeResult, AxisDisplay, AxisKey, QuizAnswer } from "@/types/quiz";

const AXES: AxisKey[] = ["L", "C", "S", "T", "F"];

export function createEmptyScores(): Record<AxisKey, number> {
  return { L: 0, C: 0, S: 0, T: 0, F: 0 };
}

export function getAnswerMap() {
  return new Map(quizQuestions.flatMap((question) => question.answers.map((answer) => [answer.id, answer] as const)));
}

export function aggregateScores(answerIds: string[]) {
  const lookup = getAnswerMap();
  return answerIds.reduce((scores, answerId) => {
    const answer = lookup.get(answerId);
    if (!answer) {
      return scores;
    }

    for (const axis of AXES) {
      scores[axis] += answer.score[axis] ?? 0;
    }

    return scores;
  }, createEmptyScores());
}

export function classifyScores(scores: Record<AxisKey, number>): ArchetypeId {
  const direction = scores.L - scores.S;

  if (direction >= 3) {
    if (scores.L >= 6 && scores.C >= 8 && scores.T >= 6) {
      return "puppy-seme";
    }

    if (scores.C >= 9 && scores.L >= 7 && scores.C >= scores.T) {
      return "gentle-seme";
    }

    return "king-seme";
  }

  if (direction <= -3) {
    if (scores.S >= 7 && scores.T >= 8) {
      return "queen-uke";
    }

    if (scores.S >= 7 && (scores.L >= 6 || scores.T >= 6)) {
      return "fierce-uke";
    }

    return "pure-uke";
  }

  return "versatile-seke";
}

export function buildResult(answerIds: string[]): ArchetypeResult | null {
  if (answerIds.length !== quizQuestions.length) {
    return null;
  }

  const scores = aggregateScores(answerIds);
  const archetypeId = classifyScores(scores);

  return {
    archetype: archetypes[archetypeId],
    scores,
    direction: scores.L - scores.S,
  };
}

export function getAxisDisplay(scores: Record<AxisKey, number>): AxisDisplay[] {
  return [
    { key: "L", label: "Lead", value: scores.L },
    { key: "C", label: "Care", value: scores.C },
    { key: "S", label: "Soft", value: scores.S },
    { key: "T", label: "Tease", value: scores.T },
    { key: "F", label: "Flex", value: scores.F },
  ];
}

export function findAnswerById(answerId: string | undefined): QuizAnswer | undefined {
  if (!answerId) {
    return undefined;
  }

  return getAnswerMap().get(answerId);
}
