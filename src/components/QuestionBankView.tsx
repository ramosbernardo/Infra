import { BookOpen, Printer } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { EDITAL_ITEM_MAP, OFFICIAL_EDITAL } from '../data/edital';
import { INITIAL_QUESTIONS } from '../data/questionBank';
import {
  renderFormattedMultiline,
  renderInlineFormatted,
  stripItemPrefix,
} from '../lib/formatText';
import { EditalItem, Question, StudyStatus } from '../types/edital';

interface QuestionBankViewProps {
  itemStatuses: Record<string, StudyStatus>;
}

type AnswerDisplayMode = 'junto' | 'final';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

function isStudied(status: StudyStatus | undefined): boolean {
  return Boolean(status && status !== 'nao_iniciado');
}

function findFirstStudiedAxisId(itemStatuses: Record<string, StudyStatus>): string {
  for (const axis of OFFICIAL_EDITAL.axes) {
    for (const section of axis.sections) {
      if (section.items.some((item) => isStudied(itemStatuses[item.id]))) {
        return axis.id;
      }
    }
  }
  return OFFICIAL_EDITAL.axes[0]?.id ?? '1';
}

function cleanAxisTitle(title: string): string {
  return title.replace(/\.$/, '').trim();
}

function cleanItemTitle(item: EditalItem): string {
  return item.title.replace(/^\d+\.\d+\.\s*/, '').trim();
}

function getAnswerExplanation(q: Question): string {
  const raw = q.correctAnalysis?.trim() || q.explanation;
  return stripItemPrefix(raw);
}

export function QuestionBankView({ itemStatuses }: QuestionBankViewProps) {
  const [selectedAxisId, setSelectedAxisId] = useState<string>(() =>
    findFirstStudiedAxisId(itemStatuses)
  );
  const userSelectedAxisRef = useRef(false);
  const [onlyStudied, setOnlyStudied] = useState<boolean>(true);
  const [answerMode, setAnswerMode] = useState<AnswerDisplayMode>('junto');

  // Caso os status cheguem depois (ex.: sincronização), seleciona o primeiro eixo estudado se o usuário ainda não escolheu outro.
  useEffect(() => {
    if (userSelectedAxisRef.current) return;
    const currentAxis = OFFICIAL_EDITAL.axes.find((a) => a.id === selectedAxisId);
    const currentHasStudied = currentAxis?.sections.some((sec) =>
      sec.items.some((item) => isStudied(itemStatuses[item.id]))
    );
    if (!currentHasStudied) {
      const firstStudied = findFirstStudiedAxisId(itemStatuses);
      if (firstStudied !== selectedAxisId) {
        setSelectedAxisId(firstStudied);
      }
    }
  }, [itemStatuses, selectedAxisId]);

  const selectedAxis = useMemo(
    () =>
      OFFICIAL_EDITAL.axes.find((axis) => axis.id === selectedAxisId) ??
      OFFICIAL_EDITAL.axes[0],
    [selectedAxisId]
  );

  const questionsByItemId = useMemo(() => {
    const map = new Map<string, Question[]>();
    for (const q of INITIAL_QUESTIONS) {
      const list = map.get(q.editalItemId);
      if (list) {
        list.push(q);
      } else {
        map.set(q.editalItemId, [q]);
      }
    }
    return map;
  }, []);

  const { groups, totalQuestions, sequentialItems } = useMemo(() => {
    const orderedItems = selectedAxis.sections.flatMap((section) => section.items);
    const nextGroups: Array<{
      item: EditalItem;
      questions: Array<{ number: number; question: Question }>;
    }> = [];
    const flatList: Array<{ number: number; item: EditalItem; question: Question }> = [];
    let counter = 1;

    for (const item of orderedItems) {
      if (onlyStudied && !isStudied(itemStatuses[item.id])) {
        continue;
      }
      const itemQuestions = questionsByItemId.get(item.id) ?? [];
      if (itemQuestions.length === 0) {
        continue;
      }
      const numbered = itemQuestions.map((question) => {
        const entry = { number: counter++, question };
        flatList.push({ number: entry.number, item, question });
        return entry;
      });
      nextGroups.push({ item, questions: numbered });
    }

    return {
      groups: nextGroups,
      totalQuestions: counter - 1,
      sequentialItems: flatList,
    };
  }, [selectedAxis, onlyStudied, itemStatuses, questionsByItemId]);

  const studiedCountByAxis = useMemo(() => {
    const counts = new Map<string, number>();
    for (const axis of OFFICIAL_EDITAL.axes) {
      let c = 0;
      for (const sec of axis.sections) {
        for (const item of sec.items) {
          if (isStudied(itemStatuses[item.id])) c++;
        }
      }
      counts.set(axis.id, c);
    }
    return counts;
  }, [itemStatuses]);

  const countLabel = `${totalQuestions} ${
    totalQuestions === 1 ? 'questão' : 'questões'
  } em ${groups.length} ${groups.length === 1 ? 'item' : 'itens'}`;

  const generatedAtLabel = useMemo(() => {
    return new Date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }, [selectedAxisId, onlyStudied, answerMode, totalQuestions]);

  const printDocTitle = `Rede SARAH — Eixo ${selectedAxis.number}: ${cleanAxisTitle(
    selectedAxis.title
  )} (${onlyStudied ? 'itens estudados' : 'todos os itens'})`;

  const handleSelectAxis = (axisId: string) => {
    userSelectedAxisRef.current = true;
    setSelectedAxisId(axisId);
  };

  return (
    <div className="space-y-6 print-surface">
      {/* Cabeçalho exclusivo para impressão / PDF */}
      <div className="hidden print-only border-b border-slate-300 pb-3 mb-4">
        <h1 className="font-display text-lg font-bold text-black">{printDocTitle}</h1>
        <p className="text-xs text-black mt-1">
          Gerado em {generatedAtLabel} · {countLabel}
        </p>
      </div>

      {/* Painel de filtros e ações (oculto na impressão) */}
      <section className="no-print rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4 sm:p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="flex-1 min-w-0 space-y-1.5">
            <label
              htmlFor="bank-axis-select"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              Eixo do edital
            </label>
            <select
              id="bank-axis-select"
              value={selectedAxis.id}
              onChange={(e) => handleSelectAxis(e.target.value)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {OFFICIAL_EDITAL.axes.map((axis) => {
                const studiedInAxis = studiedCountByAxis.get(axis.id) ?? 0;
                return (
                  <option key={axis.id} value={axis.id}>
                    Eixo {axis.number} — {cleanAxisTitle(axis.title)} ({studiedInAxis} estudado
                    {studiedInAxis === 1 ? '' : 's'})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Gabarito
              </span>
              <div
                role="group"
                aria-label="Modo de exibição do gabarito"
                className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-0.5"
              >
                <button
                  type="button"
                  onClick={() => setAnswerMode('junto')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    answerMode === 'junto'
                      ? 'bg-sky-600 text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Junto da questão
                </button>
                <button
                  type="button"
                  onClick={() => setAnswerMode('final')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    answerMode === 'final'
                      ? 'bg-sky-600 text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Ao final do eixo
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              disabled={totalQuestions === 0}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors whitespace-nowrap self-end"
            >
              <Printer className="w-4 h-4" />
              Imprimir / Salvar PDF
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <label className="inline-flex items-center gap-2.5 cursor-pointer select-none text-sm text-slate-800 dark:text-slate-200">
            <input
              type="checkbox"
              checked={onlyStudied}
              onChange={(e) => setOnlyStudied(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-sky-600 focus:ring-sky-500"
            />
            <span>Somente itens já estudados</span>
          </label>

          <div className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 tabular-nums">
            {countLabel}
          </div>
        </div>
      </section>

      {/* Estado vazio */}
      {groups.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-8 text-center space-y-2">
          <BookOpen className="w-7 h-7 mx-auto text-slate-400" />
          <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Nenhum item deste eixo está marcado como estudado. Marque o status na aba Edital ou
            desligue o filtro.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {groups.map(({ item, questions }) => (
            <section key={item.id} className="space-y-4">
              <div className="print-item-header flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b-2 border-sky-600/80 dark:border-sky-500/60 print:border-slate-400">
                <h2 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.id} — {cleanItemTitle(item)}
                </h2>
                <span className="no-print text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                  {questions.length} {questions.length === 1 ? 'questão' : 'questões'}
                </span>
              </div>

              <div className="space-y-5">
                {questions.map(({ number, question }) => {
                  const correctLetter = OPTION_LETTERS[question.correctIndex] ?? 'A';
                  const answerText = getAnswerExplanation(question);
                  return (
                    <article
                      key={question.id}
                      className="print-question rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 sm:p-5 space-y-3.5"
                    >
                      <div className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-slate-900 dark:text-slate-100">
                        <span className="font-mono font-bold text-sky-700 dark:text-sky-400 shrink-0 tabular-nums">
                          {number}.
                        </span>
                        <div className="min-w-0 flex-1">
                          {renderFormattedMultiline(question.statement)}
                        </div>
                      </div>

                      <ul className="space-y-1.5 pl-0 sm:pl-6 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                        {question.options.map((opt, idx) => {
                          const letter = OPTION_LETTERS[idx] ?? String(idx + 1);
                          return (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="font-mono text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 shrink-0 mt-0.5">
                                {letter})
                              </span>
                              <span className="min-w-0 flex-1">
                                {renderInlineFormatted(opt)}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {answerMode === 'junto' && (
                        <div className="print-box rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/30 px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                          <span className="font-semibold text-emerald-800 dark:text-emerald-300 mr-1.5">
                            Resposta: {correctLetter}
                          </span>
                          <span>— {renderInlineFormatted(answerText)}</span>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

          {answerMode === 'final' && sequentialItems.length > 0 && (
            <section className="print-answer-section pt-4 border-t-2 border-slate-300 dark:border-slate-700 space-y-4">
              <h2 className="print-item-header font-display text-lg font-bold text-slate-900 dark:text-slate-100">
                Gabarito comentado
              </h2>

              <div className="space-y-3">
                {sequentialItems.map(({ number, item, question }) => {
                  const correctLetter = OPTION_LETTERS[question.correctIndex] ?? 'A';
                  const answerText = getAnswerExplanation(question);
                  const itemCode = EDITAL_ITEM_MAP[question.editalItemId]?.id ?? item.id;
                  return (
                    <div
                      key={question.id}
                      className="print-question print-box rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-4 py-3 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200"
                    >
                      <span className="font-mono font-bold text-slate-900 dark:text-slate-100 mr-1.5 tabular-nums">
                        {number}.
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400 mr-2">
                        ({itemCode})
                      </span>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-300 mr-1.5">
                        Resposta: {correctLetter}
                      </span>
                      <span>— {renderInlineFormatted(answerText)}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
