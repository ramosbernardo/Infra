// Sincronização do progresso com o Supabase (Auth por link mágico + tabela study_progress).
// Implementado com fetch puro, sem dependências extras.
// A chave abaixo é a chave PUBLICÁVEL do projeto: pode ficar no front-end.
// A proteção dos dados é feita pelas políticas RLS da tabela (cada usuário só acessa a própria linha).

export const SUPABASE_URL = 'https://ghfowqypszdnljhotcrn.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Sqh6xSw7aDP8iWb3agOzLA_RCmk2Cl3';

const SESSION_KEY = 'infra_cloud_session_v1';

export interface CloudSession {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expiresAt: number; // epoch em segundos
  readonly userId: string;
  readonly email: string;
}

export interface RemoteProgress {
  readonly data: unknown;
  readonly clientUpdatedAt: number;
  readonly updatedAt: string;
}

function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const part = token.split('.')[1];
    if (!part) return null;
    const b64 = part.replace(/-/g, '+').replace(/_/g, '/');
    const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
    const json = decodeURIComponent(
      atob(padded)
        .split('')
        .map((c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('')
    );
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function sessionFromTokens(
  accessToken: string,
  refreshToken: string,
  expiresAt?: number,
  expiresIn?: number
): CloudSession | null {
  const payload = decodeJwtPayload(accessToken);
  if (!payload || typeof payload.sub !== 'string') return null;
  const exp =
    expiresAt ??
    (typeof payload.exp === 'number'
      ? payload.exp
      : Math.floor(Date.now() / 1000) + (expiresIn ?? 3600));
  return {
    accessToken,
    refreshToken,
    expiresAt: exp,
    userId: payload.sub,
    email: typeof payload.email === 'string' ? payload.email : '',
  };
}

export function loadSession(): CloudSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as CloudSession;
    if (!s || typeof s.accessToken !== 'string' || typeof s.refreshToken !== 'string') return null;
    return s;
  } catch {
    return null;
  }
}

function saveSession(s: CloudSession | null) {
  try {
    if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignora erros de armazenamento
  }
}

/**
 * Lê o retorno do link mágico (#access_token=...&refresh_token=...) ou o erro
 * (#error_description=...), salva a sessão e limpa o endereço.
 */
export function consumeAuthRedirect(): { session: CloudSession | null; error: string | null } {
  const hash = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : '';
  if (!hash || (!hash.includes('access_token=') && !hash.includes('error'))) {
    return { session: null, error: null };
  }
  const params = new URLSearchParams(hash);
  const clean = () => {
    try {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } catch {
      // ignora
    }
  };
  const err = params.get('error_description') || params.get('error');
  if (err) {
    clean();
    return { session: null, error: err.replace(/\+/g, ' ') };
  }
  const at = params.get('access_token');
  const rt = params.get('refresh_token');
  clean();
  if (!at || !rt) return { session: null, error: null };
  const expiresAt = Number(params.get('expires_at')) || undefined;
  const expiresIn = Number(params.get('expires_in')) || undefined;
  const session = sessionFromTokens(at, rt, expiresAt, expiresIn);
  if (session) saveSession(session);
  return { session, error: session ? null : 'Não foi possível ler a sessão de login.' };
}

async function readError(res: Response): Promise<string> {
  try {
    const body = (await res.json()) as Record<string, unknown>;
    const msg = body.msg || body.message || body.error_description || body.error;
    if (typeof msg === 'string') return msg;
  } catch {
    // ignora
  }
  return `HTTP ${res.status}`;
}

/** Envia o link de acesso por e-mail. */
export async function sendMagicLink(email: string): Promise<void> {
  const redirectTo = window.location.origin + window.location.pathname;
  const res = await fetch(
    `${SUPABASE_URL}/auth/v1/otp?redirect_to=${encodeURIComponent(redirectTo)}`,
    {
      method: 'POST',
      headers: { apikey: SUPABASE_PUBLISHABLE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, create_user: true }),
    }
  );
  if (!res.ok) {
    const msg = await readError(res);
    if (res.status === 429) {
      throw new Error('Muitos envios em pouco tempo. Aguarde alguns minutos e tente de novo.');
    }
    throw new Error(msg);
  }
}

/** Devolve uma sessão válida, renovando o token quando estiver perto de expirar. */
export async function getValidSession(): Promise<CloudSession | null> {
  const s = loadSession();
  if (!s) return null;
  const now = Math.floor(Date.now() / 1000);
  if (s.expiresAt - now > 60) return s;
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: 'POST',
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: s.refreshToken }),
  });
  if (!res.ok) {
    if (res.status === 400 || res.status === 401 || res.status === 403) {
      saveSession(null); // refresh token inválido: precisa entrar de novo
      return null;
    }
    throw new Error(await readError(res));
  }
  const body = (await res.json()) as {
    access_token: string;
    refresh_token: string;
    expires_at?: number;
    expires_in?: number;
  };
  const next = sessionFromTokens(
    body.access_token,
    body.refresh_token,
    body.expires_at,
    body.expires_in
  );
  saveSession(next);
  return next;
}

export async function signOut(): Promise<void> {
  const s = loadSession();
  saveSession(null);
  if (!s) return;
  try {
    await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
      method: 'POST',
      headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${s.accessToken}` },
    });
  } catch {
    // sessão local já foi removida
  }
}

function authHeaders(s: CloudSession): Record<string, string> {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${s.accessToken}`,
    'Content-Type': 'application/json',
  };
}

export async function fetchRemoteProgress(s: CloudSession): Promise<RemoteProgress | null> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/study_progress?select=data,client_updated_at,updated_at&user_id=eq.${s.userId}`,
    { headers: authHeaders(s) }
  );
  if (!res.ok) throw new Error(await readError(res));
  const rows = (await res.json()) as Array<{
    data: unknown;
    client_updated_at: number;
    updated_at: string;
  }>;
  if (!rows.length) return null;
  return {
    data: rows[0].data,
    clientUpdatedAt: Number(rows[0].client_updated_at) || 0,
    updatedAt: rows[0].updated_at,
  };
}

export async function pushRemoteProgress(
  s: CloudSession,
  data: unknown,
  schemaVersion: number,
  clientUpdatedAt: number
): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/study_progress?on_conflict=user_id`, {
    method: 'POST',
    headers: { ...authHeaders(s), Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify({
      user_id: s.userId,
      data,
      schema_version: schemaVersion,
      client_updated_at: clientUpdatedAt,
    }),
  });
  if (!res.ok) throw new Error(await readError(res));
}
