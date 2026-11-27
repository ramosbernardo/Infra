import { Moon, Sun } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { ALL_EDITAL_ITEMS, OFFICIAL_EDITAL } from './data/edital';
import { INITIAL_QUESTIONS } from './data/questionBank';
import { APP_FLASHCARDS } from './data/flashcards/generateFromGuides';
import { EditalTreeView } from './components/EditalTreeView';
import { ExamSimulatorView } from './components/ExamSimulatorView';
import { PerformanceDashboardView } from './components/PerformanceDashboardView';
import { QuestionBankView } from './components/QuestionBankView';
import { StudyNotebookView } from './components/StudyNotebookView';
import { AppTab, TopNav } from './components/TopNav';
import { useStudyStore } from './hooks/useStudyStore';

export default function App() {
  const {
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
    cloudSyncNow,
    cloudSignOut,
  } = useStudyStore();

  const initialRoute = useMemo(() => parseRoute(window.location.hash), []);
  const [activeTab, setActiveTabState] = useState<AppTab>(initialRoute.tab);
  const [notebookItemId, setNotebookItemIdState] = useState<string>(
    initialRoute.itemId ?? ALL_EDITAL_ITEMS[0].id
  );
  const [visitedTabs, setVisitedTabs] = useState<Set<AppTab>>(
    () => new Set<AppTab>([initialRoute.tab])
  );
  const scrollByTab = useRef<Partial<Record<AppTab, number>>>({});
  const pendingScroll = useRef<number | null>(null);
  const activeTabRef = useRef<AppTab>(initialRoute.tab);
  const notebookItemRef = useRef<string>(notebookItemId);

  // Mostra uma aba: guarda a rolagem da aba atual e restaura a da aba de destino.
  const showTab = useCallback((tab: AppTab, itemId?: string) => {
    const current = activeTabRef.current;
    scrollByTab.current[current] = window.scrollY;
    if (itemId && itemId !== notebookItemRef.current) {
      notebookItemRef.current = itemId;
      setNotebookItemIdState(itemId);
      // Trocar de item no caderno começa do topo.
      scrollByTab.current.caderno = 0;
    }
    if (tab !== current) {
      activeTabRef.current = tab;
      setActiveTabState(tab);
      setVisitedTabs((prev) => (prev.has(tab) ? prev : new Set(prev).add(tab)));
      pendingScroll.current = scrollByTab.current[tab] ?? 0;
    } else if (itemId) {
      pendingScroll.current = scrollByTab.current[tab] ?? 0;
    }
  }, []);

  // Navegação do usuário: cria uma entrada no histórico para o botão Voltar funcionar.
  const navigate = useCallback(
    (tab: AppTab, itemId?: string) => {
      const targetItem = tab === 'caderno' ? itemId ?? notebookItemRef.current : undefined;
      const hash = buildHash(tab, targetItem);
      if (window.location.hash !== hash) {
        window.history.pushState({ tab, itemId: targetItem }, '', hash);
      }
      showTab(tab, itemId);
    },
    [showTab]
  );

  const setActiveTab = useCallback((tab: AppTab) => navigate(tab), [navigate]);

  // Troca de item dentro do próprio caderno: atualiza o endereço sem empilhar histórico.
  const setNotebookItemId = useCallback(
    (itemId: string) => {
      if (activeTabRef.current === 'caderno') {
        window.history.replaceState({ tab: 'caderno', itemId }, '', buildHash('caderno', itemId));
      }
      notebookItemRef.current = itemId;
      setNotebookItemIdState(itemId);
    },
    []
  );

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Não mexe no endereço enquanto houver retorno do login por link (#access_token=...).
    const hash = window.location.hash;
    if (!hash || hash.startsWith('#/')) {
      const item = initialRoute.tab === 'caderno' ? notebookItemRef.current : undefined;
      window.history.replaceState(
        { tab: initialRoute.tab, itemId: item },
        '',
        buildHash(initialRoute.tab, item)
      );
    }
    const onPop = () => {
      const route = parseRoute(window.location.hash);
      showTab(route.tab, route.itemId ?? undefined);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [initialRoute, showTab]);

  useLayoutEffect(() => {
    if (pendingScroll.current === null) return;
    const y = pendingScroll.current;
    pendingScroll.current = null;
    window.scrollTo(0, y);
  }, [activeTab, notebookItemId]);
  const [presetExamItemId, setPresetExamItemId] = useState<string | null>(null);
  const [presetExamAxisId, setPresetExamAxisId] = useState<string | null>(null);

  const allQuestions = useMemo(
    () => [...store.customQuestions, ...INITIAL_QUESTIONS],
    [store.customQuestions]
  );

  const dueSrsCount = useMemo(() => {
    const now = Date.now();
    return APP_FLASHCARDS.filter((card) => {
      const p = store.srsProgress[card.id];
      return !p || p.nextReviewAt <= now;
    }).length;
  }, [store.srsProgress]);

  const dominatedCount = useMemo(
    () =>
      ALL_EDITAL_ITEMS.filter(
        (item) => store.itemStatuses[item.id] === 'dominado'
      ).length,
    [store.itemStatuses]
  );

  const handleOpenNotebook = (itemId: string) => {
    navigate('caderno', itemId);
  };

  const handleStartTopicExam = (itemId: string) => {
    setPresetExamItemId(itemId);
    setPresetExamAxisId(null);
    navigate('simulados');
  };

  const clearPreset = useCallback(() => {
    setPresetExamItemId(null);
    setPresetExamAxisId(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <TopNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onStartQuickExam={() => {
          setPresetExamItemId(null);
          setPresetExamAxisId(null);
          setActiveTab('simulados');
        }}
        cloudStatus={cloud.status}
      />

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Barra contextual de trabalho abaixo do header */}
        <div className="no-print flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {OFFICIAL_EDITAL.heading}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {dominatedCount}/{ALL_EDITAL_ITEMS.length} itens dominados
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {dueSrsCount} flashcards pendentes
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {allQuestions.length} questões no banco
            </span>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            {store.theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5" />
                Tema claro
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5" />
                Tema escuro
              </>
            )}
          </button>
        </div>

        {visitedTabs.has('edital') && (
          <div hidden={activeTab !== 'edital'}>
          <EditalTreeView
            itemStatuses={store.itemStatuses}
            itemNotes={store.itemNotes}
            allQuestions={allQuestions}
            onChangeStatus={setItemStatus}
            onOpenNotebook={handleOpenNotebook}
            onStartTopicExam={handleStartTopicExam}
          />
          </div>
        )}

        {visitedTabs.has('caderno') && (
          <div hidden={activeTab !== 'caderno'}>
          <StudyNotebookView
            selectedItemId={notebookItemId}
            onSelectItemId={setNotebookItemId}
            itemStatuses={store.itemStatuses}
            itemNotes={store.itemNotes}
            srsProgress={store.srsProgress}
            allQuestions={allQuestions}
            onChangeStatus={setItemStatus}
            onChangeNote={setItemNote}
            onReviewFlashcard={reviewFlashcard}
            onStartTopicExam={handleStartTopicExam}
          />
          </div>
        )}

        {visitedTabs.has('simulados') && (
          <div hidden={activeTab !== 'simulados'}>
          <ExamSimulatorView
            allQuestions={allQuestions}
            quizHistory={store.quizHistory}
            presetItemId={presetExamItemId}
            presetAxisId={presetExamAxisId}
            onClearPreset={clearPreset}
            onRecordSession={recordQuizSession}
            onAddCustomQuestion={addCustomQuestion}
            onOpenNotebook={handleOpenNotebook}
            discursiveDrafts={store.discursiveDrafts}
            discursiveAttempts={store.discursiveAttempts}
            onChangeDiscursiveDraft={setDiscursiveDraft}
            onRecordDiscursiveAttempt={recordDiscursiveAttempt}
          />
          </div>
        )}

        {visitedTabs.has('banco') && (
          <div hidden={activeTab !== 'banco'}>
          <QuestionBankView itemStatuses={store.itemStatuses} />
          </div>
        )}

        {visitedTabs.has('desempenho') && (
          <div hidden={activeTab !== 'desempenho'}>
          <PerformanceDashboardView
            store={store}
            allQuestions={allQuestions}
            onOpenNotebook={handleOpenNotebook}
            onStartTopicExam={handleStartTopicExam}
            onExportJson={exportBackupJson}
            onImportJson={importBackupJson}
            onResetStore={resetStore}
            cloud={cloud}
            onCloudSendLink={cloudSendLink}
            onCloudSyncNow={cloudSyncNow}
            onCloudSignOut={cloudSignOut}
          />
          </div>
        )}
      </main>
    </div>
  );
}

const TAB_IDS: readonly AppTab[] = ['edital', 'caderno', 'simulados', 'banco', 'desempenho'];

function parseRoute(hash: string): { tab: AppTab; itemId: string | null } {
  if (!hash.startsWith('#/')) return { tab: 'edital', itemId: null };
  const [tabPart, itemPart] = hash.slice(2).split('/');
  const tab = (TAB_IDS as readonly string[]).includes(tabPart) ? (tabPart as AppTab) : 'edital';
  const itemId =
    tab === 'caderno' && itemPart && ALL_EDITAL_ITEMS.some((i) => i.id === itemPart)
      ? itemPart
      : null;
  return { tab, itemId };
}

function buildHash(tab: AppTab, itemId?: string): string {
  return tab === 'caderno' && itemId ? `#/caderno/${itemId}` : `#/${tab}`;
}
