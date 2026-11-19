import { Cloud, CloudOff, LogOut, Mail, RefreshCw } from 'lucide-react';
import { FormEvent, useState } from 'react';
import type { CloudState } from '../hooks/useStudyStore';

interface CloudSyncPanelProps {
  cloud: CloudState;
  onSendLink: (email: string) => Promise<{ ok: boolean; message: string }>;
  onSyncNow: () => Promise<void>;
  onSignOut: () => Promise<void>;
}

const STATUS_LABEL: Record<CloudState['status'], string> = {
  desconectado: 'Desconectado',
  sincronizando: 'Sincronizando…',
  sincronizado: 'Sincronizado',
  erro: 'Erro na sincronização',
};

export function CloudSyncPanel({ cloud, onSendLink, onSyncNow, onSignOut }: CloudSyncPanelProps) {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  const connected = cloud.status !== 'desconectado';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);
    const res = await onSendLink(email);
    setFeedback(res);
    setSending(false);
  };

  const dot =
    cloud.status === 'sincronizado'
      ? 'bg-emerald-500'
      : cloud.status === 'sincronizando'
        ? 'bg-sky-500 animate-pulse'
        : cloud.status === 'erro'
          ? 'bg-rose-500'
          : 'bg-slate-400';

  return (
    <div className="space-y-3">
      <div>
        <h2 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          {connected ? <Cloud className="w-4 h-4" /> : <CloudOff className="w-4 h-4" />}
          Sincronização na nuvem
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Entre com seu e-mail para salvar o progresso automaticamente e continuar em qualquer aparelho.
        </p>
      </div>

      {connected ? (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
            <span className={`inline-block w-2 h-2 rounded-full ${dot}`} />
            <span className="font-semibold">{STATUS_LABEL[cloud.status]}</span>
            {cloud.email && <span className="text-slate-500 dark:text-slate-400">· {cloud.email}</span>}
          </div>
          {cloud.lastSyncAt && (
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Última sincronização: {new Date(cloud.lastSyncAt).toLocaleString('pt-BR')}
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void onSyncNow()}
              disabled={cloud.status === 'sincronizando'}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Sincronizar agora
            </button>
            <button
              type="button"
              onClick={() => void onSignOut()}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sair
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            autoComplete="email"
            className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
          />
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            {sending ? 'Enviando…' : 'Enviar link de acesso'}
          </button>
        </form>
      )}

      {(feedback || cloud.message) && (
        <div
          className={`p-3 rounded-lg border text-xs ${
            (feedback?.ok ?? false) && !cloud.message
              ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200'
              : 'border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200'
          }`}
        >
          {cloud.message ?? feedback?.message}
        </div>
      )}
    </div>
  );
}
