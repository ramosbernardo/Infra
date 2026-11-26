import {
  AlertTriangle,
  BookOpen,
  Check,
  Eye,
  FileQuestion,
  Layers,
  RotateCw,
  Search,
} from 'lucide-react';
import { Fragment, useEffect, useMemo, useState } from 'react';
import {
  ALL_EDITAL_ITEMS,
  EDITAL_AXIS_MAP,
  EDITAL_ITEM_MAP,
  OFFICIAL_EDITAL,
  normalizeSearchText,
} from '../data/edital';
import { INITIAL_FLASHCARDS, getStudyGuideForItem } from '../data/studyGuides';
import { SrsRating } from '../hooks/useStudyStore';
import { Question, SRSProgress, StudyStatus } from '../types/edital';

const INLINE_TOKEN_REGEX =
  /(`[^`\n]+`|\*\*[^*\n]+?\*\*|\*[^\s*][^*\n]*?[^\s*]\*|\*[^\s*]\*)/g;

function FormattedInlineText({ text }: { text: string }) {
  const parts = text.split(INLINE_TOKEN_REGEX);
  return (
    <>
      {parts.map((part, idx) => {
        if (!part) return null;
        if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
          return (
            <code
              key={idx}
              className="font-mono text-[0.9em] px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return (
            <strong
              key={idx}
              className="font-semibold text-slate-900 dark:text-slate-100"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 3) {
          return <em key={idx}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={idx}>{part}</Fragment>;
      })}
    </>
  );
}

function formatDaysLabel(days: number): string {
  if (days < 1) return '15m';
  return `${days}d`;
}

function getProjectedSrsIntervals(prog?: SRSProgress) {
  const reps = prog?.repetitions ?? 0;
  const intervalDays = prog?.intervalDays ?? 0;
  const ease = prog?.easeFactor ?? 2.5;

  const hardDays = reps === 0 ? 1 : Math.max(1, Math.round(intervalDays * 1.2));
  const goodDays =
    reps === 0 ? 1 : reps === 1 ? 3 : Math.round(intervalDays * ease);
  const easyDays =
    reps === 0 ? 4 : Math.round(intervalDays * ease * 1.3);

  return {
    again: '15m',
    hard: formatDaysLabel(hardDays),
    good: formatDaysLabel(goodDays),
    easy: formatDaysLabel(easyDays),
  };
}

interface StudyNotebookViewProps {
  selectedItemId: string;
  onSelectItemId: (itemId: string) => void;
  itemStatuses: Record<string, StudyStatus>;
  itemNotes: Record<string, string>;
  srsProgress: Record<string, SRSProgress>;
  allQuestions: readonly Question[];
  onChangeStatus: (itemId: string, status: StudyStatus) => void;
  onChangeNote: (itemId: string, note: string) => void;
  onReviewFlashcard: (cardId: string, rating: SrsRating) => void;
  onStartTopicExam: (itemId: string) => void;
}

export function StudyNotebookView({
  selectedItemId,
  onSelectItemId,
  itemStatuses,
  itemNotes,
  srsProgress,
  allQuestions,
  onChangeStatus,
  onChangeNote,
  onReviewFlashcard,
  onStartTopicExam,
}: StudyNotebookViewProps) {
  const [topicSearch, setTopicSearch] = useState('');
  const [axisFilter, setAxisFilter] = useState<string>('all');
  const [srsMode, setSrsMode] = useState<'item' | 'due'>('due');
  const [cardIndex, setCardIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  const selectedItem = EDITAL_ITEM_MAP[selectedItemId] ?? ALL_EDITAL_ITEMS[0];
  const selectedAxis = EDITAL_AXIS_MAP[selectedItem.axisId];
  const guide = useMemo(() => getStudyGuideForItem(selectedItem.id), [selectedItem.id]);

  const currentNote = itemNotes[selectedItem.id] ?? '';
  const [draftNote, setDraftNote] = useState(currentNote);

  useEffect(() => {
    setDraftNote(currentNote);
  }, [selectedItem.id, currentNote]);

  useEffect(() => {
    setNoteSavedToast(false);
    setCardIndex(0);
    setIsRevealed(false);
  }, [selectedItem.id]);

  const filteredTopics = useMemo(() => {
    const q = normalizeSearchText(topicSearch);
    return ALL_EDITAL_ITEMS.filter((item) => {
      if (axisFilter !== 'all' && item.axisId !== axisFilter) return false;
      if (!q) return true;
      const ax = EDITAL_AXIS_MAP[item.axisId];
      const hay = normalizeSearchText(
        [item.id, item.literalText, ax?.literalTitle ?? '', ...item.keywords].join(' ')
      );
      return hay.includes(q);
    });
  }, [topicSearch, axisFilter]);

  const dueFlashcards = useMemo(() => {
    const now = Date.now();
    return INITIAL_FLASHCARDS.filter((card) => {
      const prog = srsProgress[card.id];
      return !prog || prog.nextReviewAt <= now;
    });
  }, [srsProgress]);

  const itemFlashcards = useMemo(() => {
    return INITIAL_FLASHCARDS.filter(
      (card) => card.itemId === selectedItem.id || card.itemId.startsWith(`${selectedItem.axisId}.`)
    );
  }, [selectedItem.id, selectedItem.axisId]);

  const activeDeck = srsMode === 'due' ? dueFlashcards : itemFlashcards;
  const safeCardIndex =
    activeDeck.length > 0 ? Math.min(cardIndex, activeDeck.length - 1) : 0;
  const currentCard = activeDeck[safeCardIndex];
  const projectedIntervals = getProjectedSrsIntervals(
    currentCard ? srsProgress[currentCard.id] : undefined
  );

  const relatedQuestionsCount = useMemo(
    () => allQuestions.filter((q) => q.editalItemId === selectedItem.id).length,
    [allQuestions, selectedItem.id]
  );

  const handleSaveNote = () => {
    onChangeNote(selectedItem.id, draftNote);
    setNoteSavedToast(true);
    setTimeout(() => setNoteSavedToast(false), 1800);
  };

  const handleRateCard = (rating: SrsRating) => {
    if (!currentCard) return;
    onReviewFlashcard(currentCard.id, rating);
    setIsRevealed(false);
    if (srsMode === 'due') {
      // Na fila pendente, qualquer avaliação agenda nextReviewAt > now e remove o card atual
      setCardIndex(safeCardIndex >= activeDeck.length - 1 ? 0 : safeCardIndex);
    } else {
      setCardIndex(
        activeDeck.length > 1 ? (safeCardIndex + 1) % activeDeck.length : 0
      );
    }
  };

  const currentStatus: StudyStatus = itemStatuses[selectedItem.id] ?? 'nao_iniciado';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Navegador lateral de tópicos do edital */}
      <aside className="lg:col-span-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
              Tópicos do Edital
            </h2>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              {filteredTopics.length}/{ALL_EDITAL_ITEMS.length}
            </span>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={topicSearch}
              onChange={(e) => setTopicSearch(e.target.value)}
              placeholder="Filtrar tópico do edital..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <select
            aria-label="Filtrar eixo no caderno"
            value={axisFilter}
            onChange={(e) => setAxisFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="all">Todos os eixos (1–16)</option>
            {OFFICIAL_EDITAL.axes.map((ax) => (
              <option key={ax.id} value={ax.id}>
                {ax.literalTitle}
              </option>
            ))}
          </select>
        </div>

        <div className="max-h-[580px] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/80">
          {filteredTopics.length === 0 ? (
            <div className="p-5 space-y-2 text-center">
              <AlertTriangle className="w-5 h-5 text-amber-500 mx-auto" />
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                Tema fora do escopo do edital
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                "{topicSearch}" não consta no conteúdo programático oficial.
              </p>
            </div>
          ) : (
            filteredTopics.map((item) => {
              const isSelected = item.id === selectedItem.id;
              const st = itemStatuses[item.id] ?? 'nao_iniciado';
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItemId(item.id)}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    isSelected
                      ? 'bg-sky-50 dark:bg-sky-950/50'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono tabular-nums">{item.id}</span>
                    <span>
                      {st === 'dominado'
                        ? 'Dominado'
                        : st === 'revisar'
                        ? 'Revisar'
                        : st === 'em_estudo'
                        ? 'Em estudo'
                        : 'Não iniciado'}
                    </span>
                  </div>
                  <div
                    className={`mt-1 text-xs font-medium leading-snug ${
                      isSelected
                        ? 'text-sky-700 dark:text-sky-300'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {item.literalText}
                  </div>
                </button>
              );
            })
          )}
        </div>
      </aside>

      {/* Conteúdo principal do caderno + SRS */}
      <div className="lg:col-span-8 space-y-6">
        {/* Cabeçalho com citação literal obrigatória do edital */}
        <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span>{selectedAxis?.literalTitle}</span>
                <span aria-hidden="true"> · </span>
                <span className="font-mono tabular-nums">Item {selectedItem.id}</span>
              </div>
              <h1 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 text-balance">
                {selectedItem.literalText}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <select
                aria-label="Atualizar status do tópico"
                value={currentStatus}
                onChange={(e) =>
                  onChangeStatus(selectedItem.id, e.target.value as StudyStatus)
                }
                className="px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="nao_iniciado">Não iniciado</option>
                <option value="em_estudo">Em estudo</option>
                <option value="revisar">Revisar</option>
                <option value="dominado">Dominado</option>
              </select>

              {relatedQuestionsCount > 0 && (
                <button
                  type="button"
                  onClick={() => onStartTopicExam(selectedItem.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors whitespace-nowrap shrink-0"
                >
                  <FileQuestion className="w-3.5 h-3.5" />
                  Treinar ({relatedQuestionsCount})
                </button>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Resumo objetivo para prova
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {guide.highYieldSummary.map((line, idx) => {
                  const colonIdx = line.indexOf(':');
                  const hasPrefix = colonIdx > 0 && colonIdx <= 60;
                  const prefix = hasPrefix ? line.slice(0, colonIdx + 1) : '';
                  const rest = hasPrefix ? line.slice(colonIdx + 1) : line;

                  return (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs text-sky-600 dark:text-sky-400 mt-1 shrink-0 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span>
                        {hasPrefix && (
                          <strong className="font-semibold text-slate-900 dark:text-slate-100">
                            <FormattedInlineText text={prefix} />
                          </strong>
                        )}
                        <FormattedInlineText text={rest} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {guide.technicalReference && guide.technicalReference.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                  Comandos, Portas e Parâmetros de Referência
                </h2>
                <div className="space-y-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5">
                  {guide.technicalReference.map((refLine, idx) => (
                    <div
                      key={idx}
                      className="font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-200 break-words"
                    >
                      <FormattedInlineText text={refLine} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {guide.examTraps.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                  Pegadinhas recorrentes de banca
                </h2>
                <ul className="space-y-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {guide.examTraps.map((trap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-amber-500 mt-0.5">
                        •
                      </span>
                      <span>
                        <FormattedInlineText text={trap} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {guide.keyTerms.some((term) => term.includes(':')) ? (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <span className="block font-medium text-slate-700 dark:text-slate-300">
                  Conceitos-chave:
                </span>
                <ul className="space-y-1.5 leading-relaxed">
                  {guide.keyTerms.map((term) => {
                    const colonIdx = term.indexOf(':');
                    const hasDef = colonIdx > 0;
                    return (
                      <li key={term} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-slate-400 mt-0.5">
                          •
                        </span>
                        <span>
                          {hasDef ? (
                            <>
                              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                                {term.slice(0, colonIdx)}
                              </strong>
                              <FormattedInlineText text={term.slice(colonIdx)} />
                            </>
                          ) : (
                            <span className="font-medium text-slate-700 dark:text-slate-300">
                              {term}
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Conceitos-chave:
                </span>
                {guide.keyTerms.map((term, idx) => (
                  <span key={term}>
                    {idx > 0 && <span aria-hidden="true"> · </span>}
                    <span className="font-mono text-slate-700 dark:text-slate-300">
                      {term}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Anotações pessoais persistidas por item */}
        <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                Anotações Pessoais
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Salvo localmente para o item {selectedItem.id} ({selectedItem.literalText})
              </p>
            </div>
            <button
              type="button"
              onClick={handleSaveNote}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0"
            >
              {noteSavedToast ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Salvo
                </>
              ) : (
                <>
                  <BookOpen className="w-3.5 h-3.5" />
                  Salvar anotação
                </>
              )}
            </button>
          </div>

          <textarea
            rows={5}
            value={draftNote}
            onChange={(e) => setDraftNote(e.target.value)}
            onBlur={() => onChangeNote(selectedItem.id, draftNote)}
            placeholder="Registre comandos, portas, exceções de legislação ou resumos de questões erradas sobre este item exato do edital..."
            className="w-full p-3.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </section>

        {/* Flashcards SRS */}
        <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-500" />
                <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                  Flashcards de Revisão Espaçada (SRS)
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                {dueFlashcards.length} pendentes para revisão hoje · {INITIAL_FLASHCARDS.length} no deck oficial
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSrsMode('due');
                  setCardIndex(0);
                  setIsRevealed(false);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  srsMode === 'due'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Fila pendente ({dueFlashcards.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSrsMode('item');
                  setCardIndex(0);
                  setIsRevealed(false);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  srsMode === 'item'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Deste eixo ({itemFlashcards.length})
              </button>
            </div>
          </div>

          {!currentCard ? (
            <div className="p-6 text-center border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 space-y-2">
              <Check className="w-6 h-6 text-emerald-500 mx-auto" />
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Nenhum flashcard pendente no momento
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Todas as revisões programadas foram concluídas ou selecione "Deste eixo" para revisar livremente.
              </p>
            </div>
          ) : (
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 p-5 space-y-4">
              <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <div>
                  <span className="font-mono">{currentCard.itemId}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{EDITAL_ITEM_MAP[currentCard.itemId]?.literalText}</span>
                </div>
                <span className="font-mono tabular-nums shrink-0">
                  {safeCardIndex + 1}/{activeDeck.length}
                </span>
              </div>

              <div className="min-h-[84px] flex flex-col justify-center space-y-3">
                <p className="text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  <FormattedInlineText text={currentCard.front} />
                </p>

                {isRevealed && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <FormattedInlineText text={currentCard.back} />
                  </div>
                )}
              </div>

              {!isRevealed ? (
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsRevealed(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Mostrar resposta
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsRevealed(false);
                      setCardIndex((safeCardIndex + 1) % activeDeck.length);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    Pular
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => handleRateCard('again')}
                    className="px-3 py-2 text-xs font-semibold rounded-lg border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-950 transition-colors"
                  >
                    Errei · {projectedIntervals.again}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRateCard('hard')}
                    className="px-3 py-2 text-xs font-semibold rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-950 transition-colors"
                  >
                    Difícil · {projectedIntervals.hard}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRateCard('good')}
                    className="px-3 py-2 text-xs font-semibold rounded-lg border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-950 transition-colors"
                  >
                    Bom · {projectedIntervals.good}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRateCard('easy')}
                    className="px-3 py-2 text-xs font-semibold rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-950 transition-colors"
                  >
                    Fácil · {projectedIntervals.easy}
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
