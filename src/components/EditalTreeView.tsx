import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Clock,
  FileQuestion,
  RotateCcw,
  Search,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  ALL_EDITAL_ITEMS,
  OFFICIAL_EDITAL,
  normalizeSearchText,
} from '../data/edital';
import { Question, StudyStatus } from '../types/edital';

interface EditalTreeViewProps {
  itemStatuses: Record<string, StudyStatus>;
  itemNotes: Record<string, string>;
  allQuestions: readonly Question[];
  onChangeStatus: (itemId: string, status: StudyStatus) => void;
  onOpenNotebook: (itemId: string) => void;
  onStartTopicExam: (itemId: string) => void;
}

const STATUS_META: Record<
  StudyStatus,
  { label: string; textClass: string; bgClass: string }
> = {
  nao_iniciado: {
    label: 'Não iniciado',
    textClass: 'text-slate-500 dark:text-slate-400',
    bgClass: 'bg-slate-100 dark:bg-slate-800/70',
  },
  em_estudo: {
    label: 'Em estudo',
    textClass: 'text-sky-700 dark:text-sky-300',
    bgClass: 'bg-sky-50 dark:bg-sky-950/60',
  },
  revisar: {
    label: 'Revisar',
    textClass: 'text-amber-700 dark:text-amber-300',
    bgClass: 'bg-amber-50 dark:bg-amber-950/60',
  },
  dominado: {
    label: 'Dominado',
    textClass: 'text-emerald-700 dark:text-emerald-300',
    bgClass: 'bg-emerald-50 dark:bg-emerald-950/60',
  },
};

export function EditalTreeView({
  itemStatuses,
  itemNotes,
  allQuestions,
  onChangeStatus,
  onOpenNotebook,
  onStartTopicExam,
}: EditalTreeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [axisFilter, setAxisFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<StudyStatus | 'all'>('all');
  const [expandedAxes, setExpandedAxes] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(OFFICIAL_EDITAL.axes.map((a) => [a.id, a.number <= 2]))
  );

  const questionsCountByItem = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of allQuestions) {
      counts[q.editalItemId] = (counts[q.editalItemId] ?? 0) + 1;
    }
    return counts;
  }, [allQuestions]);

  const stats = useMemo(() => {
    const total = ALL_EDITAL_ITEMS.length;
    let dominado = 0;
    let emEstudo = 0;
    let revisar = 0;
    let naoIniciado = 0;

    for (const item of ALL_EDITAL_ITEMS) {
      const st = itemStatuses[item.id] ?? 'nao_iniciado';
      if (st === 'dominado') dominado += 1;
      else if (st === 'em_estudo') emEstudo += 1;
      else if (st === 'revisar') revisar += 1;
      else naoIniciado += 1;
    }

    const coveragePct = total > 0 ? Math.round((dominado / total) * 100) : 0;
    const activeStudyPct =
      total > 0 ? Math.round(((dominado + emEstudo + revisar) / total) * 100) : 0;

    return {
      total,
      dominado,
      emEstudo,
      revisar,
      naoIniciado,
      coveragePct,
      activeStudyPct,
    };
  }, [itemStatuses]);

  const normalizedQuery = normalizeSearchText(searchQuery);

  const filteredAxes = useMemo(() => {
    return OFFICIAL_EDITAL.axes
      .filter((axis) => axisFilter === 'all' || axis.id === axisFilter)
      .map((axis) => {
        const axisMatches =
          !normalizedQuery ||
          normalizeSearchText(axis.literalTitle).includes(normalizedQuery);

        const filteredSections = axis.sections
          .map((section) => {
            const filteredItems = section.items.filter((item) => {
              const st = itemStatuses[item.id] ?? 'nao_iniciado';
              if (statusFilter !== 'all' && st !== statusFilter) return false;
              if (!normalizedQuery) return true;
              if (axisMatches) return true;

              const hay = normalizeSearchText(
                [item.id, item.literalText, section.literalText, ...item.keywords].join(' ')
              );
              return hay.includes(normalizedQuery);
            });

            return {
              ...section,
              items: filteredItems,
            };
          })
          .filter((sec) => sec.items.length > 0);

        return {
          ...axis,
          sections: filteredSections,
        };
      })
      .filter((axis) => axis.sections.length > 0);
  }, [axisFilter, statusFilter, normalizedQuery, itemStatuses]);

  const totalMatchingItems = useMemo(
    () =>
      filteredAxes.reduce(
        (acc, axis) =>
          acc + axis.sections.reduce((sAcc, s) => sAcc + s.items.length, 0),
        0
      ),
    [filteredAxes]
  );

  const isOutOfScopeQuery = normalizedQuery.length >= 2 && totalMatchingItems === 0 && statusFilter === 'all' && axisFilter === 'all';

  const toggleAxis = (axisId: string) => {
    setExpandedAxes((prev) => ({
      ...prev,
      [axisId]: !prev[axisId],
    }));
  };

  const expandAll = () => {
    setExpandedAxes(
      Object.fromEntries(OFFICIAL_EDITAL.axes.map((a) => [a.id, true]))
    );
  };

  const collapseAll = () => {
    setExpandedAxes(
      Object.fromEntries(OFFICIAL_EDITAL.axes.map((a) => [a.id, false]))
    );
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho oficial do edital e métricas de cobertura */}
      <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {OFFICIAL_EDITAL.version} · 16 eixos · {stats.total} tópicos rastreáveis
            </p>
            <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
              {OFFICIAL_EDITAL.heading}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Árvore programática 100% literal. Acompanhe o domínio por tópico, abra o caderno técnico ou dispare simulados vinculados diretamente ao item oficial.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Domínio real</div>
              <div className="mt-1 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
                {stats.coveragePct}%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                {stats.dominado}/{stats.total} itens
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Em estudo</div>
              <div className="mt-1 font-mono text-2xl font-semibold text-sky-600 dark:text-sky-400 tabular-nums">
                {stats.emEstudo}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                {stats.activeStudyPct}% tocado
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Revisar</div>
              <div className="mt-1 font-mono text-2xl font-semibold text-amber-600 dark:text-amber-400 tabular-nums">
                {stats.revisar}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Prioridade</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Não iniciado</div>
              <div className="mt-1 font-mono text-2xl font-semibold text-slate-700 dark:text-slate-300 tabular-nums">
                {stats.naoIniciado}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Pendente</div>
            </div>
          </div>
        </div>

        {/* Barra de progresso global */}
        <div className="mt-5">
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
            <div
              className="bg-emerald-500 transition-all duration-200"
              style={{ width: `${(stats.dominado / stats.total) * 100}%` }}
            />
            <div
              className="bg-sky-500 transition-all duration-200"
              style={{ width: `${(stats.emEstudo / stats.total) * 100}%` }}
            />
            <div
              className="bg-amber-500 transition-all duration-200"
              style={{ width: `${(stats.revisar / stats.total) * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* Filtros, Busca e Verificador de Escopo do Edital */}
      <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-4 space-y-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar no edital ou verificar se um tema consta no escopo (ex: BGP, LGPD, VLAN, Kubernetes)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <select
            aria-label="Filtrar por eixo do edital"
            value={axisFilter}
            onChange={(e) => setAxisFilter(e.target.value)}
            className="px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="all">Todos os 16 eixos</option>
            {OFFICIAL_EDITAL.axes.map((axis) => (
              <option key={axis.id} value={axis.id}>
                {axis.literalTitle}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={expandAll}
              className="px-3 py-2.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap shrink-0 transition-colors"
            >
              Expandir tudo
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="px-3 py-2.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap shrink-0 transition-colors"
            >
              Recolher tudo
            </button>
          </div>
        </div>

        {/* Filtro segmentado de Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            {(
              [
                { id: 'all', label: 'Todos' },
                { id: 'nao_iniciado', label: 'Não iniciado' },
                { id: 'em_estudo', label: 'Em estudo' },
                { id: 'revisar', label: 'Revisar' },
                { id: 'dominado', label: 'Dominado' },
              ] as const
            ).map((tab) => {
              const active = statusFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            Exibindo {totalMatchingItems} de {stats.total} tópicos do edital
          </span>
        </div>
      </section>

      {/* Alerta explícito de tema fora do escopo do edital */}
      {totalMatchingItems === 0 && (
        <section className="border border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                {isOutOfScopeQuery
                  ? 'Tema fora do escopo do edital fornecido'
                  : 'Nenhum item encontrado com os filtros atuais'}
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {isOutOfScopeQuery ? (
                  <>
                    O termo <span className="font-mono font-semibold">"{searchQuery}"</span> não consta no conteúdo programático oficial de <span className="font-medium">{OFFICIAL_EDITAL.heading}</span>. Este aplicativo mantém fidelidade estrita aos 16 eixos oficiais sem inventar conteúdos externos.
                  </>
                ) : (
                  'Ajuste os filtros de eixo, status ou busca para visualizar os itens correspondentes do edital.'
                )}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setAxisFilter('all');
                  setStatusFilter('all');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpar filtros
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Árvore do Edital (100% literal) */}
      <div className="space-y-3">
        {filteredAxes.map((axis) => {
          const allAxisItems = OFFICIAL_EDITAL.axes
            .find((a) => a.id === axis.id)!
            .sections.flatMap((s) => s.items);
          const axisDone = allAxisItems.filter(
            (i) => itemStatuses[i.id] === 'dominado'
          ).length;
          const axisPct = Math.round((axisDone / allAxisItems.length) * 100);
          const isExpanded =
            normalizedQuery.length > 0 ||
            axisFilter !== 'all' ||
            statusFilter !== 'all' ||
            Boolean(expandedAxes[axis.id]);

          return (
            <section
              key={axis.id}
              className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleAxis(axis.id)}
                className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100 truncate">
                      {axis.literalTitle}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                      {allAxisItems.length} itens no edital · {axisDone} dominados
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:block w-28 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-200"
                      style={{ width: `${axisPct}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 tabular-nums w-10 text-right">
                    {axisPct}%
                  </span>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
                  {axis.sections.map((section) => (
                    <div key={section.id} className="p-5 space-y-4">
                      {/* Texto literal integral da seção */}
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {section.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                          {section.literalText}
                        </p>
                      </div>

                      {/* Itens rastreáveis da seção */}
                      <div className="divide-y divide-slate-100 dark:divide-slate-800/80 border-t border-slate-100 dark:border-slate-800">
                        {section.items.map((item) => {
                          const currentStatus: StudyStatus =
                            itemStatuses[item.id] ?? 'nao_iniciado';
                          const statusMeta = STATUS_META[currentStatus];
                          const qCount = questionsCountByItem[item.id] ?? 0;
                          const hasNote = Boolean(itemNotes[item.id]);

                          return (
                            <div
                              key={item.id}
                              className="py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3"
                            >
                              <div className="flex items-start gap-3 min-w-0">
                                <span className="mt-0.5 shrink-0">
                                  {currentStatus === 'dominado' && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                  )}
                                  {currentStatus === 'revisar' && (
                                    <Clock className="w-4 h-4 text-amber-500" />
                                  )}
                                  {currentStatus === 'em_estudo' && (
                                    <BookOpen className="w-4 h-4 text-sky-500" />
                                  )}
                                  {currentStatus === 'nao_iniciado' && (
                                    <Circle className="w-4 h-4 text-slate-400" />
                                  )}
                                </span>

                                <div className="min-w-0 space-y-0.5">
                                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                                      {item.id}
                                    </span>
                                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                      {item.literalText}
                                    </span>
                                  </div>
                                  <div className="text-xs text-slate-500 dark:text-slate-400">
                                    <span className={statusMeta.textClass}>
                                      {statusMeta.label}
                                    </span>
                                    {hasNote && (
                                      <>
                                        <span aria-hidden="true"> · </span>
                                        <span>Com anotações</span>
                                      </>
                                    )}
                                    {qCount > 0 && (
                                      <>
                                        <span aria-hidden="true"> · </span>
                                        <span className="tabular-nums">
                                          {qCount} {qCount === 1 ? 'questão' : 'questões'}
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-2 pl-7 lg:pl-0 shrink-0">
                                <select
                                  aria-label={`Status do item ${item.literalText}`}
                                  value={currentStatus}
                                  onChange={(e) =>
                                    onChangeStatus(
                                      item.id,
                                      e.target.value as StudyStatus
                                    )
                                  }
                                  className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 ${statusMeta.bgClass} ${statusMeta.textClass} focus:outline-none focus:ring-2 focus:ring-sky-500`}
                                >
                                  <option value="nao_iniciado">Não iniciado</option>
                                  <option value="em_estudo">Em estudo</option>
                                  <option value="revisar">Revisar</option>
                                  <option value="dominado">Dominado</option>
                                </select>

                                <button
                                  type="button"
                                  onClick={() => onOpenNotebook(item.id)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap shrink-0 transition-colors"
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                  Caderno
                                </button>

                                {qCount > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => onStartTopicExam(item.id)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-950/60 whitespace-nowrap shrink-0 transition-colors"
                                  >
                                    <FileQuestion className="w-3.5 h-3.5" />
                                    Treinar
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
