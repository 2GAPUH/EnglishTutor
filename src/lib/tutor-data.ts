// ============================================================
// British English Grammar Tutor — Data Layer
// ============================================================

export type TenseId =
  | "present-simple"
  | "present-continuous"
  | "present-perfect"
  | "present-perfect-continuous"
  | "present-final-test"
  | "past-simple"
  | "past-continuous"
  | "past-perfect"
  | "past-perfect-continuous"
  | "future-simple"
  | "future-continuous"
  | "future-perfect"
  | "future-perfect-continuous";

export type BlockId = "present" | "past" | "future";

export type ExerciseType = "multiple_choice" | "translate_ru_en" | "fill_blank";

export interface Exercise {
  id: number;
  tense: TenseId;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
  hintIds?: string[];
}

export interface TheorySection {
  title: string;
  content: string;
}

export interface TenseData {
  id: TenseId;
  nameEn: string;
  nameRu: string;
  block: BlockId;
  order: number;
  theory: TheorySection[];
  exercises: Exercise[];
}

export interface BlockData {
  id: BlockId;
  nameRu: string;
  nameEn: string;
  tenses: TenseId[];
}

export const BLOCKS: BlockData[] = [
  { id: "present", nameRu: "Настоящие времена", nameEn: "Present Tenses", tenses: ["present-simple", "present-continuous", "present-perfect", "present-perfect-continuous", "present-final-test"] },
  { id: "past", nameRu: "Прошедшие времена", nameEn: "Past Tenses", tenses: ["past-simple", "past-continuous", "past-perfect", "past-perfect-continuous"] },
  { id: "future", nameRu: "Будущие времена", nameEn: "Future Tenses", tenses: ["future-simple", "future-continuous", "future-perfect", "future-perfect-continuous"] },
];

export const TENSE_ORDER: TenseId[] = [
  "present-simple",
  "present-continuous",
  "present-perfect",
  "present-perfect-continuous",
  "present-final-test",
  "past-simple",
  "past-continuous",
  "past-perfect",
  "past-perfect-continuous",
  "future-simple",
  "future-continuous",
  "future-perfect",
  "future-perfect-continuous",
];

export const TENSE_NAMES: Record<TenseId, { en: string; ru: string }> = {
  "present-simple": { en: "Present Simple", ru: "Present Simple (простое настоящее)" },
  "present-continuous": { en: "Present Continuous", ru: "Present Continuous (настоящее длительное)" },
  "present-perfect": { en: "Present Perfect", ru: "Present Perfect (настоящее совершённое)" },
  "present-perfect-continuous": { en: "Present Perfect Continuous", ru: "Present Perfect Continuous" },
  "present-final-test": { en: "Final Test: Present Tenses", ru: "Итоговый тест: Present Tenses" },
  "past-simple": { en: "Past Simple", ru: "Past Simple (простое прошедшее)" },
  "past-continuous": { en: "Past Continuous", ru: "Past Continuous (прошедшее длительное)" },
  "past-perfect": { en: "Past Perfect", ru: "Past Perfect (предпрошедшее)" },
  "past-perfect-continuous": { en: "Past Perfect Continuous", ru: "Past Perfect Continuous" },
  "future-simple": { en: "Future Simple", ru: "Future Simple (простое будущее)" },
  "future-continuous": { en: "Future Continuous", ru: "Future Continuous (будущее длительное)" },
  "future-perfect": { en: "Future Perfect", ru: "Future Perfect (будущее совершённое)" },
  "future-perfect-continuous": { en: "Future Perfect Continuous", ru: "Future Perfect Continuous" },
};

// ============================================================
// Theory content (unchanged from before)
// ============================================================

import { presentSimpleTheory } from "./theory-present-simple";
import { presentContinuousTheory } from "./theory-present-continuous";
import { presentPerfectTheory } from "./theory-present-perfect";
import { presentPerfectContinuousTheory } from "./theory-present-perfect-continuous";
import { presentSimpleExercises } from "./exercises/present-simple";
import { presentContinuousExercises } from "./exercises/present-continuous";
import { presentPerfectExercises } from "./exercises/present-perfect";
import { presentPerfectContinuousExercises } from "./exercises/present-perfect-continuous";
import { presentFinalTestExercises } from "./exercises/present-final-test";
import { presentFinalTestTheory } from "./theory-present-final-test";
import { pastSimpleExercises } from "./exercises/past-simple";
import { pastSimpleTheory } from "./theory-past-simple";
import { pastContinuousExercises } from "./exercises/past-continuous";
import { pastContinuousTheory } from "./theory-past-continuous";

// ============================================================
// All Tenses
// ============================================================

export const ALL_TENSES: Record<TenseId, TenseData> = {
  "present-simple": {
    id: "present-simple",
    nameEn: "Present Simple",
    nameRu: "Present Simple",
    block: "present",
    order: 1,
    theory: presentSimpleTheory,
    exercises: presentSimpleExercises,
  },
  "present-continuous": {
    id: "present-continuous",
    nameEn: "Present Continuous",
    nameRu: "Present Continuous",
    block: "present",
    order: 2,
    theory: presentContinuousTheory,
    exercises: presentContinuousExercises,
  },
  "present-perfect": {
    id: "present-perfect",
    nameEn: "Present Perfect",
    nameRu: "Present Perfect",
    block: "present",
    order: 3,
    theory: presentPerfectTheory,
    exercises: presentPerfectExercises,
  },
  "present-perfect-continuous": {
    id: "present-perfect-continuous",
    nameEn: "Present Perfect Continuous",
    nameRu: "Present Perfect Continuous",
    block: "present",
    order: 4,
    theory: presentPerfectContinuousTheory,
    exercises: presentPerfectContinuousExercises,
  },
  "present-final-test": {
    id: "present-final-test",
    nameEn: "Final Test: Present Tenses",
    nameRu: "Итоговый тест: Present Tenses",
    block: "present",
    order: 5,
    theory: presentFinalTestTheory,
    exercises: presentFinalTestExercises,
  },
  "past-simple": {
    id: "past-simple",
    nameEn: "Past Simple",
    nameRu: "Past Simple",
    block: "past",
    order: 1,
    theory: pastSimpleTheory,
    exercises: pastSimpleExercises,
  },
  "past-continuous": {
    id: "past-continuous", nameEn: "Past Continuous", nameRu: "Past Continuous (прошедшее длительное)", block: "past", order: 2,
    theory: pastContinuousTheory,
    exercises: pastContinuousExercises,
  },
  "past-perfect": {
    id: "past-perfect", nameEn: "Past Perfect", nameRu: "Past Perfect", block: "past", order: 3,
    theory: [{ title: "Блок 2", content: "Блок прошедших времён будет доступен после завершения Блока 1." }],
    exercises: [],
  },
  "past-perfect-continuous": {
    id: "past-perfect-continuous", nameEn: "Past Perfect Continuous", nameRu: "Past Perfect Continuous", block: "past", order: 4,
    theory: [{ title: "Блок 2", content: "Блок прошедших времён будет доступен после завершения Блока 1." }],
    exercises: [],
  },
  "future-simple": {
    id: "future-simple", nameEn: "Future Simple", nameRu: "Future Simple", block: "future", order: 1,
    theory: [{ title: "Блок 3", content: "Блок будущих времён будет доступен после завершения Блоков 1 и 2." }],
    exercises: [],
  },
  "future-continuous": {
    id: "future-continuous", nameEn: "Future Continuous", nameRu: "Future Continuous", block: "future", order: 2,
    theory: [{ title: "Блок 3", content: "Блок будущих времён будет доступен после завершения Блоков 1 и 2." }],
    exercises: [],
  },
  "future-perfect": {
    id: "future-perfect", nameEn: "Future Perfect", nameRu: "Future Perfect", block: "future", order: 3,
    theory: [{ title: "Блок 3", content: "Блок будущих времён будет доступен после завершения Блоков 1 и 2." }],
    exercises: [],
  },
  "future-perfect-continuous": {
    id: "future-perfect-continuous", nameEn: "Future Perfect Continuous", nameRu: "Future Perfect Continuous", block: "future", order: 4,
    theory: [{ title: "Блок 3", content: "Блок будущих времён будет доступен после завершения Блоков 1 и 2." }],
    exercises: [],
  },
};

export function getTenseData(tenseId: TenseId): TenseData {
  return ALL_TENSES[tenseId];
}

export function getNextTense(tenseId: TenseId): TenseId | null {
  const idx = TENSE_ORDER.indexOf(tenseId);
  if (idx === -1 || idx === TENSE_ORDER.length - 1) return null;
  return TENSE_ORDER[idx + 1];
}

export function getBlockTenses(blockId: BlockId): TenseId[] {
  return BLOCKS.find((b) => b.id === blockId)?.tenses ?? [];
}
