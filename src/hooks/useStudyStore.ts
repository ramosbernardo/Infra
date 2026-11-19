import { useCallback, useEffect, useRef, useState } from 'react';
import {
  consumeAuthRedirect,
  fetchRemoteProgress,
  getValidSession,
  loadSession,
  pushRemoteProgress,
  sendMagicLink,
  signOut,
} from '../lib/cloudSync';
import { EDITAL_ITEM_MAP } from '../data/edital';
import {
  DiscursiveAttemptRecord,
  Question,
  QuizSessionRecord,
  SRSProgress,
  StudyStatus,
  UserStudyStore,
} from '../types/edital';

const STORAGE_KEY = 'infra_edital_study_store_v1';
const LEGACY_DISCURSIVE_DRAFTS_KEY = 'edital-infra-discursive-drafts-v1';
const CURRENT_SCHEMA_VERSION = 2;
const LOCAL_UPDATED_AT_KEY = 'infra_store_updated_at_v1';

export type CloudStatus = 'desconectado' | 'sincronizando' | 'sincronizado' | 'erro';

export interface CloudState {
  readonly status: CloudStatus;
  readonly email: string;
  readonly lastSyncAt: number | null;
  readonly message: string | null;
}

function readLocalUpdatedAt(): number {
  try {
    return Number(localStorage.getItem(LOCAL_UPDATED_AT_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeLocalUpdatedAt(v: number) {
  try {
    localStorage.setItem(LOCAL_UPDATED_AT_KEY, String(v));
  } catch {
    // ignora
  }
}

const DEFAULT_STORE: UserStudyStore = {
  schemaVersion: CURRENT_SCHEMA_VERSION,
  theme: 'dark',
  itemStatuses: {},
  itemNotes: {},
  srsProgress: {},
  quizHistory: [],
  customQuestions: [],
  discursiveDrafts: {},
  discursiveAttempts: [],
};

function sanitizeDiscursiveDrafts(rawDrafts: unknown): Record<string, string> {
  const validDrafts: Record<string, string> = {};
  if (!rawDrafts || typeof rawDrafts !== 'object') return validDrafts;
  for (const [key, value] of Object.entries(rawDrafts)) {
    if (typeof key === 'string' && key.trim() && typeof value === 'string') {
      validDrafts[key] = value;
    }
  }
  return validDrafts;
}

function sanitizeDiscursiveAttempts(rawAttempts: unknown): DiscursiveAttemptRecord[] {
  if (!Array.isArray(rawAttempts)) return [];
  return rawAttempts
    .filter(
      (a): a is DiscursiveAttemptRecord =>
        Boolean(a) &&
        typeof a.id === 'string' &&
        typeof a.caseId === 'string' &&
        typeof a.createdAt === 'number' &&
        Number.isFinite(a.createdAt) &&
        typeof a.draft === 'string' &&
        typeof a.lineCount === 'number' &&
        Number.isFinite(a.lineCount) &&
        Boolean(a.criterionScores) &&
        typeof a.criterionScores === 'object' &&
        typeof a.tecnicoScore === 'number' &&
        typeof a.normaScore === 'number' &&
        typeof a.totalScore === 'number'
    )
    .map((a) => {
      const cleanScores: Record<string, number> = {};
      for (const [k, v] of Object.entries(a.criterionScores)) {
        if (typeof k === 'string' && typeof v === 'number' && Number.isFinite(v) && v >= 0) {
          cleanScores[k] = v;
        }
      }
      return {
        ...a,
        criterionScores: cleanScores,
      };
    });
}

function loadLegacyDiscursiveDrafts(): Record<string, string> {
  try {
    const raw = localStorage.getItem(LEGACY_DISCURSIVE_DRAFTS_KEY);
    if (!raw) return {};
    return sanitizeDiscursiveDrafts(JSON.parse(raw));
  } catch {
    return {};
  }
}

function sanitizeStoreData(parsed: Partial<UserStudyStore>): UserStudyStore {
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
      parsed.srsProgress && typeof parsed.srsProgress === 'object' ? parsed.srsProgress : {},
    quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
    customQuestions: validCustomQuestions,
    discursiveDrafts: sanitizeDiscursiveDrafts(parsed.discursiveDrafts),
    discursiveAttempts: sanitizeDiscursiveAttempts(parsed.discursiveAttempts),
  };
}

function loadInitialStore(): UserStudyStore {
  const legacyDrafts = loadLegacyDiscursiveDrafts();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        ...DEFAULT_STORE,
        discursiveDrafts: legacyDrafts,
      };
    }
    const parsed = JSON.parse(raw) as Partial<UserStudyStore>;
    if (!parsed || typeof parsed !== 'object') {
      return {
        ...DEFAULT_STORE,
        discursiveDrafts: legacyDrafts,
      };
    }

    const base = sanitizeStoreData(parsed);
    const mergedDrafts: Record<string, string> = {
      ...legacyDrafts,
      ...base.discursiveDrafts,
    };

    return {
      ...base,
      discursiveDrafts: mergedDrafts,
    };
  } catch {
    return {
      ...DEFAULT_STORE,
      discursiveDrafts: legacyDrafts,
    };
  }
}

export type SrsRating = 'again' | 'hard' | 'good' | 'easy';

export function useStudyStore() {
  const [store, setStore] = useState<UserStudyStore>(() => loadInitialStore());

  // ---------- Sincronização na nuvem (Supabase) ----------
  const initialSession = loadSession();
  const [cloud, setCloud] = useState<CloudState>(() => ({
    status: initialSession ? 'sincronizando' : 'desconectado',
    email: initialSession?.email ?? '',
    lastSyncAt: null,
    message: null,
  }));
  const storeRef = useRef(store);
  storeRef.current = store;
  const localUpdatedAtRef = useRef<number>(readLocalUpdatedAt());
  const applyingRemoteRef = useRef(false);
  const firstPersistRef = useRef(true);
  const pushTimerRef = useRef<number | null>(null);
  const syncingRef = useRef(false);

  const pushNow = useCallback(async () => {
    if (pushTimerRef.current !== null) {
      window.clearTimeout(pushTimerRef.current);
      pushTimerRef.current = null;
    }
    try {
      const s = await getValidSession();
      if (!s) {
        setCloud((c) => ({ ...c, status: 'desconectado' }));
        return;
      }
      setCloud((c) => ({ ...c, status: 'sincronizando', email: s.email }));
      const stamp = localUpdatedAtRef.current || Date.now();
      await pushRemoteProgress(s, storeRef.current, CURRENT_SCHEMA_VERSION, stamp);
      setCloud({ status: 'sincronizado', email: s.email, lastSyncAt: Date.now(), message: null });
    } catch (e) {
      setCloud((c) => ({
        ...c,
        status: 'erro',
        message: `Falha ao enviar para a nuvem: ${(e as Error).message}. Seu progresso continua salvo neste aparelho.`,
      }));
    }
  }, []);

  const syncNow = useCallback(async () => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    try {
      const s = await getValidSession();
      if (!s) {
        setCloud((c) => ({ ...c, status: 'desconectado' }));
        return;
      }
      setCloud((c) => ({ ...c, status: 'sincronizando', email: s.email }));
      const remote = await fetchRemoteProgress(s);
      const local = localUpdatedAtRef.current;
      if (!remote) {
        if (!local) {
          localUpdatedAtRef.current = Date.now();
          writeLocalUpdatedAt(localUpdatedAtRef.current);
        }
        await pushRemoteProgress(s, storeRef.current, CURRENT_SCHEMA_VERSION, localUpdatedAtRef.current);
      } else if (remote.clientUpdatedAt > local) {
        if (remote.data && typeof remote.data === 'object') {
          applyingRemoteRef.current = true;
          setStore(sanitizeStoreData(remote.data as Partial<UserStudyStore>));
          localUpdatedAtRef.current = remote.clientUpdatedAt;
          writeLocalUpdatedAt(remote.clientUpdatedAt);
        }
      } else if (local > remote.clientUpdatedAt) {
        await pushRemoteProgress(s, storeRef.current, CURRENT_SCHEMA_VERSION, local);
      }
      setCloud({ status: 'sincronizado', email: s.email, lastSyncAt: Date.now(), message: null });
    } catch (e) {
      setCloud((c) => ({
        ...c,
        status: 'erro',
        message: `Falha na sincronização: ${(e as Error).message}. Seu progresso continua salvo neste aparelho.`,
      }));
    } finally {
      syncingRef.current = false;
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // Ignore quota errors cleanly
    }
    if (firstPersistRef.current) {
      firstPersistRef.current = false;
      return;
    }
    if (applyingRemoteRef.current) {
      applyingRemoteRef.current = false;
      return;
    }
    localUpdatedAtRef.current = Date.now();
    writeLocalUpdatedAt(localUpdatedAtRef.current);
    if (loadSession()) {
      if (pushTimerRef.current !== null) window.clearTimeout(pushTimerRef.current);
      pushTimerRef.current = window.setTimeout(() => {
        void pushNow();
      }, 2500);
    }
  }, [store, pushNow]);

  useEffect(() => {
    const { session, error } = consumeAuthRedirect();
    if (error) {
      setCloud((c) => ({ ...c, status: 'erro', message: `Login não concluído: ${error}` }));
    }
    if (session || loadSession()) {
      void syncNow();
    }
    const onVisibility = () => {
      if (!loadSession()) return;
      if (document.visibilityState === 'visible') {
        void syncNow();
      } else if (pushTimerRef.current !== null) {
        void pushNow();
      }
    };
    const onOnline = () => {
      if (loadSession()) void syncNow();
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('online', onOnline);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('online', onOnline);
    };
  }, [syncNow, pushNow]);

  const cloudSendLink = useCallback(async (email: string): Promise<{ ok: boolean; message: string }> => {
    const clean = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clean)) {
      return { ok: false, message: 'Informe um e-mail válido.' };
    }
    try {
      await sendMagicLink(clean);
      return {
        ok: true,
        message: `Link de acesso enviado para ${clean}. Abra o e-mail neste aparelho e clique no link.`,
      };
    } catch (e) {
      return { ok: false, message: `Não foi possível enviar o link: ${(e as Error).message}` };
    }
  }, []);

  const cloudSignOut = useCallback(async () => {
    await signOut();
    setCloud({ status: 'desconectado', email: '', lastSyncAt: null, message: null });
  }, []);

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
        nextIntervalDays =
          current.repetitions === 0 ? 1 : Math.max(1, Math.round(current.intervalDays * 1.2));
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

  const setDiscursiveDraft = useCallback((caseId: string, draft: string) => {
    if (!caseId) return;
    setStore((prev) => {
      const nextDrafts = { ...prev.discursiveDrafts };
      if (!draft) {
        delete nextDrafts[caseId];
      } else {
        nextDrafts[caseId] = draft;
      }
      return {
        ...prev,
        discursiveDrafts: nextDrafts,
      };
    });
  }, []);

  const recordDiscursiveAttempt = useCallback((attempt: DiscursiveAttemptRecord) => {
    setStore((prev) => ({
      ...prev,
      discursiveAttempts: [attempt, ...prev.discursiveAttempts].slice(0, 200),
    }));
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

      const nextStore = sanitizeStoreData(parsed);
      setStore(nextStore);

      return {
        ok: true,
        message: `Backup importado com sucesso (${Object.keys(nextStore.itemStatuses).length} itens marcados, ${nextStore.customQuestions.length} questões personalizadas, ${nextStore.discursiveAttempts.length} tentativas discursivas).`,
      };
    } catch {
      return { ok: false, message: 'Não foi possível ler o JSON. Verifique a sintaxe do arquivo.' };
    }
  }, []);

  const resetStore = useCallback(() => {
    try {
      localStorage.removeItem(LEGACY_DISCURSIVE_DRAFTS_KEY);
    } catch {
      // Ignore storage errors
    }
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
    setDiscursiveDraft,
    recordDiscursiveAttempt,
    exportBackupJson,
    importBackupJson,
    resetStore,
    cloud,
    cloudSendLink,
    cloudSyncNow: syncNow,
    cloudSignOut,
  };
}
