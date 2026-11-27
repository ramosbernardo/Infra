import { Cloud, CloudOff, Menu, X } from 'lucide-react';
import type { CloudStatus } from '../hooks/useStudyStore';
import { useState } from 'react';

export type AppTab = 'edital' | 'caderno' | 'mapa' | 'simulados' | 'banco' | 'desempenho';

interface TopNavProps {
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  onStartQuickExam: () => void;
  cloudStatus?: CloudStatus;
}

const NAV_ITEMS: { id: AppTab; label: string }[] = [
  { id: 'edital', label: 'Edital' },
  { id: 'caderno', label: 'Caderno & SRS' },
  { id: 'mapa', label: 'Mapa mental' },
  { id: 'simulados', label: 'Simulados' },
  { id: 'banco', label: 'Banco de Questões' },
  { id: 'desempenho', label: 'Desempenho' },
];

const CLOUD_META: Record<CloudStatus, { label: string; cls: string }> = {
  desconectado: { label: 'Nuvem desconectada', cls: 'text-slate-400' },
  sincronizando: { label: 'Sincronizando…', cls: 'text-sky-500 animate-pulse' },
  sincronizado: { label: 'Progresso salvo na nuvem', cls: 'text-emerald-500' },
  erro: { label: 'Erro na sincronização', cls: 'text-rose-500' },
};

export function TopNav({ activeTab, onSelectTab, onStartQuickExam, cloudStatus }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <button
          type="button"
          onClick={() => onSelectTab('edital')}
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
        >
          Edital Infra TI
        </button>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-4 lg:gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[14px] h-0.5 bg-sky-600 dark:bg-sky-400"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          {cloudStatus && (
            <button
              type="button"
              onClick={() => onSelectTab('desempenho')}
              title={CLOUD_META[cloudStatus].label}
              aria-label={CLOUD_META[cloudStatus].label}
              className={`shrink-0 p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${CLOUD_META[cloudStatus].cls}`}
            >
              {cloudStatus === 'desconectado' ? <CloudOff className="w-4 h-4" /> : <Cloud className="w-4 h-4" />}
            </button>
          )}
          <button
            type="button"
            onClick={onStartQuickExam}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            Simulado SARAH
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => {
              onStartQuickExam();
              setMobileOpen(false);
            }}
            className="w-full mt-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
          >
            Novo Simulado
          </button>
        </div>
      )}
    </header>
  );
}
