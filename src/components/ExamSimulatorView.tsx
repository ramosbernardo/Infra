import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Clock,
  Play,
  Plus,
  RotateCcw,
  X,
  XCircle,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  ALL_EDITAL_ITEMS,
  EDITAL_AXIS_MAP,
  EDITAL_ITEM_MAP,
  OFFICIAL_EDITAL,
} from '../data/edital';
import { Question, QuizSessionRecord } from '../types/edital';

interface ExamSimulatorViewProps {
  allQuestions: readonly Question[];
  presetItemId?: string | null;
  presetAxisId?: string | null;
  onClearPreset: () => void;
  onRecordSession: (session: QuizSessionRecord) => void;
  onAddCustomQuestion: (question: Question) => boolean;
  onOpenNotebook: (itemId: string) => void;
}

type Stage = 'config' | 'running' | 'review';
type ScopeType = 'sarah_proporcional' | 'axis' | 'item';
type ExamMode = 'treino' | 'cronometrado';

function formatSeconds(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
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

function buildProportionalSarahExam(
  pool: readonly Question[],
  perAxisCount: 1 | 2 | 3 | 5 | 10
): Question[] {
  const picked: Question[] = [];
  for (const axis of OFFICIAL_EDITAL.axes) {
    const axisQuestions = pool.filter((q) => {
      const item = EDITAL_ITEM_MAP[q.editalItemId];
      return item?.axisId === axis.id;
    });
    const shuffled = shuffleArray(axisQuestions);
    picked.push(...shuffled.slice(0, perAxisCount));
  }
  return picked;
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
  const [stage, setStage] = useState<Stage>('config');
  const [scopeType, setScopeType] = useState<ScopeType>('sarah_proporcional');
  const [sarahSize, setSarahSize] = useState<16 | 32 | 48 | 80 | 160>(160);
  const [selectedAxisId, setSelectedAxisId] = useState<string>('1');
  const [selectedItemId, setSelectedItemId] = useState<string>('1.1.1');
  const [fillItemToTen, setFillItemToTen] = useState<boolean>(true);
  const [examMode, setExamMode] = useState<ExamMode>('cronometrado');

  // Estado da sessão ativa
  const [activeQuestions, setActiveQuestions] = useState<readonly Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong'>('all');
  const [scopeLabel, setScopeLabel] = useState('Simulado Padrão SARAH (16 Eixos)');

  // Modal de nova questão (4 alternativas A-D padrão Rede SARAH)
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItemId, setNewItemId] = useState('1.1.1');
  const [newDifficulty, setNewDifficulty] = useState<'Basica' | 'Intermediaria' | 'Avancada'>('Intermediaria');
  const [newStatement, setNewStatement] = useState('');
  const [newOptions, setNewOptions] = useState<[string, string, string, string]>(['', '', '', '']);
  const [newCorrectIndex, setNewCorrectIndex] = useState(0);
  const [newCorrectAnalysis, setNewCorrectAnalysis] = useState('');
  const [newOptionErrors, setNewOptionErrors] = useState<[string, string, string, string]>(['', '', '', '']);
  const [addError, setAddError] = useState('');

  useEffect(() => {
    if (presetItemId && EDITAL_ITEM_MAP[presetItemId]) {
      setScopeType('item');
      setSelectedItemId(presetItemId);
      setSelectedAxisId(EDITAL_ITEM_MAP[presetItemId].axisId);
      setExamMode('treino');
      setStage('config');
      onClearPreset();
    } else if (presetAxisId && EDITAL_AXIS_MAP[presetAxisId]) {
      setScopeType('axis');
      setSelectedAxisId(presetAxisId);
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

  const matchingPool = useMemo(() => {
    if (scopeType === 'sarah_proporcional') {
      return allQuestions.filter((q) => Boolean(EDITAL_ITEM_MAP[q.editalItemId]));
    }
    return allQuestions.filter((q) => {
      const item = EDITAL_ITEM_MAP[q.editalItemId];
      if (!item) return false;
      if (scopeType === 'axis' && item.axisId !== selectedAxisId) return false;
      if (scopeType === 'item' && q.editalItemId !== selectedItemId) return false;
      return true;
    });
  }, [allQuestions, scopeType, selectedAxisId, selectedItemId]);

  const itemAxisPool = useMemo(() => {
    const targetAxisId = EDITAL_ITEM_MAP[selectedItemId]?.axisId;
    if (!targetAxisId) return [] as Question[];
    return allQuestions.filter((q) => {
      const item = EDITAL_ITEM_MAP[q.editalItemId];
      return item?.axisId === targetAxisId && q.editalItemId !== selectedItemId;
    });
  }, [allQuestions, selectedItemId]);

  const effectiveItemCount = useMemo(() => {
    if (scopeType !== 'item') return matchingPool.length;
    if (!fillItemToTen || matchingPool.length >= 10) return matchingPool.length;
    return Math.min(10, matchingPool.length + itemAxisPool.length);
  }, [scopeType, fillItemToTen, matchingPool.length, itemAxisPool.length]);

  const startExam = () => {
    let picked: Question[];
    let label: string;

    if (scopeType === 'sarah_proporcional') {
      if (matchingPool.length === 0) return;
      const perAxis = (sarahSize / 16) as 1 | 2 | 3 | 5 | 10;
      picked = buildProportionalSarahExam(matchingPool, perAxis);
      label = `Simulado Padrão SARAH (${picked.length} questões · ${perAxis} por assunto)`;
    } else if (scopeType === 'axis') {
      if (matchingPool.length === 0) return;
      picked = shuffleArray(matchingPool);
      label = `Padrão SARAH · ${EDITAL_AXIS_MAP[selectedAxisId]?.literalTitle ?? ''}`;
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
      label = `Padrão SARAH · ${it ? `${it.id} ${it.literalText}` : selectedItemId}`;
    }

    if (picked.length === 0) return;

    setScopeLabel(label);
    setActiveQuestions(picked);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setElapsedSeconds(0);
    setReviewFilter('all');
    setStage('running');
  };

  const finishExam = () => {
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
      durationSeconds: elapsedSeconds,
      scopeLabel,
      modeLabel: examMode === 'treino' ? 'Treino' : 'Simulado Padrão SARAH',
      totalQuestions: activeQuestions.length,
      correctCount,
      answers,
    });

    setStage('review');
  };

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
      {stage === 'config' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Configurador do Simulado Padrão SARAH */}
          <section className="lg:col-span-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-sky-600 dark:text-sky-400">
                  Banca Própria da Rede SARAH · 4 Alternativas (A–D)
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setScopeType('sarah_proporcional')}
                    className={`p-3.5 rounded-lg border text-left transition-colors ${
                      scopeType === 'sarah_proporcional'
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-200'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="text-xs font-semibold">Simulado Padrão SARAH</div>
                    <div className="text-xs opacity-80 mt-0.5">
                      Proporcional entre os 16 eixos
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

              {scopeType === 'sarah_proporcional' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Extensão do Simulado Padrão SARAH
                    </label>
                    <select
                      value={sarahSize}
                      onChange={(e) => setSarahSize(Number(e.target.value) as 16 | 32 | 48 | 80 | 160)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value={160}>160 questões (10 por assunto · banco completo)</option>
                      <option value={80}>80 questões (5 por assunto · 16 eixos)</option>
                      <option value={48}>48 questões (3 por assunto · 16 eixos)</option>
                      <option value={32}>32 questões (2 por assunto · 16 eixos)</option>
                      <option value={16}>16 questões (1 por assunto · rápido)</option>
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
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-sm text-slate-600 dark:text-slate-400 tabular-nums">
                {scopeType === 'sarah_proporcional' ? (
                  <>
                    Distribuição exata:{' '}
                    <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                      {sarahSize} questões
                    </span>{' '}
                    ({sarahSize / 16} por assunto nos 16 eixos)
                  </>
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
                disabled={scopeType === 'item' ? effectiveItemCount === 0 : matchingPool.length === 0}
                onClick={startExam}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors whitespace-nowrap shrink-0"
              >
                <Play className="w-4 h-4" />
                {scopeType === 'sarah_proporcional'
                  ? 'Iniciar Simulado Padrão SARAH'
                  : 'Iniciar Simulado do Assunto'}
              </button>
            </div>
          </section>

          {/* Diretrizes da Banca Própria da Rede SARAH */}
          <aside className="lg:col-span-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-4">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
              Padrão Banca Própria Rede SARAH
            </h2>
            <ul className="space-y-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-slate-900 dark:text-slate-200">
                  4 alternativas (A–D):
                </strong>{' '}
                apenas 1 correta, com distratores plausíveis baseados em inversão técnica sutil (portas, flags, papéis ou siglas do edital).
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
                <span className="font-mono tabular-nums">{allQuestions.length}</span> questões (mínimo de 10 questões por assunto nos 16 eixos).
              </li>
            </ul>
          </aside>
        </div>
      )}

      {/* Execução do Simulado */}
      {stage === 'running' && currentQ && (
        <div className="space-y-6">
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 px-5 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {scopeLabel} · {examMode === 'treino' ? 'Treino Comentado' : 'Modo Prova'}
              </div>
              <div className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                Questão {currentIdx + 1} de {activeQuestions.length}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-sm text-slate-700 dark:text-slate-300 tabular-nums">
                <Clock className="w-4 h-4 text-slate-400" />
                {formatSeconds(elapsedSeconds)}
              </div>
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
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono font-semibold text-sky-600 dark:text-sky-400">
                  Edital {currentQ.editalItemId}
                </span>
                <span aria-hidden="true"> · </span>
                <span>{EDITAL_ITEM_MAP[currentQ.editalItemId]?.literalText}</span>
                <span aria-hidden="true"> · </span>
                <span>{currentQ.boardStyle}</span>
              </div>

              <p className="text-base leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                {currentQ.statement}
              </p>

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
      )}

      {/* Relatório Final por Eixo, por Subtópico Exato e Gabarito Comentado Padrão SARAH */}
      {stage === 'review' && (
        <div className="space-y-6">
          {(() => {
            const total = activeQuestions.length;
            const correct = activeQuestions.filter(
              (q) => selectedAnswers[q.id] === q.correctIndex
            ).length;
            const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

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
                      {correct} de {total} acertos ({pct}%)
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                      Tempo total: {formatSeconds(elapsedSeconds)}
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
                          <div className="flex items-center gap-1.5 text-xs font-semibold">
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

                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                          <span className="font-mono text-slate-400 mr-2">
                            #{idx + 1}
                          </span>
                          {q.statement}
                        </p>

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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                  Enunciado técnico objetivo
                </label>
                <textarea
                  rows={3}
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
