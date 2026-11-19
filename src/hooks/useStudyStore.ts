import { useCallback, useEffect, useState } from 'react';
import { EDITAL_ITEM_MAP } from '../data/edital';
import {
  Question,
  QuizSessionRecord,
  SRSProgress,
  StudyStatus,
  UserStudyStore,
} from '../types/edital';

const STORAGE_KEY = 'infra_edital_study_store_v1';
const CURRENT_SCHEMA_VERSION = 1;

const DEFAULT_STORE: UserStudyStore = {
  schemaVersion: CURRENT_SCHEMA_VERSION,
  theme: 'dark',
  itemStatuses: {},
  itemNotes: {},
  srsProgress: {},
  quizHistory: [],
  customQuestions: [],
};

function loadInitialStore(): UserStudyStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STORE;
    const parsed = JSON.parse(raw) as Partial<UserStudyStore>;
    if (!parsed || typeof parsed !== 'object') return DEFAULT_STORE;

    const validStatuses: Record<string, StudyStatus> = {};
    if (parsed.itemStatuses && typeof parsed.itemStatuses === 'object') {
      for (const [key, value] of Object.entries(parsed.itemStatuses)) {
        if (
          EDITAL_ITEM_MAP[key] &&
          (value === 'nao_iniciado' ||
            value === 'em_estudo' ||
            value === 'revisar' ||
            value === 'dominado')
        ) {
          validStatuses[key] = value;
        }
      }
    }

    const validNotes: Record<string, string> = {};
    if (parsed.itemNotes && typeof parsed.itemNotes === 'object') {
      for (const [key, value] of Object.entries(parsed.itemNotes)) {
        if (EDITAL_ITEM_MAP[key] && typeof value === 'string') {
          validNotes[key] = value;
        }
      }
    }

    const validCustomQuestions: Question[] = Array.isArray(parsed.customQuestions)
      ? parsed.customQuestions
          .filter(
            (q): q is Question =>
              Boolean(q) &&
              typeof q.id === 'string' &&
              typeof q.editalItemId === 'string' &&
              typeof q.statement === 'string' &&
              Boolean(EDITAL_ITEM_MAP[q.editalItemId]) &&
              Array.isArray(q.options) &&
              q.options.length === 4 &&
              typeof q.correctIndex === 'number' &&
              Number.isInteger(q.correctIndex) &&
              q.correctIndex >= 0 &&
              q.correctIndex <= 3
          )
          .map((q) => ({ ...q, format: 'multipla_escolha' as const }))
      : [];

    return {
      schemaVersion: CURRENT_SCHEMA_VERSION,
      theme: parsed.theme === 'light' ? 'light' : 'dark',
      itemStatuses: validStatuses,
      itemNotes: validNotes,
      srsProgress:
        parsed.srsProgress && typeof parsed.srsProgress === 'object'
          ? parsed.srsProgress
          : {},
      quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
      customQuestions: validCustomQuestions,
    };
  } catch {
    return DEFAULT_STORE;
  }
}

export type SrsRating = 'again' | 'hard' | 'good' | 'easy';

export function useStudyStore() {
  const [store, setStore] = useState<UserStudyStore>(() => loadInitialStore());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // Ignore quota errors cleanly
    }
  }, [store]);

  useEffect(() => {
    const root = document.documentElement;
    if (store.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [store.theme]);

  const toggleTheme = useCallback(() => {
    setStore((prev) => ({
      ...prev,
      theme: prev.theme === 'dark' ? 'light' : 'dark',
    }));
  }, []);

  const setItemStatus = useCallback((itemId: string, status: StudyStatus) => {
    if (!EDITAL_ITEM_MAP[itemId]) return;
    setStore((prev) => {
      const nextStatuses = { ...prev.itemStatuses };
      if (status === 'nao_iniciado') {
        delete nextStatuses[itemId];
      } else {
        nextStatuses[itemId] = status;
      }
      return {
        ...prev,
        itemStatuses: nextStatuses,
      };
    });
  }, []);

  const setItemNote = useCallback((itemId: string, note: string) => {
    if (!EDITAL_ITEM_MAP[itemId]) return;
    setStore((prev) => {
      const nextNotes = { ...prev.itemNotes };
      if (!note.trim()) {
        delete nextNotes[itemId];
      } else {
        nextNotes[itemId] = note;
      }
      return {
        ...prev,
        itemNotes: nextNotes,
      };
    });
  }, []);

  const reviewFlashcard = useCallback((cardId: string, rating: SrsRating) => {
    const now = Date.now();
    setStore((prev) => {
      const current: SRSProgress = prev.srsProgress[cardId] ?? {
        cardId,
        intervalDays: 0,
        easeFactor: 2.5,
        repetitions: 0,
        nextReviewAt: now,
        lastReviewedAt: 0,
      };

      let nextIntervalDays = 1;
      let nextRepetitions = current.repetitions;
      let nextEase = current.easeFactor;

      if (rating === 'again') {
        nextRepetitions = 0;
        nextIntervalDays = 0.01; // ~15 minutos
        nextEase = Math.max(1.3, current.easeFactor - 0.2);
      } else if (rating === 'hard') {
        nextRepetitions = current.repetitions + 1;
        nextIntervalDays = current.repetitions === 0 ? 1 : Math.max(1, Math.round(current.intervalDays * 1.2));
        nextEase = Math.max(1.3, current.easeFactor - 0.15);
      } else if (rating === 'good') {
        nextRepetitions = current.repetitions + 1;
        if (current.repetitions === 0) nextIntervalDays = 1;
        else if (current.repetitions === 1) nextIntervalDays = 3;
        else nextIntervalDays = Math.round(current.intervalDays * current.easeFactor);
      } else {
        nextRepetitions = current.repetitions + 1;
        if (current.repetitions === 0) nextIntervalDays = 4;
        else nextIntervalDays = Math.round(current.intervalDays * current.easeFactor * 1.3);
        nextEase = Math.min(3.0, current.easeFactor + 0.15);
      }

      const nextReviewAt = now + Math.round(nextIntervalDays * 24 * 60 * 60 * 1000);

      return {
        ...prev,
        srsProgress: {
          ...prev.srsProgress,
          [cardId]: {
            cardId,
            intervalDays: nextIntervalDays,
            easeFactor: Number(nextEase.toFixed(2)),
            repetitions: nextRepetitions,
            nextReviewAt,
            lastReviewedAt: now,
          },
        },
      };
    });
  }, []);

  const recordQuizSession = useCallback((session: QuizSessionRecord) => {
    setStore((prev) => ({
      ...prev,
      quizHistory: [session, ...prev.quizHistory].slice(0, 100),
    }));
  }, []);

  const addCustomQuestion = useCallback((question: Question): boolean => {
    if (!EDITAL_ITEM_MAP[question.editalItemId]) {
      return false;
    }
    setStore((prev) => ({
      ...prev,
      customQuestions: [question, ...prev.customQuestions],
    }));
    return true;
  }, []);

  const exportBackupJson = useCallback((): string => {
    return JSON.stringify(store, null, 2);
  }, [store]);

  const importBackupJson = useCallback((jsonText: string): { ok: boolean; message: string } => {
    try {
      const parsed = JSON.parse(jsonText) as Partial<UserStudyStore>;
      if (!parsed || typeof parsed !== 'object' || typeof parsed.schemaVersion !== 'number') {
        return { ok: false, message: 'Arquivo JSON inválido: schemaVersion ausente.' };
      }

      const validStatuses: Record<string, StudyStatus> = {};
      if (parsed.itemStatuses && typeof parsed.itemStatuses === 'object') {
        for (const [id, st] of Object.entries(parsed.itemStatuses)) {
          if (
            EDITAL_ITEM_MAP[id] &&
            (st === 'nao_iniciado' || st === 'em_estudo' || st === 'revisar' || st === 'dominado')
          ) {
            validStatuses[id] = st;
          }
        }
      }

      const validNotes: Record<string, string> = {};
      if (parsed.itemNotes && typeof parsed.itemNotes === 'object') {
        for (const [id, note] of Object.entries(parsed.itemNotes)) {
          if (EDITAL_ITEM_MAP[id] && typeof note === 'string') {
            validNotes[id] = note;
          }
        }
      }

      const validCustomQuestions: Question[] = Array.isArray(parsed.customQuestions)
        ? parsed.customQuestions
            .filter(
              (q): q is Question =>
                Boolean(q) &&
                typeof q.id === 'string' &&
                typeof q.editalItemId === 'string' &&
                typeof q.statement === 'string' &&
                Boolean(EDITAL_ITEM_MAP[q.editalItemId]) &&
                Array.isArray(q.options) &&
                q.options.length === 4 &&
                typeof q.correctIndex === 'number' &&
                Number.isInteger(q.correctIndex) &&
                q.correctIndex >= 0 &&
                q.correctIndex <= 3
            )
            .map((q) => ({ ...q, format: 'multipla_escolha' as const }))
        : [];

      setStore({
        schemaVersion: CURRENT_SCHEMA_VERSION,
        theme: parsed.theme === 'light' ? 'light' : 'dark',
        itemStatuses: validStatuses,
        itemNotes: validNotes,
        srsProgress:
          parsed.srsProgress && typeof parsed.srsProgress === 'object' ? parsed.srsProgress : {},
        quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
        customQuestions: validCustomQuestions,
      });

      return {
        ok: true,
        message: `Backup importado com sucesso (${Object.keys(validStatuses).length} itens marcados, ${validCustomQuestions.length} questões personalizadas).`,
      };
    } catch {
      return { ok: false, message: 'Não foi possível ler o JSON. Verifique a sintaxe do arquivo.' };
    }
  }, []);

  const resetStore = useCallback(() => {
    setStore((prev) => ({
      ...DEFAULT_STORE,
      theme: prev.theme,
    }));
  }, []);

  return {
    store,
    toggleTheme,
    setItemStatus,
    setItemNote,
    reviewFlashcard,
    recordQuizSession,
    addCustomQuestion,
    exportBackupJson,
    importBackupJson,
    resetStore,
  };
}
