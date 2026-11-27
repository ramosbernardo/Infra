import {
  AlertTriangle,
  BookOpen,
  Check,
  FileQuestion,
  Search,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  ALL_EDITAL_ITEMS,
  EDITAL_AXIS_MAP,
  EDITAL_ITEM_MAP,
  OFFICIAL_EDITAL,
  normalizeSearchText,
} from '../data/edital';
import { getStudyGuideForItem } from '../data/studyGuides';
import { Question, StudyStatus } from '../types/edital';
import { FormattedInlineText } from './FormattedInlineText';

interface StudyNotebookViewProps {
  selectedItemId: string;
  onSelectItemId: (itemId: string) => void;
  itemStatuses: Record<string, StudyStatus>;
  itemNotes: Record<string, string>;
  allQuestions: readonly Question[];
  onChangeStatus: (itemId: string, status: StudyStatus) => void;
  onChangeNote: (itemId: string, note: string) => void;
  onStartTopicExam: (itemId: string) => void;
}

export function StudyNotebookView({
  selectedItemId,
  onSelectItemId,
  itemStatuses,
  itemNotes,
  allQuestions,
  onChangeStatus,
  onChangeNote,
  onStartTopicExam,
}: StudyNotebookViewProps) {
  const [topicSearch, setTopicSearch] = useState('');
  const [axisFilter, setAxisFilter] = useState<string>('all');
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

  const relatedQuestionsCount = useMemo(
    () => allQuestions.filter((q) => q.editalItemId === selectedItem.id).length,
    [allQuestions, selectedItem.id]
  );

  const handleSaveNote = () => {
    onChangeNote(selectedItem.id, draftNote);
    setNoteSavedToast(true);
    setTimeout(() => setNoteSavedToast(false), 1800);
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

      {/* Conteúdo principal do caderno */}
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
      </div>
    </div>
  );
}
