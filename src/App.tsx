import { Moon, Sun } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ALL_EDITAL_ITEMS, OFFICIAL_EDITAL } from './data/edital';
import { INITIAL_QUESTIONS } from './data/questionBank';
import { INITIAL_FLASHCARDS } from './data/studyGuides';
import { EditalTreeView } from './components/EditalTreeView';
import { ExamSimulatorView } from './components/ExamSimulatorView';
import { PerformanceDashboardView } from './components/PerformanceDashboardView';
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
  } = useStudyStore();

  const [activeTab, setActiveTab] = useState<AppTab>('edital');
  const [notebookItemId, setNotebookItemId] = useState<string>(
    ALL_EDITAL_ITEMS[0].id
  );
  const [presetExamItemId, setPresetExamItemId] = useState<string | null>(null);
  const [presetExamAxisId, setPresetExamAxisId] = useState<string | null>(null);

  const allQuestions = useMemo(
    () => [...store.customQuestions, ...INITIAL_QUESTIONS],
    [store.customQuestions]
  );

  const dueSrsCount = useMemo(() => {
    const now = Date.now();
    return INITIAL_FLASHCARDS.filter((card) => {
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
    setNotebookItemId(itemId);
    setActiveTab('caderno');
  };

  const handleStartTopicExam = (itemId: string) => {
    setPresetExamItemId(itemId);
    setPresetExamAxisId(null);
    setActiveTab('simulados');
  };

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
      />

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Barra contextual de trabalho abaixo do header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
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

        {activeTab === 'edital' && (
          <EditalTreeView
            itemStatuses={store.itemStatuses}
            itemNotes={store.itemNotes}
            allQuestions={allQuestions}
            onChangeStatus={setItemStatus}
            onOpenNotebook={handleOpenNotebook}
            onStartTopicExam={handleStartTopicExam}
          />
        )}

        {activeTab === 'caderno' && (
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
        )}

        {activeTab === 'simulados' && (
          <ExamSimulatorView
            allQuestions={allQuestions}
            presetItemId={presetExamItemId}
            presetAxisId={presetExamAxisId}
            onClearPreset={() => {
              setPresetExamItemId(null);
              setPresetExamAxisId(null);
            }}
            onRecordSession={recordQuizSession}
            onAddCustomQuestion={addCustomQuestion}
            onOpenNotebook={handleOpenNotebook}
            discursiveDrafts={store.discursiveDrafts}
            discursiveAttempts={store.discursiveAttempts}
            onChangeDiscursiveDraft={setDiscursiveDraft}
            onRecordDiscursiveAttempt={recordDiscursiveAttempt}
          />
        )}

        {activeTab === 'desempenho' && (
          <PerformanceDashboardView
            store={store}
            allQuestions={allQuestions}
            onOpenNotebook={handleOpenNotebook}
            onStartTopicExam={handleStartTopicExam}
            onExportJson={exportBackupJson}
            onImportJson={importBackupJson}
            onResetStore={resetStore}
          />
        )}
      </main>
    </div>
  );
}
