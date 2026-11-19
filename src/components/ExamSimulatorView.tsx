import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  FileText,
  Play,
  Plus,
  RotateCcw,
  Trash2,
  X,
  XCircle,
} from 'lucide-react';
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DISCURSIVE_CASES } from '../data/discursiveCases';
import {
  ALL_EDITAL_ITEMS,
  EDITAL_AXIS_MAP,
  EDITAL_ITEM_MAP,
  OFFICIAL_EDITAL,
} from '../data/edital';
import {
  DiscursiveCase,
  Question,
  QuizSessionRecord,
  SarahQuestionPattern,
} from '../types/edital';

interface ExamSimulatorViewProps {
  allQuestions: readonly Question[];
  presetItemId?: string | null;
  presetAxisId?: string | null;
  onClearPreset: () => void;
  onRecordSession: (session: QuizSessionRecord) => void;
  onAddCustomQuestion: (question: Question) => boolean;
  onOpenNotebook: (itemId: string) => void;
}

type SimulatorTab = 'objetiva' | 'discursiva';
type Stage = 'config' | 'running' | 'review';
type ScopeType = 'prova_real' | 'sarah_proporcional' | 'axis' | 'item';
type ExamMode = 'treino' | 'cronometrado';
type SarahSize = 16 | 32 | 48 | 50 | 60 | 80 | number;

const DISCURSIVE_DRAFTS_STORAGE_KEY = 'edital-infra-discursive-drafts-v1';
const OFFICIAL_SARAH_DURATION_SECONDS = 4 * 60 * 60; // 4 horas (60 questões)
const REAL_EXAM_WARNING_SECONDS = 30 * 60; // Aviso quando faltarem 30 minutos
const REAL_EXAM_QUESTIONS_COUNT = 60;

const PATTERN_LABELS: Record<SarahQuestionPattern, string> = {
  cenario: 'Cenário / Cálculo',
  afirmativas: 'Afirmativas (I–IV)',
  vf: 'Verdadeiro / Falso',
  colunas: 'Associação de Colunas',
  negativa: 'Comando Negativo',
  lacunas: 'Lacunas',
};

function getEffectivePattern(q: Question): SarahQuestionPattern {
  return q.questionPattern ?? 'cenario';
}

function formatSeconds(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function shuffleArray<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleQuestionOptions(q: Question): Question {
  const indices = shuffleArray([0, 1, 2, 3]);
  const newOptions = indices.map((oldIdx) => q.options[oldIdx] ?? '');
  const newCorrectIndex = indices.indexOf(q.correctIndex);
  const newOptionErrors: Record<number, string> = {};

  indices.forEach((oldIdx, newIdx) => {
    if (newIdx !== newCorrectIndex) {
      const err = q.optionErrors?.[oldIdx];
      if (err) {
        newOptionErrors[newIdx] = err;
      }
    }
  });

  return {
    ...q,
    options: newOptions,
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : q.correctIndex,
    optionErrors: q.optionErrors ? newOptionErrors : undefined,
  };
}

function buildProportionalSarahExam(
  pool: readonly Question[],
  totalCount: number
): Question[] {
  if (pool.length === 0 || totalCount <= 0) return [];

  const target = Math.min(totalCount, pool.length);
  const picked: Question[] = [];
  const usedIds = new Set<string>();
  const axisShuffledMap = new Map<string, Question[]>();

  for (const axis of OFFICIAL_EDITAL.axes) {
    const axisQuestions = shuffleArray(
      pool.filter((q) => EDITAL_ITEM_MAP[q.editalItemId]?.axisId === axis.id)
    );
    axisShuffledMap.set(axis.id, axisQuestions);
  }

  // Cálculo de cotas proporcionais ao peso de cada eixo (número de itens no edital)
  const getAxisItemCount = (ax: (typeof OFFICIAL_EDITAL.axes)[number]) =>
    ax.sections.reduce((acc, s) => acc + s.items.length, 0);
  const totalItems = OFFICIAL_EDITAL.axes.reduce((acc, ax) => acc + getAxisItemCount(ax), 0);
  const quotas = new Map<string, number>();

  if (target >= OFFICIAL_EDITAL.axes.length) {
    // Garante pelo menos 1 questão por eixo quando disponível e distribui o restante proporcionalmente
    const remainingTarget = target - OFFICIAL_EDITAL.axes.length;
    const rawRemainders: Array<{ axisId: string; rem: number }> = [];
    let allocated = 0;

    for (const axis of OFFICIAL_EDITAL.axes) {
      const avail = axisShuffledMap.get(axis.id)?.length ?? 0;
      const base = avail > 0 ? 1 : 0;
      const extraExact = (getAxisItemCount(axis) / (totalItems || 1)) * remainingTarget;
      const extraFloor = Math.floor(extraExact);
      const qCount = Math.min(avail, base + extraFloor);
      quotas.set(axis.id, qCount);
      allocated += qCount;
      rawRemainders.push({ axisId: axis.id, rem: extraExact - extraFloor });
    }

    rawRemainders.sort((a, b) => b.rem - a.rem);
    let left = target - allocated;
    for (const entry of rawRemainders) {
      if (left <= 0) break;
      const cur = quotas.get(entry.axisId) ?? 0;
      const avail = axisShuffledMap.get(entry.axisId)?.length ?? 0;
      if (cur < avail) {
        quotas.set(entry.axisId, cur + 1);
        left -= 1;
      }
    }
  } else {
    for (const axis of OFFICIAL_EDITAL.axes) {
      quotas.set(axis.id, Math.floor((getAxisItemCount(axis) / (totalItems || 1)) * target));
    }
  }

  for (const axis of OFFICIAL_EDITAL.axes) {
    const axisQuestions = axisShuffledMap.get(axis.id) ?? [];
    const take = axisQuestions.slice(0, quotas.get(axis.id) ?? 0);
    for (const q of take) {
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  // Completa até target usando o restante do pool filtrado se algum eixo tiver poucas questões no filtro
  if (picked.length < target) {
    const remaining = shuffleArray(pool.filter((q) => !usedIds.has(q.id)));
    for (const q of remaining) {
      if (picked.length >= target) break;
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  // Reordena seguindo a ordem oficial dos eixos (1 a 16)
  const axisOrder = new Map<string, number>(
    OFFICIAL_EDITAL.axes.map((a, index) => [a.id, index])
  );
  return picked.sort((a, b) => {
    const axA = axisOrder.get(EDITAL_ITEM_MAP[a.editalItemId]?.axisId ?? '') ?? 99;
    const axB = axisOrder.get(EDITAL_ITEM_MAP[b.editalItemId]?.axisId ?? '') ?? 99;
    return axA - axB;
  });
}

function estimateDiscursiveLines(text: string): number {
  if (!text.trim()) return 0;
  const rawLines = text.split('\n');
  return rawLines.reduce((sum, line) => {
    const chars = line.length;
    return sum + Math.max(1, Math.ceil(chars / 92));
  }, 0);
}

function loadDiscursiveDrafts(): Record<string, string> {
  try {
    const raw = window.localStorage.getItem(DISCURSIVE_DRAFTS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return parsed as Record<string, string>;
    }
    return {};
  } catch {
    return {};
  }
}

function renderInlineFormatted(text: string): ReactNode[] {
  const tokenRegex = /(__[^_]+__|\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = text.split(tokenRegex);
  return parts.map((part, idx) => {
    if (part.startsWith('__') && part.endsWith('__') && part.length > 4) {
      return (
        <span
          key={idx}
          className="underline decoration-2 underline-offset-3 font-semibold text-slate-950 dark:text-white"
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong
          key={idx}
          className="font-semibold text-slate-950 dark:text-white"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[0.88em] text-sky-700 dark:text-sky-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

function SarahStatementRenderer({
  statement,
  prefix,
  compact = false,
}: {
  statement: string;
  prefix?: string;
  compact?: boolean;
}) {
  const leftMarker = 'Coluna da Esquerda:';
  const rightMarker = 'Coluna da Direita:';
  const hasColumns =
    statement.includes(leftMarker) && statement.includes(rightMarker);

  const baseTextClass = compact
    ? 'text-sm leading-relaxed text-slate-900 dark:text-slate-100'
    : 'text-base leading-relaxed text-slate-900 dark:text-slate-100';

  if (hasColumns) {
    const leftIdx = statement.indexOf(leftMarker);
    const rightIdx = statement.indexOf(rightMarker);
    const intro = statement.slice(0, leftIdx).trim();
    const leftBlock = statement
      .slice(leftIdx + leftMarker.length, rightIdx)
      .trim();
    const afterRight = statement.slice(rightIdx + rightMarker.length).trim();
    const afterParts = afterRight.split(/\n\n+/);
    const rightBlock = (afterParts[0] ?? '').trim();
    const footer = afterParts.slice(1).join('\n\n').trim();

    const leftLines = leftBlock
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const rightLines = rightBlock
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    return (
      <div className={`space-y-3.5 ${baseTextClass}`}>
        {intro && (
          <p className="font-medium">
            {prefix && (
              <span className="font-mono text-slate-400 mr-2">{prefix}</span>
            )}
            {renderInlineFormatted(intro)}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-3.5 space-y-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              Coluna da Esquerda
            </div>
            <ul className="space-y-1.5 text-slate-800 dark:text-slate-200">
              {leftLines.map((line, i) => (
                <li key={i} className="leading-snug">
                  {renderInlineFormatted(line)}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-3.5 space-y-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              Coluna da Direita
            </div>
            <ul className="space-y-1.5 text-slate-800 dark:text-slate-200">
              {rightLines.map((line, i) => (
                <li key={i} className="leading-snug">
                  {renderInlineFormatted(line)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {footer && (
          <p className="font-medium text-slate-800 dark:text-slate-200">
            {renderInlineFormatted(footer)}
          </p>
        )}
      </div>
    );
  }

  const paragraphs = statement.split(/\n\n+/);

  return (
    <div className={`space-y-3 ${baseTextClass}`}>
      {paragraphs.map((paragraph, pIdx) => {
        const lines = paragraph
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);

        const isVfBlock =
          lines.length > 0 && lines.every((l) => /^\(\s*\)\s+/.test(l));
        const isRomanBlock =
          lines.length > 0 &&
          lines.every((l) => /^(I|II|III|IV|V)\.\s+/.test(l));

        if (isVfBlock) {
          return (
            <div
              key={pIdx}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 p-3.5 space-y-2 text-xs sm:text-sm"
            >
              {lines.map((line, lIdx) => {
                const body = line.replace(/^\(\s*\)\s+/, '');
                return (
                  <div key={lIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="font-mono font-semibold text-slate-500 dark:text-slate-400 shrink-0 select-none">
                      ( &nbsp; )
                    </span>
                    <span className="text-slate-800 dark:text-slate-200">
                      {renderInlineFormatted(body)}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }

        if (isRomanBlock) {
          return (
            <div
              key={pIdx}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 p-3.5 space-y-2 text-xs sm:text-sm"
            >
              {lines.map((line, lIdx) => {
                const match = line.match(/^(I|II|III|IV|V)\.\s+(.*)$/);
                const numeral = match ? `${match[1]}.` : '';
                const body = match ? match[2] : line;
                return (
                  <div key={lIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="font-mono font-semibold text-sky-700 dark:text-sky-400 w-7 shrink-0">
                      {numeral}
                    </span>
                    <span className="text-slate-800 dark:text-slate-200">
                      {renderInlineFormatted(body)}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }

        return (
          <p key={pIdx} className="font-medium">
            {pIdx === 0 && prefix && (
              <span className="font-mono text-slate-400 mr-2">{prefix}</span>
            )}
            {lines.map((line, lIdx) => (
              <span key={lIdx}>
                {lIdx > 0 && <br />}
                {renderInlineFormatted(line)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export function ExamSimulatorView({
  allQuestions,
  presetItemId,
  presetAxisId,
  onClearPreset,
  onRecordSession,
  onAddCustomQuestion,
  onOpenNotebook,
}: ExamSimulatorViewProps) {
  const [simulatorTab, setSimulatorTab] = useState<SimulatorTab>('objetiva');
  const [stage, setStage] = useState<Stage>('config');
  const [scopeType, setScopeType] = useState<ScopeType>('sarah_proporcional');
  const [sarahSize, setSarahSize] = useState<SarahSize>(50);
  const [patternFilter, setPatternFilter] = useState<'all' | SarahQuestionPattern>('all');
  const [selectedAxisId, setSelectedAxisId] = useState<string>('1');
  const [selectedItemId, setSelectedItemId] = useState<string>('1.1.1');
  const [fillItemToTen, setFillItemToTen] = useState<boolean>(true);
  const [examMode, setExamMode] = useState<ExamMode>('cronometrado');

  // Estado da sessão objetiva ativa
  const [activeQuestions, setActiveQuestions] = useState<readonly Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong'>('all');
  const [scopeLabel, setScopeLabel] = useState('Simulado Padrão SARAH (60 questões)');
  const [isOfficialTimed4h, setIsOfficialTimed4h] = useState<boolean>(false);
  const [isRealExamMode, setIsRealExamMode] = useState<boolean>(false);
  const [dismissed30MinWarning, setDismissed30MinWarning] = useState<boolean>(false);
  const hasAutoFinishedRef = useRef<boolean>(false);

  // Estado da Prova Discursiva (30 linhas · A-D)
  const [selectedCaseId, setSelectedCaseId] = useState<string>(
    DISCURSIVE_CASES[0]?.id ?? ''
  );
  const [discursiveDrafts, setDiscursiveDrafts] = useState<Record<string, string>>(
    () => loadDiscursiveDrafts()
  );
  const [showOfficialRubric, setShowOfficialRubric] = useState<boolean>(false);

  // Modal de nova questão (4 alternativas A-D padrão Rede SARAH)
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItemId, setNewItemId] = useState('1.1.1');
  const [newPattern, setNewPattern] = useState<SarahQuestionPattern>('cenario');
  const [newDifficulty, setNewDifficulty] = useState<'Basica' | 'Intermediaria' | 'Avancada'>('Intermediaria');
  const [newStatement, setNewStatement] = useState('');
  const [newOptions, setNewOptions] = useState<[string, string, string, string]>(['', '', '', '']);
  const [newCorrectIndex, setNewCorrectIndex] = useState(0);
  const [newCorrectAnalysis, setNewCorrectAnalysis] = useState('');
  const [newOptionErrors, setNewOptionErrors] = useState<[string, string, string, string]>(['', '', '', '']);
  const [addError, setAddError] = useState('');

  useEffect(() => {
    if (presetItemId && EDITAL_ITEM_MAP[presetItemId]) {
      setSimulatorTab('objetiva');
      setScopeType('item');
      setSelectedItemId(presetItemId);
      setSelectedAxisId(EDITAL_ITEM_MAP[presetItemId].axisId);
      setPatternFilter('all');
      setExamMode('treino');
      setStage('config');
      onClearPreset();
    } else if (presetAxisId && EDITAL_AXIS_MAP[presetAxisId]) {
      setSimulatorTab('objetiva');
      setScopeType('axis');
      setSelectedAxisId(presetAxisId);
      setPatternFilter('all');
      setStage('config');
      onClearPreset();
    }
  }, [presetItemId, presetAxisId, onClearPreset]);

  useEffect(() => {
    if (stage !== 'running') return;
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [stage]);

  useEffect(() => {
    if (!showAddModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowAddModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAddModal]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        DISCURSIVE_DRAFTS_STORAGE_KEY,
        JSON.stringify(discursiveDrafts)
      );
    } catch {
      // Ignora erro de quota de armazenamento
    }
  }, [discursiveDrafts]);

  const patternFilteredQuestions = useMemo(() => {
    const valid = allQuestions.filter((q) => Boolean(EDITAL_ITEM_MAP[q.editalItemId]));
    if (patternFilter === 'all') return valid;
    return valid.filter((q) => getEffectivePattern(q) === patternFilter);
  }, [allQuestions, patternFilter]);

  const matchingPool = useMemo(() => {
    if (scopeType === 'sarah_proporcional') {
      return patternFilteredQuestions;
    }
    return patternFilteredQuestions.filter((q) => {
      const item = EDITAL_ITEM_MAP[q.editalItemId];
      if (!item) return false;
      if (scopeType === 'axis' && item.axisId !== selectedAxisId) return false;
      if (scopeType === 'item' && q.editalItemId !== selectedItemId) return false;
      return true;
    });
  }, [patternFilteredQuestions, scopeType, selectedAxisId, selectedItemId]);

  const itemAxisPool = useMemo(() => {
    const targetAxisId = EDITAL_ITEM_MAP[selectedItemId]?.axisId;
    if (!targetAxisId) return [] as Question[];
    return patternFilteredQuestions.filter((q) => {
      const item = EDITAL_ITEM_MAP[q.editalItemId];
      return item?.axisId === targetAxisId && q.editalItemId !== selectedItemId;
    });
  }, [patternFilteredQuestions, selectedItemId]);

  const effectiveItemCount = useMemo(() => {
    if (scopeType !== 'item') return matchingPool.length;
    if (!fillItemToTen || matchingPool.length >= 10) return matchingPool.length;
    return Math.min(10, matchingPool.length + itemAxisPool.length);
  }, [scopeType, fillItemToTen, matchingPool.length, itemAxisPool.length]);

  const effectiveProportionalCount = useMemo(() => {
    if (scopeType !== 'sarah_proporcional') return 0;
    return Math.min(sarahSize, matchingPool.length);
  }, [scopeType, sarahSize, matchingPool.length]);

  const startExam = () => {
    let picked: Question[];
    let label: string;
    const filterSuffix =
      patternFilter !== 'all' ? ` · Formato: ${PATTERN_LABELS[patternFilter]}` : '';

    if (scopeType === 'prova_real') {
      const validPool = allQuestions.filter((q) => Boolean(EDITAL_ITEM_MAP[q.editalItemId]));
      if (validPool.length === 0) return;
      picked = buildProportionalSarahExam(validPool, REAL_EXAM_QUESTIONS_COUNT);
      label = `Prova Real (${picked.length} questões · 4h regressivo · 0–100 pts)`;
      setExamMode('cronometrado');
      setIsOfficialTimed4h(true);
      setIsRealExamMode(true);
    } else if (scopeType === 'sarah_proporcional') {
      if (matchingPool.length === 0) return;
      picked = buildProportionalSarahExam(matchingPool, sarahSize);
      if (sarahSize === 50 && patternFilter === 'all') {
        label = `Simulado Padrão (${picked.length} questões · 16 Eixos · ref. 4h)`;
      } else {
        label = `Simulado Padrão (${picked.length} questões · 16 Eixos${filterSuffix})`;
      }
      setIsOfficialTimed4h(sarahSize === 50 && examMode === 'cronometrado');
      setIsRealExamMode(false);
    } else if (scopeType === 'axis') {
      if (matchingPool.length === 0) return;
      picked = shuffleArray(matchingPool);
      label = `Eixo ${EDITAL_AXIS_MAP[selectedAxisId]?.literalTitle ?? ''}${filterSuffix}`;
      setIsOfficialTimed4h(false);
      setIsRealExamMode(false);
    } else {
      const direct = shuffleArray(matchingPool);
      if (fillItemToTen && direct.length < 10) {
        const needed = 10 - direct.length;
        const extras = shuffleArray(itemAxisPool).slice(0, needed);
        picked = [...direct, ...extras];
      } else {
        picked = direct;
      }
      const it = EDITAL_ITEM_MAP[selectedItemId];
      label = `Item ${it ? `${it.id} ${it.literalText}` : selectedItemId}${filterSuffix}`;
      setIsOfficialTimed4h(false);
      setIsRealExamMode(false);
    }

    if (picked.length === 0) return;

    const shuffledExam = picked.map(shuffleQuestionOptions);

    hasAutoFinishedRef.current = false;
    setDismissed30MinWarning(false);
    setScopeLabel(label);
    setActiveQuestions(shuffledExam);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setElapsedSeconds(0);
    setReviewFilter('all');
    setStage('running');
  };

  const finishExam = useCallback(() => {
    const answers = activeQuestions.map((q) => {
      const selected =
        typeof selectedAnswers[q.id] === 'number' ? selectedAnswers[q.id] : null;
      return {
        questionId: q.id,
        editalItemId: q.editalItemId,
        selectedIndex: selected,
        isCorrect: selected === q.correctIndex,
      };
    });

    const correctCount = answers.filter((a) => a.isCorrect).length;

    onRecordSession({
      id: `sim-${Date.now()}`,
      createdAt: Date.now(),
      durationSeconds: isRealExamMode
        ? Math.min(elapsedSeconds, OFFICIAL_SARAH_DURATION_SECONDS)
        : elapsedSeconds,
      scopeLabel,
      modeLabel: isRealExamMode
        ? 'Prova real (0–100)'
        : examMode === 'treino'
        ? 'Treino'
        : 'Simulado',
      totalQuestions: activeQuestions.length,
      correctCount,
      answers,
    });

    setStage('review');
  }, [activeQuestions, selectedAnswers, isRealExamMode, elapsedSeconds, scopeLabel, examMode, onRecordSession]);

  useEffect(() => {
    if (
      stage === 'running' &&
      isRealExamMode &&
      elapsedSeconds >= OFFICIAL_SARAH_DURATION_SECONDS &&
      !hasAutoFinishedRef.current
    ) {
      hasAutoFinishedRef.current = true;
      finishExam();
    }
  }, [stage, isRealExamMode, elapsedSeconds, finishExam]);

  const handleSaveNewQuestion = () => {
    setAddError('');
    const editalItem = EDITAL_ITEM_MAP[newItemId];
    if (!editalItem) {
      setAddError('Selecione um item válido do edital oficial.');
      return;
    }
    if (!newStatement.trim()) {
      setAddError('Informe o enunciado técnico da questão.');
      return;
    }
    const cleanOpts = newOptions.map((o) => o.trim());
    if (cleanOpts.some((o) => !o)) {
      setAddError('No padrão Rede SARAH, todas as 4 alternativas (A, B, C, D) são obrigatórias.');
      return;
    }
    if (!newCorrectAnalysis.trim()) {
      setAddError('Informe a justificativa técnica da alternativa correta.');
      return;
    }

    const errorsMap: Record<number, string> = {};
    for (let i = 0; i < 4; i++) {
      if (i !== newCorrectIndex) {
        errorsMap[i] =
          newOptionErrors[i]?.trim() ||
          'Incorreta: contraria o comportamento técnico especificado no item do edital.';
      }
    }

    const ok = onAddCustomQuestion({
      id: `sarah-custom-${Date.now()}`,
      editalItemId: newItemId,
      format: 'multipla_escolha',
      questionPattern: newPattern,
      difficulty: newDifficulty,
      boardStyle: 'Banca Própria Rede SARAH (Autoral)',
      statement: newStatement.trim(),
      options: [cleanOpts[0], cleanOpts[1], cleanOpts[2], cleanOpts[3]],
      correctIndex: newCorrectIndex,
      explanation: `Item ${editalItem.id} — ${editalItem.literalText}. ${newCorrectAnalysis.trim()}`,
      correctAnalysis: newCorrectAnalysis.trim(),
      optionErrors: errorsMap,
      isCustom: true,
    });

    if (ok) {
      setNewStatement('');
      setNewOptions(['', '', '', '']);
      setNewCorrectAnalysis('');
      setNewOptionErrors(['', '', '', '']);
      setShowAddModal(false);
    }
  };

  const currentQ = activeQuestions[currentIdx];

  const activeCase: DiscursiveCase = useMemo(() => {
    return (
      DISCURSIVE_CASES.find((c) => c.id === selectedCaseId) ?? DISCURSIVE_CASES[0]
    );
  }, [selectedCaseId]);

  const activeDraft = discursiveDrafts[activeCase.id] ?? '';
  const activeDraftLines = useMemo(
    () => estimateDiscursiveLines(activeDraft),
    [activeDraft]
  );

  const renderSarahCommentary = (q: Question) => {
    const editalItem = EDITAL_ITEM_MAP[q.editalItemId];
    const correctLetter = String.fromCharCode(65 + q.correctIndex);

    return (
      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            Item do Edital:
          </span>{' '}
          <span className="font-mono text-sky-600 dark:text-sky-400">
            {q.editalItemId}
          </span>{' '}
          — {editalItem?.literalText}
        </div>

        <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            Alternativa {correctLetter} (Correta):
          </span>{' '}
          {q.correctAnalysis ?? q.explanation}
        </div>

        {q.optionErrors && (
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Análise técnica das alternativas incorretas:
            </div>
            {[0, 1, 2, 3].map((idx) => {
              if (idx === q.correctIndex) return null;
              const errMsg = q.optionErrors?.[idx];
              if (!errMsg) return null;
              const letter = String.fromCharCode(65 + idx);
              return (
                <div
                  key={idx}
                  className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  <span className="font-mono font-semibold text-rose-600 dark:text-rose-400">
                    {letter})
                  </span>{' '}
                  {errMsg}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Seletor entre Prova Objetiva (A–D) e Prova Discursiva (30 linhas · A–D) */}
      {stage !== 'running' && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="inline-flex items-center p-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setSimulatorTab('objetiva')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors ${
                simulatorTab === 'objetiva'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Prova Objetiva (A–D)
            </button>
            <button
              type="button"
              onClick={() => setSimulatorTab('discursiva')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors ${
                simulatorTab === 'discursiva'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Prova Discursiva (30 linhas · A–D)
            </button>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            Estrutura espelhada nas provas oficiais da Banca Própria Rede SARAH
          </div>
        </div>
      )}

      {/* ==================== PROVA DISCURSIVA (30 LINHAS · A–D) ==================== */}
      {simulatorTab === 'discursiva' && stage !== 'running' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Lista dos 8 Estudos de Caso */}
          <aside className="lg:col-span-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <p className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Caderno Discursivo SARAH
              </p>
              <h2 className="font-display text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                Estudos de Caso ({DISCURSIVE_CASES.length})
              </h2>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {DISCURSIVE_CASES.map((c, idx) => {
                const isSelected = c.id === activeCase.id;
                const hasDraft = Boolean(discursiveDrafts[c.id]?.trim());
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setSelectedCaseId(c.id);
                      setShowOfficialRubric(false);
                    }}
                    className={`w-full text-left px-5 py-3.5 transition-colors space-y-1.5 ${
                      isSelected
                        ? 'bg-sky-50/80 dark:bg-sky-950/40 border-l-2 border-l-sky-600'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold text-sky-700 dark:text-sky-400">
                        Caso {String(idx + 1).padStart(2, '0')} · Eixo {c.axisNumber}
                      </span>
                      {hasDraft && (
                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                          Rascunho salvo
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                      {c.title}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {c.editalItemIds.map((id) => (
                        <span
                          key={id}
                          className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                        >
                          {id}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Área de Resolução Discursiva + Espelho de Correção */}
          <section className="lg:col-span-8 space-y-6">
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-mono text-sky-600 dark:text-sky-400">
                    Banca Própria Rede SARAH · Máximo de {activeCase.maxLines} linhas · Subitens A–D
                  </p>
                  <h1 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {activeCase.title}
                  </h1>
                </div>
              </div>

              {/* Vínculo literal ao Edital */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 space-y-1.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Itens exatos do Edital cobrados neste caso
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {activeCase.editalItemIds.map((itemId) => {
                    const item = EDITAL_ITEM_MAP[itemId];
                    return (
                      <button
                        key={itemId}
                        type="button"
                        onClick={() => onOpenNotebook(itemId)}
                        className="text-left text-xs px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-400 dark:hover:border-sky-600 transition-colors flex items-start justify-between gap-2"
                      >
                        <span className="text-slate-700 dark:text-slate-300 leading-snug">
                          <span className="font-mono font-semibold text-sky-600 dark:text-sky-400 mr-1">
                            {itemId}
                          </span>
                          {item?.literalText}
                        </span>
                        <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Caso Clínico/Operacional Hospitalar */}
              <div className="space-y-3">
                <p className="text-sm sm:text-base leading-relaxed text-slate-900 dark:text-slate-100">
                  {activeCase.scenario}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {activeCase.commandText}
                </p>
              </div>

              {/* Comandos A, B, C, D */}
              <div className="space-y-2.5">
                {activeCase.subtasks.map((sub) => (
                  <div
                    key={sub.letter}
                    className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="font-mono font-bold text-sky-700 dark:text-sky-400 shrink-0">
                      {sub.letter})
                    </span>
                    <span>{sub.prompt}</span>
                  </div>
                ))}
              </div>

              {/* Folha de Resposta Simulada (30 linhas) */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label
                    htmlFor="sarah-discursive-textarea"
                    className="text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Folha de Rascunho Discursivo (salva automaticamente)
                  </label>
                  <span
                    className={`font-mono text-xs font-semibold tabular-nums ${
                      activeDraftLines > activeCase.maxLines
                        ? 'text-rose-600 dark:text-rose-400'
                        : activeDraftLines >= 27
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {activeDraftLines} / {activeCase.maxLines} linhas estimadas
                  </span>
                </div>

                <textarea
                  id="sarah-discursive-textarea"
                  rows={14}
                  value={activeDraft}
                  onChange={(e) =>
                    setDiscursiveDrafts((prev) => ({
                      ...prev,
                      [activeCase.id]: e.target.value,
                    }))
                  }
                  placeholder="Estruture sua resposta dissertativa contemplando objetivamente os subitens A, B, C e D em até 30 linhas..."
                  className="w-full p-4 text-sm leading-relaxed rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 font-sans"
                />

                {activeDraftLines > activeCase.maxLines && (
                  <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    Atenção: seu rascunho ultrapassou o limite oficial de {activeCase.maxLines} linhas da folha definitiva Rede SARAH.
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    disabled={!activeDraft}
                    onClick={() =>
                      setDiscursiveDrafts((prev) => {
                        const next = { ...prev };
                        delete next[activeCase.id];
                        return next;
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Limpar rascunho
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowOfficialRubric((v) => !v)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                  >
                    {showOfficialRubric ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        Ocultar Espelho Oficial de Correção
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        Exibir Espelho Oficial de Correção (A–D)
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Espelho Oficial de Correção (A-D) */}
            {showOfficialRubric && (
              <div className="border border-emerald-200 dark:border-emerald-900/70 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-4">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Critérios Esperados pela Banca
                  </p>
                  <h2 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
                    Espelho Oficial de Correção — Subitens A a D
                  </h2>
                </div>

                <div className="space-y-4">
                  {activeCase.subtasks.map((sub) => (
                    <div
                      key={sub.letter}
                      className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 space-y-2.5"
                    >
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 mr-1.5">
                          Item {sub.letter})
                        </span>
                        {sub.prompt}
                      </div>

                      <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                        {sub.expectedAnswer}
                      </p>

                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                        <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                          Pontos-chave pontuáveis na grade:
                        </div>
                        <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                          {sub.keyPoints.map((kp, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{kp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* ==================== CONFIGURADOR DA PROVA OBJETIVA ==================== */}
      {simulatorTab === 'objetiva' && stage === 'config' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Configurador do Simulado Padrão SARAH */}
          <section className="lg:col-span-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-sky-600 dark:text-sky-400">
                  Banca Própria da Rede SARAH · 4 Alternativas (A–D) · 6 Formatos Reais
                </p>
                <h1 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  Configurar Simulado e Treino
                </h1>
              </div>
              <button
                type="button"
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
              >
                <Plus className="w-4 h-4" />
                Adicionar Questão SARAH
              </button>
            </div>

            <div className="space-y-4">
              {/* Modo de Abrangência */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Modalidade e abrangência no edital
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setScopeType('prova_real');
                      setExamMode('cronometrado');
                    }}
                    className={`p-3.5 rounded-lg border text-left transition-colors ${
                      scopeType === 'prova_real'
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-200'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Prova real</div>
                    <div className="text-xs opacity-80 mt-0.5">
                      60q · 4h regressivo · nota 0–100
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScopeType('sarah_proporcional')}
                    className={`p-3.5 rounded-lg border text-left transition-colors ${
                      scopeType === 'sarah_proporcional'
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-200'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Simulado Proporcional</div>
                    <div className="text-xs opacity-80 mt-0.5">
                      16 a {allQuestions.length} questões (16 eixos)
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScopeType('axis')}
                    className={`p-3.5 rounded-lg border text-left transition-colors ${
                      scopeType === 'axis'
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-200'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Por Eixo do Edital</div>
                    <div className="text-xs opacity-80 mt-0.5">
                      Foco em 1 dos 16 eixos oficiais
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScopeType('item')}
                    className={`p-3.5 rounded-lg border text-left transition-colors ${
                      scopeType === 'item'
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-200'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Tópico Exato</div>
                    <div className="text-xs opacity-80 mt-0.5">
                      Item específico do edital
                    </div>
                  </button>
                </div>
              </div>

              {scopeType === 'prova_real' && (
                <div className="rounded-lg border border-sky-200 dark:border-sky-900/70 bg-sky-50/70 dark:bg-sky-950/30 p-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="font-semibold text-sky-900 dark:text-sky-200">
                    Regras do modo Prova real (Edital nº 13/2026)
                  </div>
                  <p>
                    60 questões objetivas sorteadas proporcionalmente ao peso de cada um dos 16 eixos, cronômetro regressivo de <strong>04:00:00</strong>, aviso automático ao atingir os <strong>30 minutos finais</strong>, gabarito bloqueado até o término e nota final convertida para a escala de <strong>0 a 100 pontos</strong>.
                  </p>
                </div>
              )}

              {scopeType === 'sarah_proporcional' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Extensão do Simulado Padrão
                    </label>
                    <select
                      value={sarahSize}
                      onChange={(e) => setSarahSize(Number(e.target.value) as SarahSize)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value={60}>60 questões (proporcional ao peso dos 16 eixos · 4h)</option>
                      <option value={50}>50 questões (proporcional ao peso dos 16 eixos · 4h)</option>
                      <option value={allQuestions.length}>
                        {allQuestions.length} questões (banco completo · proporcional aos 16 eixos)
                      </option>
                      <option value={80}>80 questões (proporcional ao peso dos 16 eixos)</option>
                      <option value={48}>48 questões (proporcional ao peso dos 16 eixos)</option>
                      <option value={32}>32 questões (proporcional ao peso dos 16 eixos)</option>
                      <option value={16}>16 questões (1 por assunto · revisão rápida)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Modo de aplicação
                    </label>
                    <select
                      value={examMode}
                      onChange={(e) => setExamMode(e.target.value as ExamMode)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="cronometrado">Prova (gabarito + relatório ao final)</option>
                      <option value="treino">Treino (gabarito comentado imediato)</option>
                    </select>
                  </div>
                </div>
              )}

              {scopeType === 'axis' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Eixo oficial (1 a 16)
                    </label>
                    <select
                      value={selectedAxisId}
                      onChange={(e) => setSelectedAxisId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {OFFICIAL_EDITAL.axes.map((ax) => (
                        <option key={ax.id} value={ax.id}>
                          {ax.literalTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Modo de aplicação
                    </label>
                    <select
                      value={examMode}
                      onChange={(e) => setExamMode(e.target.value as ExamMode)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                    >
                      <option value="treino">Treino (gabarito imediato)</option>
                      <option value="cronometrado">Prova (gabarito ao final)</option>
                    </select>
                  </div>
                </div>
              )}

              {scopeType === 'item' && (
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Item exato do edital
                      </label>
                      <select
                        value={selectedItemId}
                        onChange={(e) => setSelectedItemId(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        {ALL_EDITAL_ITEMS.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.id} — {item.literalText}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Modo de aplicação
                      </label>
                      <select
                        value={examMode}
                        onChange={(e) => setExamMode(e.target.value as ExamMode)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                      >
                        <option value="treino">Treino (gabarito imediato)</option>
                        <option value="cronometrado">Prova (gabarito ao final)</option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={fillItemToTen}
                      onChange={(e) => setFillItemToTen(e.target.checked)}
                      className="rounded border-slate-300 dark:border-slate-700 text-sky-600 focus:ring-sky-500"
                    />
                    <span>
                      Completar até no mínimo 10 questões usando outros itens do mesmo assunto ({EDITAL_AXIS_MAP[EDITAL_ITEM_MAP[selectedItemId]?.axisId ?? '']?.literalTitle})
                    </span>
                  </label>
                </div>
              )}

              {/* Filtro por Tipologia Real de Questão Rede SARAH */}
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Tipologia de questão da banca (opcional)
                </label>
                <select
                  value={patternFilter}
                  onChange={(e) =>
                    setPatternFilter(e.target.value as 'all' | SarahQuestionPattern)
                  }
                  className="w-full sm:w-80 px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="all">Todos os formatos SARAH (prova balanceada)</option>
                  <option value="afirmativas">Afirmativas (I, II, III, IV)</option>
                  <option value="vf">Verdadeiro / Falso (( ) V – F)</option>
                  <option value="colunas">Associação de Colunas ((I)–(V) x (A)–(E))</option>
                  <option value="negativa">Comando Negativo (__não__ / __exceto__)</option>
                  <option value="lacunas">Preenchimento de Lacunas</option>
                  <option value="cenario">Cenário Operacional / Cálculo</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-sm text-slate-600 dark:text-slate-400 tabular-nums">
                {scopeType === 'prova_real' ? (
                  <>
                    Caderno oficial:{' '}
                    <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                      {Math.min(REAL_EXAM_QUESTIONS_COUNT, allQuestions.length)} questões
                    </span>{' '}
                    (proporcional aos 16 eixos · 04:00:00 regressivo · 0–100 pts)
                  </>
                ) : scopeType === 'sarah_proporcional' ? (
                  patternFilter === 'all' ? (
                    sarahSize === 50 ? (
                      <>
                        Caderno selecionado:{' '}
                        <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                          50 questões
                        </span>{' '}
                        (distribuição proporcional ao peso dos 16 eixos · ref. 4h00)
                      </>
                    ) : (
                      <>
                        Distribuição proporcional:{' '}
                        <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                          {sarahSize} questões
                        </span>{' '}
                        (conforme peso dos 16 eixos do edital)
                      </>
                    )
                  ) : (
                    <>
                      Questões selecionadas:{' '}
                      <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                        {effectiveProportionalCount}
                      </span>{' '}
                      (de {matchingPool.length} no formato {PATTERN_LABELS[patternFilter]})
                    </>
                  )
                ) : scopeType === 'item' ? (
                  <>
                    Questões no simulado:{' '}
                    <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                      {effectiveItemCount}
                    </span>{' '}
                    ({matchingPool.length} direta(s) no tópico
                    {fillItemToTen && matchingPool.length < 10
                      ? ` + ${effectiveItemCount - matchingPool.length} do mesmo assunto`
                      : ''}
                    )
                  </>
                ) : (
                  <>
                    Questões disponíveis neste assunto:{' '}
                    <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                      {matchingPool.length}
                    </span>
                  </>
                )}
              </div>

              <button
                type="button"
                disabled={
                  scopeType === 'prova_real'
                    ? allQuestions.length === 0
                    : scopeType === 'item'
                    ? effectiveItemCount === 0
                    : matchingPool.length === 0
                }
                onClick={startExam}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors whitespace-nowrap shrink-0"
              >
                <Play className="w-4 h-4" />
                {scopeType === 'prova_real'
                  ? 'Iniciar Prova Real (60q · 4h)'
                  : scopeType === 'sarah_proporcional'
                  ? 'Iniciar Simulado Proporcional'
                  : 'Iniciar Simulado do Assunto'}
              </button>
            </div>
          </section>

          {/* Diretrizes da Prova */}
          <aside className="lg:col-span-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-4">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
              Estrutura da Prova (Edital 13/2026)
            </h2>
            <ul className="space-y-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-slate-900 dark:text-slate-200">
                  Prova Objetiva e Discursiva:
                </strong>{' '}
                60 questões objetivas (A–D, 1 correta) em 4h00 valendo 100 pontos + 1 questão discursiva de até 30 linhas valendo 50 pontos na mesma sessão.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-200">
                  Tipologias de questão:
                </strong>{' '}
                afirmativas romanas (I–IV), sequência V/F, associação de colunas, comando negativo (<span className="underline">não</span>/<span className="underline">exceto</span>), lacunas e cenários de cálculo.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-200">
                  Gabarito comentado:
                </strong>{' '}
                item literal do edital + justificativa da correta + erro técnico em 1 linha de cada uma das 3 incorretas.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-200">
                  Banco atual:
                </strong>{' '}
                <span className="font-mono tabular-nums">{allQuestions.length}</span> objetivas (proporcional aos 16 eixos) e{' '}
                <span className="font-mono tabular-nums">{DISCURSIVE_CASES.length}</span> casos discursivos.
              </li>
            </ul>
          </aside>
        </div>
      )}

      {/* ==================== EXECUÇÃO DO SIMULADO OBJETIVO ==================== */}
      {simulatorTab === 'objetiva' && stage === 'running' && currentQ && (() => {
        const remainingSeconds = isRealExamMode
          ? Math.max(0, OFFICIAL_SARAH_DURATION_SECONDS - elapsedSeconds)
          : 0;
        const isLast30Min =
          isRealExamMode && remainingSeconds > 0 && remainingSeconds <= REAL_EXAM_WARNING_SECONDS;
        return (
        <div className="space-y-6">
          {isLast30Min && !dismissed30MinWarning && (
            <div
              role="alert"
              className="rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/50 px-5 py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200"
            >
              <div className="flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                <span>
                  <strong>Aviso de tempo:</strong> faltam menos de 30 minutos para o encerramento da Prova real ({formatSeconds(remainingSeconds)} restantes).
                </span>
              </div>
              <button
                type="button"
                onClick={() => setDismissed30MinWarning(true)}
                aria-label="Dispensar aviso de 30 minutos"
                className="p-1 rounded hover:bg-amber-200/50 dark:hover:bg-amber-900/50 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 px-5 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {scopeLabel} ·{' '}
                {isRealExamMode
                  ? 'Prova Real (gabarito apenas ao final)'
                  : examMode === 'treino'
                  ? 'Treino Comentado'
                  : 'Modo Prova'}
              </div>
              <div className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                Questão {currentIdx + 1} de {activeQuestions.length}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {isRealExamMode ? (
                <div
                  className={`flex items-center gap-1.5 font-mono text-sm font-semibold tabular-nums px-2.5 py-1 rounded-md border ${
                    isLast30Min
                      ? 'border-amber-400 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Restante: {formatSeconds(remainingSeconds)}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 font-mono text-sm text-slate-700 dark:text-slate-300 tabular-nums">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{formatSeconds(elapsedSeconds)}</span>
                  {isOfficialTimed4h && (
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      / {formatSeconds(OFFICIAL_SARAH_DURATION_SECONDS)}
                    </span>
                  )}
                </div>
              )}
              <button
                type="button"
                onClick={finishExam}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0"
              >
                Finalizar e Gerar Relatório
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <section className="lg:col-span-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono font-semibold text-sky-600 dark:text-sky-400">
                    Edital {currentQ.editalItemId}
                  </span>
                  <span aria-hidden="true"> · </span>
                  <span>{EDITAL_ITEM_MAP[currentQ.editalItemId]?.literalText}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{currentQ.boardStyle}</span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                  {PATTERN_LABELS[getEffectivePattern(currentQ)]}
                </span>
              </div>

              <SarahStatementRenderer statement={currentQ.statement} />

              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const chosen = selectedAnswers[currentQ.id];
                  const isChosen = chosen === idx;
                  const showImmediate =
                    examMode === 'treino' && typeof chosen === 'number';
                  const isCorrectOpt = idx === currentQ.correctIndex;

                  let styleClass =
                    'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600';

                  if (showImmediate) {
                    if (isCorrectOpt) {
                      styleClass =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200';
                    } else if (isChosen && !isCorrectOpt) {
                      styleClass =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
                    }
                  } else if (isChosen) {
                    styleClass =
                      'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-900 dark:text-sky-200';
                  }

                  const letter = String.fromCharCode(65 + idx);

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setSelectedAnswers((prev) => ({
                          ...prev,
                          [currentQ.id]: idx,
                        }))
                      }
                      className={`w-full p-3.5 rounded-lg border text-left text-sm flex items-start gap-3 transition-colors ${styleClass}`}
                    >
                      <span className="font-mono text-xs font-semibold mt-0.5 shrink-0">
                        {letter})
                      </span>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {examMode === 'treino' &&
                typeof selectedAnswers[currentQ.id] === 'number' &&
                renderSarahCommentary(currentQ)}

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                  className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (currentIdx < activeQuestions.length - 1) {
                      setCurrentIdx((i) => i + 1);
                    } else {
                      finishExam();
                    }
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                >
                  {currentIdx < activeQuestions.length - 1
                    ? 'Próxima questão'
                    : 'Finalizar Simulado'}
                </button>
              </div>
            </section>

            {/* Mapa da prova */}
            <aside className="lg:col-span-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-5 space-y-4">
              <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                Cartão de Respostas
              </h2>
              <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-6 gap-2">
                {activeQuestions.map((q, idx) => {
                  const answered = typeof selectedAnswers[q.id] === 'number';
                  const isCur = idx === currentIdx;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-9 rounded-lg font-mono text-xs font-semibold tabular-nums border transition-colors ${
                        isCur
                          ? 'border-sky-500 bg-sky-600 text-white'
                          : answered
                          ? 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                          : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                Respondidas: {Object.keys(selectedAnswers).length}/{activeQuestions.length}
              </p>
            </aside>
          </div>
        </div>
        );
      })()}

      {/* ==================== RELATÓRIO FINAL & GABARITO OBJETIVO ==================== */}
      {simulatorTab === 'objetiva' && stage === 'review' && (
        <div className="space-y-6">
          {(() => {
            const total = activeQuestions.length;
            const correct = activeQuestions.filter(
              (q) => selectedAnswers[q.id] === q.correctIndex
            ).length;
            const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
            const scoreOn100 =
              total > 0 ? ((correct / total) * 100).toFixed(1).replace('.', ',') : '0,0';

            const displayedQuestions = activeQuestions.filter((q) => {
              if (reviewFilter === 'wrong') {
                return selectedAnswers[q.id] !== q.correctIndex;
              }
              return true;
            });

            // Agrupamento por Eixo
            const axisStats = OFFICIAL_EDITAL.axes
              .map((axis) => {
                const qs = activeQuestions.filter(
                  (q) => EDITAL_ITEM_MAP[q.editalItemId]?.axisId === axis.id
                );
                if (qs.length === 0) return null;
                const ok = qs.filter((q) => selectedAnswers[q.id] === q.correctIndex).length;
                return {
                  axis,
                  total: qs.length,
                  correct: ok,
                  pct: Math.round((ok / qs.length) * 100),
                };
              })
              .filter((x): x is NonNullable<typeof x> => x !== null);

            // Agrupamento por Subtópico Exato do Edital
            const subtopicMap = new Map<
              string,
              { itemId: string; literalText: string; total: number; correct: number }
            >();
            for (const q of activeQuestions) {
              const item = EDITAL_ITEM_MAP[q.editalItemId];
              if (!item) continue;
              const prev = subtopicMap.get(item.id) ?? {
                itemId: item.id,
                literalText: item.literalText,
                total: 0,
                correct: 0,
              };
              subtopicMap.set(item.id, {
                ...prev,
                total: prev.total + 1,
                correct: prev.correct + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0),
              });
            }
            const subtopicStats = Array.from(subtopicMap.values());

            return (
              <>
                <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Relatório Final · {scopeLabel}
                    </p>
                    <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                      {correct} de {total} acertos · Nota: {scoreOn100} / 100,0
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                      Aproveitamento: {pct}% · Tempo utilizado: {formatSeconds(elapsedSeconds)}
                      {isRealExamMode ? ' (de 04:00:00)' : ''}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setReviewFilter('all')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                          reviewFilter === 'all'
                            ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Todas ({total})
                      </button>
                      <button
                        type="button"
                        onClick={() => setReviewFilter('wrong')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                          reviewFilter === 'wrong'
                            ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Erradas/Branco ({total - correct})
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStage('config')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Novo Simulado
                    </button>
                  </div>
                </section>

                {/* Relatório de desempenho por Eixo e por Subtópico Exato */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                      <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Desempenho por Eixo do Edital
                      </h2>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-[360px] overflow-y-auto">
                      {axisStats.map((st) => (
                        <div
                          key={st.axis.id}
                          className="px-5 py-2.5 flex items-center justify-between gap-4 text-xs"
                        >
                          <span className="font-medium text-slate-800 dark:text-slate-200 truncate">
                            {st.axis.literalTitle}
                          </span>
                          <span
                            className={`font-mono font-semibold tabular-nums shrink-0 ${
                              st.pct >= 70
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-amber-600 dark:text-amber-400'
                            }`}
                          >
                            {st.correct}/{st.total} ({st.pct}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                      <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Desempenho por Subtópico Exato do Edital
                      </h2>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-[360px] overflow-y-auto">
                      {subtopicStats.map((sub) => {
                        const subPct = Math.round((sub.correct / sub.total) * 100);
                        return (
                          <div
                            key={sub.itemId}
                            className="px-5 py-2.5 flex items-center justify-between gap-3 text-xs"
                          >
                            <div className="min-w-0">
                              <span className="font-mono text-slate-500 dark:text-slate-400 mr-1.5">
                                {sub.itemId}
                              </span>
                              <span className="text-slate-800 dark:text-slate-200">
                                {sub.literalText}
                              </span>
                            </div>
                            <div className="flex items-center gap-2.5 shrink-0">
                              <span
                                className={`font-mono font-semibold tabular-nums ${
                                  subPct >= 70
                                    ? 'text-emerald-600 dark:text-emerald-400'
                                    : 'text-rose-600 dark:text-rose-400'
                                }`}
                              >
                                {sub.correct}/{sub.total} ({subPct}%)
                              </span>
                              <button
                                type="button"
                                onClick={() => onOpenNotebook(sub.itemId)}
                                className="text-sky-600 dark:text-sky-400 hover:underline font-medium"
                              >
                                Estudar
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>

                {/* Gabarito Comentado Padrão Rede SARAH */}
                <div className="space-y-4">
                  {displayedQuestions.length === 0 ? (
                    <section className="border border-emerald-200 dark:border-emerald-900/70 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 p-6 text-center space-y-1.5">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto" />
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Nenhuma questão errada ou em branco neste simulado
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Alterne o filtro para "Todas" para revisar todos os comentários técnicos da banca.
                      </p>
                    </section>
                  ) : (
                    displayedQuestions.map((q, idx) => {
                      const userChoice = selectedAnswers[q.id];
                      const isCorrect = userChoice === q.correctIndex;
                      const editalItem = EDITAL_ITEM_MAP[q.editalItemId];

                      return (
                        <section
                          key={q.id}
                          className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              <span className="font-mono font-semibold text-sky-600 dark:text-sky-400">
                                Item {q.editalItemId}
                              </span>
                              <span aria-hidden="true"> · </span>
                              <span>{editalItem?.literalText}</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-semibold">
                              <span className="font-mono text-[11px] font-normal px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                                {PATTERN_LABELS[getEffectivePattern(q)]}
                              </span>
                              {isCorrect ? (
                                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                                  <CheckCircle2 className="w-4 h-4" />
                                  Acerto
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400">
                                  <XCircle className="w-4 h-4" />
                                  {typeof userChoice === 'number' ? 'Erro' : 'Em branco'}
                                </span>
                              )}
                            </div>
                          </div>

                          <SarahStatementRenderer
                            statement={q.statement}
                            prefix={`#${idx + 1}`}
                            compact
                          />

                          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                            <div>
                              Sua resposta:{' '}
                              <span className="font-semibold text-slate-900 dark:text-slate-100">
                                {typeof userChoice === 'number'
                                  ? `${String.fromCharCode(65 + userChoice)}) ${q.options[userChoice]}`
                                  : 'Não respondida'}
                              </span>
                            </div>
                            <div>
                              Gabarito oficial:{' '}
                              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                                {String.fromCharCode(65 + q.correctIndex)}){' '}
                                {q.options[q.correctIndex]}
                              </span>
                            </div>
                          </div>

                          {renderSarahCommentary(q)}

                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => onOpenNotebook(q.editalItemId)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              Abrir item no Caderno
                            </button>
                          </div>
                        </section>
                      );
                    })
                  )}
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* Modal para Adicionar Questão Padrão Rede SARAH */}
      {showAddModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Adicionar questão padrão Rede SARAH"
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
                  Adicionar Questão — Padrão Rede SARAH
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  4 alternativas (A–D) com vínculo obrigatório ao ID exato do edital.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {addError && (
              <div className="p-3 rounded-lg border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {addError}
              </div>
            )}

            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Item exato do Edital (obrigatório)
                  </label>
                  <select
                    value={newItemId}
                    onChange={(e) => setNewItemId(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  >
                    {ALL_EDITAL_ITEMS.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.id} — {item.literalText}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tipologia SARAH
                  </label>
                  <select
                    value={newPattern}
                    onChange={(e) =>
                      setNewPattern(e.target.value as SarahQuestionPattern)
                    }
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  >
                    <option value="cenario">Cenário / Cálculo</option>
                    <option value="afirmativas">Afirmativas (I–IV)</option>
                    <option value="vf">Verdadeiro / Falso</option>
                    <option value="colunas">Associação de Colunas</option>
                    <option value="negativa">Comando Negativo (__não__)</option>
                    <option value="lacunas">Preenchimento de Lacunas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Dificuldade
                  </label>
                  <select
                    value={newDifficulty}
                    onChange={(e) =>
                      setNewDifficulty(
                        e.target.value as 'Basica' | 'Intermediaria' | 'Avancada'
                      )
                    }
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  >
                    <option value="Basica">Básica</option>
                    <option value="Intermediaria">Intermediária</option>
                    <option value="Avancada">Avancada</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Enunciado técnico objetivo (suporta __sublinhado__ e Coluna da Esquerda: / Coluna da Direita:)
                </label>
                <textarea
                  rows={4}
                  value={newStatement}
                  onChange={(e) => setNewStatement(e.target.value)}
                  className="w-full p-3 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  4 Alternativas (A–D) — marque a correta e informe o erro de cada incorreta
                </label>
                {([0, 1, 2, 3] as const).map((idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isCorrect = newCorrectIndex === idx;
                  return (
                    <div key={idx} className="space-y-1 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="sarah-correct-opt"
                          checked={isCorrect}
                          onChange={() => setNewCorrectIndex(idx)}
                          aria-label={`Marcar alternativa ${letter} como correta`}
                        />
                        <span className="font-mono text-xs font-semibold w-4">{letter})</span>
                        <input
                          type="text"
                          value={newOptions[idx]}
                          onChange={(e) => {
                            const next = [...newOptions] as [string, string, string, string];
                            next[idx] = e.target.value;
                            setNewOptions(next);
                          }}
                          placeholder={`Texto da alternativa ${letter}`}
                          className="flex-1 px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                        />
                      </div>
                      {!isCorrect && (
                        <input
                          type="text"
                          value={newOptionErrors[idx]}
                          onChange={(e) => {
                            const next = [...newOptionErrors] as [string, string, string, string];
                            next[idx] = e.target.value;
                            setNewOptionErrors(next);
                          }}
                          placeholder={`Erro técnico específico da alternativa ${letter} (1 linha)`}
                          className="w-full px-2.5 py-1 text-xs rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Justificativa objetiva da alternativa correta
                </label>
                <textarea
                  rows={2}
                  value={newCorrectAnalysis}
                  onChange={(e) => setNewCorrectAnalysis(e.target.value)}
                  className="w-full p-3 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveNewQuestion}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white"
              >
                Salvar Questão SARAH
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
