import { create } from "zustand";
import type { TenseId, Exercise } from "@/lib/tutor-data";
import { TENSE_ORDER } from "@/lib/tutor-data";

export type ViewType = "theory" | "setup" | "exercise" | "complete" | "blocked";

export interface TenseProgressInfo {
  tense: TenseId;
  theoryDone: boolean;
  completed: boolean;
}

interface TutorState {
  currentTense: TenseId;
  currentView: ViewType;

  progressMap: Record<TenseId, TenseProgressInfo>;

  // Test setup
  exerciseCount: number;
  selectedExercises: Exercise[];

  // User answers
  answers: Record<number, string>;

  // Frozen exercise IDs per tense (persisted in localStorage)
  frozenIds: Record<TenseId, number[]>;

  // Sidebar
  sidebarOpen: boolean;

  // Actions
  setView: (view: ViewType) => void;
  setCurrentTense: (tense: TenseId) => void;
  setProgressMap: (map: Record<TenseId, TenseProgressInfo>) => void;
  setExerciseCount: (count: number) => void;
  setSelectedExercises: (exercises: Exercise[]) => void;
  setAnswer: (exerciseIndex: number, answer: string) => void;
  resetAnswers: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  // Frozen exercises management
  loadFrozen: () => void;
  freezeExercises: (tenseId: TenseId, ids: number[]) => void;
  unfreezeTense: (tenseId: TenseId) => void;
  getAvailableCount: (tenseId: TenseId, totalPool: number) => number;

  goToNextTense: () => TenseId | null;
  goToTheory: () => void;
}

const FROZEN_KEY = "tutor_frozen_exercises";

function loadFrozenFromStorage(): Record<string, number[]> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(FROZEN_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveFrozenToStorage(frozen: Record<string, number[]>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(FROZEN_KEY, JSON.stringify(frozen));
  } catch {
    // ignore
  }
}

export const useTutorStore = create<TutorState>((set, get) => ({
  currentTense: "present-simple",
  currentView: "theory",
  progressMap: {},
  exerciseCount: 10,
  selectedExercises: [],
  answers: {},
  frozenIds: {},
  sidebarOpen: false,

  setView: (view) => set({ currentView: view }),
  setCurrentTense: (tense) => set({
    currentTense: tense,
    currentView: "theory",
    answers: {},
    selectedExercises: [],
    exerciseCount: 10,
  }),
  setProgressMap: (progressMap) => set({ progressMap }),
  setExerciseCount: (count) => set({ exerciseCount: count }),
  setSelectedExercises: (exercises) => set({ selectedExercises: exercises }),
  setAnswer: (exerciseIndex, answer) =>
    set((state) => ({ answers: { ...state.answers, [exerciseIndex]: answer } })),
  resetAnswers: () => set({ answers: {} }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  loadFrozen: () => {
    const frozen = loadFrozenFromStorage();
    set({ frozenIds: frozen as Record<TenseId, number[]> });
  },

  freezeExercises: (tenseId, ids) => {
    set((state) => {
      const existing = state.frozenIds[tenseId] || [];
      const newFrozen = [...new Set([...existing, ...ids])];
      const updated = { ...state.frozenIds, [tenseId]: newFrozen };
      saveFrozenToStorage(updated as Record<string, number[]>);
      return { frozenIds: updated as Record<TenseId, number[]> };
    });
  },

  unfreezeTense: (tenseId) => {
    set((state) => {
      const updated = { ...state.frozenIds, [tenseId]: [] };
      saveFrozenToStorage(updated as Record<string, number[]>);
      return { frozenIds: updated as Record<TenseId, number[]> };
    });
  },

  getAvailableCount: (tenseId, totalPool) => {
    const frozen = get().frozenIds[tenseId] || [];
    return Math.max(0, totalPool - frozen.length);
  },

  goToNextTense: () => {
    const { currentTense } = get();
    const idx = TENSE_ORDER.indexOf(currentTense);
    if (idx === -1 || idx === TENSE_ORDER.length - 1) return null;
    const next = TENSE_ORDER[idx + 1];
    set({ currentTense: next, currentView: "theory", answers: {}, selectedExercises: [], exerciseCount: 10 });
    return next;
  },

  goToTheory: () => set({ currentView: "theory", answers: {}, selectedExercises: [] }),
}));
