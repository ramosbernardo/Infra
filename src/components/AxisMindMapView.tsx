import { BookOpen, ChevronRight, ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import { KeyboardEvent, useMemo, useState } from 'react';
import { OFFICIAL_EDITAL } from '../data/edital';
import { getStudyGuideForItem } from '../data/studyGuides';
import { StudyStatus } from '../types/edital';
import { FormattedInlineText } from './FormattedInlineText';

interface AxisMindMapViewProps {
  itemStatuses: Record<string, StudyStatus>;
  onOpenNotebook: (itemId: string) => void;
}

const STATUS_META: Record<
  StudyStatus,
  { label: string; dotClass: string }
> = {
  nao_iniciado: {
    label: 'Não iniciado',
    dotClass: 'bg-slate-400 dark:bg-slate-500 print:border print:border-slate-500',
  },
  em_estudo: {
    label: 'Em estudo',
    dotClass: 'bg-sky-500 print:border print:border-sky-700',
  },
  revisar: {
    label: 'Revisar',
    dotClass: 'bg-amber-500 print:border print:border-amber-700',
  },
  dominado: {
    label: 'Dominado',
    dotClass: 'bg-emerald-500 print:border print:border-emerald-700',
  },
};

function cleanPointChipText(rawLine: string): string | null {
  const trimmed = rawLine.trim();
  if (
    trimmed.startsWith('Definição e escopo') ||
    trimmed.startsWith('Exemplo operacional')
  ) {
    return null;
  }

  const colonIdx = trimmed.indexOf(':');
  const beforeColon = colonIdx >= 0 ? trimmed.slice(0, colonIdx) : trimmed;
  const cleaned = beforeColon
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\s*\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) return null;
  if (cleaned.length <= 48) return cleaned;

  const slice = cleaned.slice(0, 47);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace >= 24 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}

interface ParsedKeyTerm {
  term: string;
  definition: string | null;
}

function parseKeyTerm(rawTerm: string): ParsedKeyTerm {
  const colonIdx = rawTerm.indexOf(':');
  if (colonIdx <= 0) {
    return {
      term: rawTerm.replace(/\*\*/g, '').replace(/`/g, '').trim(),
      definition: null,
    };
  }
  return {
    term: rawTerm.slice(0, colonIdx).replace(/\*\*/g, '').replace(/`/g, '').trim(),
    definition: rawTerm.slice(colonIdx + 1).trim(),
  };
}

export function AxisMindMapView({
  itemStatuses,
  onOpenNotebook,
}: AxisMindMapViewProps) {
  const [selectedAxisId, setSelectedAxisId] = useState<string>(
    OFFICIAL_EDITAL.axes[0]?.id ?? '1'
  );
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());
  const [openGlossary, setOpenGlossary] = useState<{
    itemId: string;
    index: number;
  } | null>(null);

  const selectedAxis = useMemo(
    () =>
      OFFICIAL_EDITAL.axes.find((ax) => ax.id === selectedAxisId) ??
      OFFICIAL_EDITAL.axes[0],
    [selectedAxisId]
  );

  const axisItemIds = useMemo(
    () => selectedAxis.sections.flatMap((sec) => sec.items.map((it) => it.id)),
    [selectedAxis]
  );

  const handleToggleItem = (itemId: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
        setOpenGlossary((curr) => (curr?.itemId === itemId ? null : curr));
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const handleItemKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
    itemId: string
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleItem(itemId);
    }
  };

  const handleToggleGlossary = (itemId: string, index: number) => {
    setOpenGlossary((prev) =>
      prev && prev.itemId === itemId && prev.index === index
        ? null
        : { itemId, index }
    );
  };

  const handleGlossaryKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
    itemId: string,
    index: number
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleGlossary(itemId, index);
    }
  };

  const handleExpandAll = () => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      axisItemIds.forEach((id) => next.add(id));
      return next;
    });
  };

  const handleCollapseAll = () => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      axisItemIds.forEach((id) => next.delete(id));
      return next;
    });
    setOpenGlossary((curr) =>
      curr && axisItemIds.includes(curr.itemId) ? null : curr
    );
  };

  const rootTitle = `Eixo ${selectedAxis.number} — ${selectedAxis.title.replace(/\.$/, '')}`;

  return (
    <div className="space-y-5 print-surface">
      {/* Controles superiores: seletor de eixo, ações e legenda */}
      <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4 print:bg-white print:border-slate-300 print-surface">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="no-print flex-1 min-w-0">
            <label
              htmlFor="axis-mindmap-select"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5"
            >
              Eixo do Edital
            </label>
            <select
              id="axis-mindmap-select"
              value={selectedAxis.id}
              onChange={(e) => {
                setSelectedAxisId(e.target.value);
                setOpenGlossary(null);
              }}
              className="w-full sm:max-w-md px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {OFFICIAL_EDITAL.axes.map((ax) => (
                <option key={ax.id} value={ax.id}>
                  {ax.literalTitle}
                </option>
              ))}
            </select>
          </div>

          <div className="no-print flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleExpandAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
              Expandir tudo
            </button>
            <button
              type="button"
              onClick={handleCollapseAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              <ChevronsDownUp className="w-3.5 h-3.5" />
              Recolher tudo
            </button>
          </div>
        </div>

        {/* Legenda de status */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 print:border-slate-200 print:text-black">
          <span className="font-medium text-slate-700 dark:text-slate-300 print:text-black">
            Status:
          </span>
          {(Object.keys(STATUS_META) as StudyStatus[]).map((statusKey) => (
            <span key={statusKey} className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className={`w-2.5 h-2.5 rounded-full shrink-0 [print-color-adjust:exact] ${STATUS_META[statusKey].dotClass}`}
              />
              <span>{STATUS_META[statusKey].label}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Árvore hierárquica do Mapa Mental */}
      <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-4 sm:p-6 print:bg-white print:border-slate-300 print-surface">
        {/* Nível 1: Nó raiz */}
        <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-sky-600 dark:bg-sky-500 text-white dark:text-slate-950 font-display text-base sm:text-lg font-bold shadow-xs print:bg-white print:text-black print:border-2 print:border-black">
          {rootTitle}
        </div>

        {/* Ramos das seções ligados por linha vertical */}
        <div className="ml-3 sm:ml-5 pl-4 sm:pl-6 pt-5 border-l-2 border-slate-200 dark:border-slate-700 print:border-slate-400 space-y-6">
          {selectedAxis.sections.map((section) => (
            <div key={section.id} className="relative space-y-3">
              {/* Conector horizontal da seção */}
              <span
                aria-hidden="true"
                className="absolute -left-4 sm:-left-6 top-3 w-3 sm:w-5 h-0.5 bg-slate-200 dark:bg-slate-700 print:bg-slate-400"
              />

              {/* Rótulo de grupo da seção */}
              <div className="inline-block px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 print:bg-white print:text-black print:border-slate-400">
                {section.title}
              </div>

              {/* Nível 2: Itens conectados por linha vertical */}
              <div className="ml-2 sm:ml-4 pl-3 sm:pl-5 border-l-2 border-slate-200 dark:border-slate-800 print:border-slate-300 space-y-2.5">
                {section.items.map((item) => {
                  const status: StudyStatus = itemStatuses[item.id] ?? 'nao_iniciado';
                  const statusMeta = STATUS_META[status];
                  const isExpanded = expandedIds.has(item.id);
                  const guide = getStudyGuideForItem(item.id);
                  const keyPoints = guide.highYieldSummary
                    .map(cleanPointChipText)
                    .filter((v): v is string => v !== null);
                  const parsedTerms = guide.keyTerms.map(parseKeyTerm);
                  const termsWithDef = parsedTerms.filter((t) => t.definition !== null);
                  const activeTerm =
                    openGlossary && openGlossary.itemId === item.id
                      ? parsedTerms[openGlossary.index] ?? null
                      : null;

                  return (
                    <div
                      key={item.id}
                      className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 print:bg-white print:border-slate-300 print:break-inside-avoid"
                    >
                      {/* Conector horizontal do item */}
                      <span
                        aria-hidden="true"
                        className="absolute -left-3 sm:-left-5 top-5 w-3 sm:w-5 h-0.5 bg-slate-200 dark:bg-slate-800 print:bg-slate-300"
                      />

                      {/* Linha clicável do item (div role="button" para permanecer visível em @media print) */}
                      <div
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        onClick={() => handleToggleItem(item.id)}
                        onKeyDown={(e) => handleItemKeyDown(e, item.id)}
                        className="flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl cursor-pointer select-none hover:bg-slate-100/80 dark:hover:bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            title={statusMeta.label}
                            aria-label={`Status: ${statusMeta.label}`}
                            className={`w-2.5 h-2.5 rounded-full shrink-0 [print-color-adjust:exact] ${statusMeta.dotClass}`}
                          />
                          <span className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-400 shrink-0 tabular-nums print:text-black">
                            {item.id}
                          </span>
                          <span className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-snug print:text-black">
                            {item.literalText}
                          </span>
                        </div>

                        <ChevronRight
                          aria-hidden="true"
                          className={`no-print w-4 h-4 text-slate-400 shrink-0 transition-transform duration-150 ${
                            isExpanded ? 'rotate-90 text-sky-500' : ''
                          }`}
                        />
                      </div>

                      {/* Nível 3: Pontos-chave, Glossário e Abrir no Caderno */}
                      <div
                        className={`${
                          isExpanded ? 'block' : 'hidden'
                        } print:block px-3.5 pb-3.5 pt-2.5 border-t border-slate-200/80 dark:border-slate-800/80 space-y-3 print:border-slate-300`}
                      >
                        {keyPoints.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black">
                              Pontos-chave
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {keyPoints.map((pt, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-200 border border-sky-200/80 dark:border-sky-800/70 print:bg-white print:text-black print:border-slate-400"
                                >
                                  {pt}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {parsedTerms.length > 0 && (
                          <div className="space-y-2">
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black">
                              Glossário
                            </div>

                            {/* Chips interativos na tela */}
                            <div className="flex flex-wrap gap-1.5 print:hidden">
                              {parsedTerms.map((entry, idx) => {
                                const isTermOpen =
                                  openGlossary?.itemId === item.id &&
                                  openGlossary.index === idx;
                                const hasDef = entry.definition !== null;

                                if (!hasDef) {
                                  return (
                                    <span
                                      key={idx}
                                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                    >
                                      {entry.term}
                                    </span>
                                  );
                                }

                                return (
                                  <div
                                    key={idx}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isTermOpen}
                                    onClick={() => handleToggleGlossary(item.id, idx)}
                                    onKeyDown={(e) => handleGlossaryKeyDown(e, item.id, idx)}
                                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border cursor-pointer select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                                      isTermOpen
                                        ? 'bg-emerald-600 text-white border-emerald-600 dark:bg-emerald-500 dark:text-slate-950 dark:border-emerald-500'
                                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500'
                                    }`}
                                  >
                                    {entry.term}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Definição aberta ao tocar no chip (máx. 1 por vez na tela) */}
                            {activeTerm && activeTerm.definition && (
                              <div className="print:hidden rounded-lg border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/70 dark:bg-emerald-950/30 p-3 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                                <strong className="font-semibold text-slate-900 dark:text-slate-100">
                                  {activeTerm.term}:{' '}
                                </strong>
                                <FormattedInlineText text={activeTerm.definition} />
                              </div>
                            )}

                            {/* Definições em lista para impressão (@media print) */}
                            <ul className="hidden print:block space-y-1 text-xs leading-relaxed text-black">
                              {termsWithDef.length > 0
                                ? termsWithDef.map((entry, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                      <span aria-hidden="true">•</span>
                                      <span>
                                        <strong>{entry.term}: </strong>
                                        <FormattedInlineText text={entry.definition ?? ''} />
                                      </span>
                                    </li>
                                  ))
                                : parsedTerms.map((entry, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                      <span aria-hidden="true">•</span>
                                      <span>{entry.term}</span>
                                    </li>
                                  ))}
                            </ul>
                          </div>
                        )}

                        <div className="no-print pt-1">
                          <button
                            type="button"
                            onClick={() => onOpenNotebook(item.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Abrir no Caderno
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
