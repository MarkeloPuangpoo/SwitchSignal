import {
  poeticArchetypeByAxes,
  poeticArchetypes,
  poeticQuestions,
} from "@/data/poetic-game";
import type {
  PoeticArchetypeId,
  PoeticAxisKey,
  PoeticGameAnswer,
  PoeticGameResult,
  PoeticSectionId,
} from "@/types/poetic-game";

const AXES: PoeticAxisKey[] = ["G", "V", "T", "F", "B"];
const SECTION_IDS: PoeticSectionId[] = ["light", "silence", "connection", "becoming"];

export function createEmptyPoeticScores(): Record<PoeticAxisKey, number> {
  return { G: 0, V: 0, T: 0, F: 0, B: 0 };
}

export function getPoeticAnswerMap() {
  return new Map(poeticQuestions.flatMap((question) => question.answers.map((answer) => [answer.id, answer] as const)));
}

function addScoreBlock(base: Record<PoeticAxisKey, number>, incoming: Partial<Record<PoeticAxisKey, number>>) {
  for (const axis of AXES) {
    base[axis] += incoming[axis] ?? 0;
  }

  return base;
}

export function aggregatePoeticScores(answerIds: string[]) {
  const lookup = getPoeticAnswerMap();

  return answerIds.reduce((scores, answerId) => {
    const answer = lookup.get(answerId);
    if (!answer) {
      return scores;
    }

    return addScoreBlock(scores, answer.score);
  }, createEmptyPoeticScores());
}

export function aggregatePoeticSectionScores() {
  return SECTION_IDS.reduce<Record<PoeticSectionId, Record<PoeticAxisKey, number>>>((sections, sectionId) => {
    sections[sectionId] = createEmptyPoeticScores();
    return sections;
  }, {} as Record<PoeticSectionId, Record<PoeticAxisKey, number>>);
}

function buildSectionScoreMap(answerIds: string[]) {
  const lookup = getPoeticAnswerMap();
  const sectionScores = aggregatePoeticSectionScores();

  for (const answerId of answerIds) {
    const answer = lookup.get(answerId);
    const question = poeticQuestions.find((item) => item.answers.some((choice) => choice.id === answerId));

    if (!answer || !question) {
      continue;
    }

    addScoreBlock(sectionScores[question.section], answer.score);
  }

  return sectionScores;
}

function getAxisPriority(scores: Record<PoeticAxisKey, number>) {
  return [...AXES].sort((left, right) => scores[right] - scores[left]);
}

function getQuestionAnswerContribution(answerId: string | undefined, axis: PoeticAxisKey) {
  if (!answerId) {
    return 0;
  }

  return getPoeticAnswerMap().get(answerId)?.score[axis] ?? 0;
}

function resolveAxisTie(
  orderedAxes: PoeticAxisKey[],
  scores: Record<PoeticAxisKey, number>,
  sectionScores: Record<PoeticSectionId, Record<PoeticAxisKey, number>>,
  finalAnswerId: string | undefined,
) {
  const [first, second] = orderedAxes;

  if (scores[first] - scores[second] > 1) {
    return orderedAxes;
  }

  const finalRoomScores = sectionScores.becoming;
  const finalRoomDelta = finalRoomScores[first] - finalRoomScores[second];

  if (finalRoomDelta > 0) {
    return [first, second, ...orderedAxes.slice(2)];
  }

  if (finalRoomDelta < 0) {
    return [second, first, ...orderedAxes.slice(2)];
  }

  const finalAnswerDelta = getQuestionAnswerContribution(finalAnswerId, first) - getQuestionAnswerContribution(finalAnswerId, second);

  if (finalAnswerDelta > 0) {
    return [first, second, ...orderedAxes.slice(2)];
  }

  if (finalAnswerDelta < 0) {
    return [second, first, ...orderedAxes.slice(2)];
  }

  return orderedAxes;
}

function classifyPoeticArchetype(primary: PoeticAxisKey, secondary: PoeticAxisKey): PoeticArchetypeId {
  return poeticArchetypeByAxes[primary][secondary] ?? "hidden-spring";
}

function getDominantAxis(
  scores: Record<PoeticAxisKey, number>,
  fallbackOrder: PoeticAxisKey[],
) {
  return [...AXES].sort((left, right) => {
    if (scores[right] === scores[left]) {
      return fallbackOrder.indexOf(left) - fallbackOrder.indexOf(right);
    }

    return scores[right] - scores[left];
  })[0];
}

export function buildPoeticGameResult(answerIds: string[]): PoeticGameResult | null {
  if (answerIds.length !== poeticQuestions.length) {
    return null;
  }

  const overallScores = aggregatePoeticScores(answerIds);
  const sectionScores = buildSectionScoreMap(answerIds);
  const orderedAxes = resolveAxisTie(getAxisPriority(overallScores), overallScores, sectionScores, answerIds[answerIds.length - 1]);
  const primaryAxis = orderedAxes[0];
  const secondaryAxis = orderedAxes[1];
  const archetypeId = classifyPoeticArchetype(primaryAxis, secondaryAxis);
  const maxScore = Math.max(...AXES.map((axis) => overallScores[axis]), 1);

  return {
    archetype: poeticArchetypes[archetypeId],
    scores: overallScores,
    percents: AXES.reduce<Record<PoeticAxisKey, number>>((acc, axis) => {
      acc[axis] = Math.round((overallScores[axis] / maxScore) * 100);
      return acc;
    }, {} as Record<PoeticAxisKey, number>),
    primaryAxis,
    secondaryAxis,
    sectionDominants: SECTION_IDS.reduce<Record<PoeticSectionId, PoeticAxisKey>>((acc, sectionId) => {
      acc[sectionId] = getDominantAxis(sectionScores[sectionId], orderedAxes);
      return acc;
    }, {} as Record<PoeticSectionId, PoeticAxisKey>),
  };
}

export function findPoeticAnswerById(answerId: string | undefined): PoeticGameAnswer | undefined {
  if (!answerId) {
    return undefined;
  }

  return getPoeticAnswerMap().get(answerId);
}
