// Client-side demo gate only — there is no backend issuing, hashing, or
// verifying these credentials, and no way to revoke or rotate them
// server-side. A production rollout would replace this with a real identity
// provider (e.g. government SSO / IDIR) issuing individual, revocable
// credentials — not one shared demo login baked into the client bundle.

const STORAGE_KEY = 'dutyline.session'

export interface Session {
  displayName: string
  at: number
}

export const DEMO_ACCOUNT = {
  username: 'bcss.ordering',
  password: 'RFP232053-Sep2026',
  displayName: 'BC Sheriff Service — Ordering Desk',
} as const

export function login(username: string, password: string): boolean {
  const ok = username.trim().toLowerCase() === DEMO_ACCOUNT.username && password === DEMO_ACCOUNT.password
  if (ok) {
    const session: Session = { displayName: DEMO_ACCOUNT.displayName, at: Date.now() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  }
  return ok
}

export function logout(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export function getSession(): Session | null {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as Session
  } catch {
    return null
  }
}
