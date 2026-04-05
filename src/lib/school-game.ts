import { schoolArchetypes, schoolGameQuestions } from "@/data/school-game";
import type { SchoolArchetypeId, SchoolGameAnswer, SchoolGameResult, SchoolAxisKey } from "@/types/school-game";

const AXES: SchoolAxisKey[] = ["S", "E"];

export function createEmptySchoolScores(): Record<SchoolAxisKey, number> {
  return { S: 0, E: 0 };
}

export function getSchoolAnswerMap() {
  return new Map(schoolGameQuestions.flatMap((question) => question.answers.map((answer) => [answer.id, answer] as const)));
}

export function aggregateSchoolScores(answerIds: string[]) {
  const lookup = getSchoolAnswerMap();

  return answerIds.reduce((scores, answerId) => {
    const answer = lookup.get(answerId);
    if (!answer) {
      return scores;
    }

    for (const axis of AXES) {
      scores[axis] += answer.score[axis] ?? 0;
    }

    return scores;
  }, createEmptySchoolScores());
}

export function classifySchoolScores(scores: Record<SchoolAxisKey, number>): SchoolArchetypeId {
  const difference = scores.S - scores.E;

  if (difference >= 12) {
    return "true-student";
  }

  if (difference >= 4) {
    return "chill-student";
  }

  if (difference > -4 && difference < 4) {
    return "hybrid";
  }

  if (scores.E > scores.S && scores.S >= 14) {
    return "structured-edge";
  }

  return "school-icon";
}

export function buildSchoolGameResult(answerIds: string[]): SchoolGameResult | null {
  if (answerIds.length !== schoolGameQuestions.length) {
    return null;
  }

  const scores = aggregateSchoolScores(answerIds);
  const archetypeId = classifySchoolScores(scores);

  return {
    archetype: schoolArchetypes[archetypeId],
    scores,
    difference: scores.S - scores.E,
  };
}

export function findSchoolAnswerById(answerId: string | undefined): SchoolGameAnswer | undefined {
  if (!answerId) {
    return undefined;
  }

  return getSchoolAnswerMap().get(answerId);
}
