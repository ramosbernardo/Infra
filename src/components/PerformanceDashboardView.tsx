import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Download,
  FileQuestion,
  Trash2,
  Upload,
} from 'lucide-react';
import { ChangeEvent, useMemo, useRef, useState } from 'react';
import {
  ALL_EDITAL_ITEMS,
  EDITAL_ITEM_MAP,
  OFFICIAL_EDITAL,
} from '../data/edital';
import { APP_FLASHCARDS } from '../data/flashcards/generateFromGuides';
import { Question, UserStudyStore } from '../types/edital';
import type { CloudState } from '../hooks/useStudyStore';
import { CloudSyncPanel } from './CloudSyncPanel';

interface PerformanceDashboardViewProps {
  store: UserStudyStore;
  allQuestions: readonly Question[];
  onOpenNotebook: (itemId: string) => void;
  onStartTopicExam: (itemId: string) => void;
  onExportJson: () => string;
  onImportJson: (jsonText: string) => { ok: boolean; message: string };
  onResetStore: () => void;
  cloud: CloudState;
  onCloudSendLink: (email: string) => Promise<{ ok: boolean; message: string }>;
  onCloudSyncNow: () => Promise<void>;
  onCloudSignOut: () => Promise<void>;
}

export function PerformanceDashboardView({
  store,
  allQuestions,
  onOpenNotebook,
  onStartTopicExam,
  onExportJson,
  onImportJson,
  onResetStore,
  cloud,
  onCloudSendLink,
  onCloudSyncNow,
  onCloudSignOut,
}: PerformanceDashboardViewProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importFeedback, setImportFeedback] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const questionIdsByItem = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of allQuestions) {
      counts[q.editalItemId] = (counts[q.editalItemId] ?? 0) + 1;
    }
    return counts;
  }, [allQuestions]);

  const itemStats = useMemo(() => {
    const acc: Record<string, { answered: number; correct: number }> = {};
    for (const session of store.quizHistory) {
      for (const ans of session.answers) {
        if (ans.selectedIndex === null) continue;
        const prev = acc[ans.editalItemId] ?? { answered: 0, correct: 0 };
        acc[ans.editalItemId] = {
          answered: prev.answered + 1,
          correct: prev.correct + (ans.isCorrect ? 1 : 0),
        };
      }
    }
    return acc;
  }, [store.quizHistory]);

  const overallMetrics = useMemo(() => {
    let totalAnswered = 0;
    let totalCorrect = 0;
    for (const st of Object.values(itemStats)) {
      totalAnswered += st.answered;
      totalCorrect += st.correct;
    }
    const accuracy =
      totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null;

    const dominatedCount = ALL_EDITAL_ITEMS.filter(
      (i) => store.itemStatuses[i.id] === 'dominado'
    ).length;

    const now = Date.now();
    const dueSrsCount = APP_FLASHCARDS.filter((card) => {
      const p = store.srsProgress[card.id];
      return !p || p.nextReviewAt <= now;
    }).length;

    return {
      totalAnswered,
      totalCorrect,
      accuracy,
      sessionsCount: store.quizHistory.length,
      dominatedCount,
      dueSrsCount,
    };
  }, [itemStats, store.itemStatuses, store.quizHistory.length, store.srsProgress]);

  const axisBreakdown = useMemo(() => {
    return OFFICIAL_EDITAL.axes.map((axis) => {
      const axisItems = axis.sections.flatMap((s) => s.items);
      const dominated = axisItems.filter(
        (i) => store.itemStatuses[i.id] === 'dominado'
      ).length;
      const masteryPct = Math.round((dominated / axisItems.length) * 100);

      let answered = 0;
      let correct = 0;
      for (const it of axisItems) {
        const st = itemStats[it.id];
        if (st) {
          answered += st.answered;
          correct += st.correct;
        }
      }
      const accuracyPct =
        answered > 0 ? Math.round((correct / answered) * 100) : null;

      return {
        axis,
        totalItems: axisItems.length,
        dominated,
        masteryPct,
        answered,
        correct,
        accuracyPct,
      };
    });
  }, [itemStats, store.itemStatuses]);

  const reviewQueue = useMemo(() => {
    const now = Date.now();
    const dueCardItems = new Set(
      APP_FLASHCARDS.filter((card) => {
        const p = store.srsProgress[card.id];
        return p && p.nextReviewAt <= now;
      }).map((c) => c.itemId)
    );

    const queue: {
      itemId: string;
      literalText: string;
      reason: string;
      priority: number;
      accuracyPct: number | null;
    }[] = [];

    for (const item of ALL_EDITAL_ITEMS) {
      const st = itemStats[item.id];
      const status = store.itemStatuses[item.id] ?? 'nao_iniciado';
      const accuracyPct =
        st && st.answered > 0 ? Math.round((st.correct / st.answered) * 100) : null;

      const reasons: string[] = [];
      let priority = 0;

      if (accuracyPct !== null && accuracyPct < 70) {
        reasons.push(`Acerto ${accuracyPct}% (<70%)`);
        priority += 100 - accuracyPct;
      }
      if (status === 'revisar') {
        reasons.push('Marcado como Revisar');
        priority += 40;
      }
      if (dueCardItems.has(item.id)) {
        reasons.push('Flashcard SRS vencido');
        priority += 25;
      }

      if (reasons.length > 0) {
        queue.push({
          itemId: item.id,
          literalText: item.literalText,
          reason: reasons.join(' · '),
          priority,
          accuracyPct,
        });
      }
    }

    return queue.sort((a, b) => b.priority - a.priority);
  }, [itemStats, store.itemStatuses, store.srsProgress]);

  const handleDownloadJson = () => {
    const content = onExportJson();
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `edital-infra-ti-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileImport = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const result = onImportJson(text);
    setImportFeedback(result);
    e.target.value = '';
  };

  return (
    <div className="space-y-6">
      {/* KPIs globais */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Taxa de acerto global
          </div>
          <div className="mt-1.5 font-mono text-2xl font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
            {overallMetrics.accuracy !== null ? `${overallMetrics.accuracy}%` : '—'}
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            {overallMetrics.totalCorrect}/{overallMetrics.totalAnswered} questões respondidas
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Simulados concluídos
          </div>
          <div className="mt-1.5 font-mono text-2xl font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
            {overallMetrics.sessionsCount}
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Histórico persistido localmente
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Cobertura do edital
          </div>
          <div className="mt-1.5 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
            {Math.round((overallMetrics.dominatedCount / ALL_EDITAL_ITEMS.length) * 100)}%
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            {overallMetrics.dominatedCount}/{ALL_EDITAL_ITEMS.length} itens dominados
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-5">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fila de revisão SRS
          </div>
          <div className="mt-1.5 font-mono text-2xl font-semibold text-sky-600 dark:text-sky-400 tabular-nums">
            {overallMetrics.dueSrsCount}
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Flashcards pendentes hoje
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Fila automática de revisão */}
        <section className="lg:col-span-7 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                Fila Automática de Revisão
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Prioriza tópicos com acerto &lt; 70%, marcados como "Revisar" ou com SRS vencido.
              </p>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              {reviewQueue.length} {reviewQueue.length === 1 ? 'item' : 'itens'}
            </span>
          </div>

          {reviewQueue.length === 0 ? (
            <div className="p-8 text-center space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Nenhum ponto crítico na fila de revisão
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Realize simulados ou marque tópicos como "Revisar" na árvore do edital para alimentar esta fila automaticamente.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-[440px] overflow-y-auto">
              {reviewQueue.map((entry) => {
                const qCount = questionIdsByItem[entry.itemId] ?? 0;
                return (
                  <div
                    key={entry.itemId}
                    className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="min-w-0 space-y-0.5">
                      <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                        {entry.reason}
                      </div>
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400 mr-2">
                          {entry.itemId}
                        </span>
                        {entry.literalText}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => onOpenNotebook(entry.itemId)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Caderno
                      </button>
                      {qCount > 0 && (
                        <button
                          type="button"
                          onClick={() => onStartTopicExam(entry.itemId)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-950/60 whitespace-nowrap"
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
          )}
        </section>

        {/* Backup JSON e Manutenção */}
        <section className="lg:col-span-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-5">
          <CloudSyncPanel
            cloud={cloud}
            onSendLink={onCloudSendLink}
            onSyncNow={onCloudSyncNow}
            onSignOut={onCloudSignOut}
          />

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
              Backup e Portabilidade (JSON)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Exporte seu checklist, anotações pessoais, progresso SRS, histórico de simulados e questões personalizadas.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              Exportar Backup JSON
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Upload className="w-4 h-4" />
              Importar Backup JSON
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileImport}
              className="hidden"
            />
          </div>

          {importFeedback && (
            <div
              className={`p-3 rounded-lg border text-xs ${
                importFeedback.ok
                  ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200'
                  : 'border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200'
              }`}
            >
              {importFeedback.message}
            </div>
          )}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            {!confirmReset ? (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 hover:underline"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Limpar todo o progresso (local e nuvem)
              </button>
            ) : (
              <div className="p-3.5 rounded-lg border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 dark:text-rose-300">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  Confirmar exclusão do progresso local?
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onResetStore();
                      setConfirmReset(false);
                      setImportFeedback(null);
                    }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-md bg-rose-600 hover:bg-rose-500 text-white"
                  >
                    Sim, zerar dados
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="px-3 py-1.5 text-xs font-medium rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Tabela de desempenho pelos 16 eixos */}
      <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            Cobertura e Taxa de Acerto por Eixo do Edital
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-500 dark:text-slate-400">
                <th className="py-3 px-6">Eixo Oficial</th>
                <th className="py-3 px-4 text-right">Itens</th>
                <th className="py-3 px-4 text-right">Domínio</th>
                <th className="py-3 px-4 text-right">Respondidas</th>
                <th className="py-3 px-6 text-right">Acerto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {axisBreakdown.map((row) => (
                <tr
                  key={row.axis.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="py-3 px-6 font-medium text-slate-900 dark:text-slate-100">
                    {row.axis.literalTitle}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-xs text-slate-600 dark:text-slate-400 tabular-nums">
                    {row.dominated}/{row.totalItems}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-xs text-slate-700 dark:text-slate-300 tabular-nums">
                    {row.masteryPct}%
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-xs text-slate-600 dark:text-slate-400 tabular-nums">
                    {row.answered}
                  </td>
                  <td
                    className={`py-3 px-6 text-right font-mono text-xs font-semibold tabular-nums ${
                      row.accuracyPct === null
                        ? 'text-slate-400'
                        : row.accuracyPct >= 70
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {row.accuracyPct !== null ? `${row.accuracyPct}%` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Histórico recente */}
      {store.quizHistory.length > 0 && (
        <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
              Últimos Simulados Realizados
            </h2>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {store.quizHistory.slice(0, 8).map((sim) => {
              const pct =
                sim.totalQuestions > 0
                  ? Math.round((sim.correctCount / sim.totalQuestions) * 100)
                  : 0;
              return (
                <div
                  key={sim.id}
                  className="px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-sm"
                >
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      {sim.scopeLabel}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                      {new Date(sim.createdAt).toLocaleString('pt-BR')} ·{' '}
                      {Math.floor(sim.durationSeconds / 60)}m {sim.durationSeconds % 60}s
                    </div>
                  </div>
                  <div className="font-mono text-sm font-semibold tabular-nums text-slate-800 dark:text-slate-200">
                    {sim.correctCount}/{sim.totalQuestions} ({pct}%)
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
