import { useState, type FormEvent } from 'react'
import { DEMO_ACCOUNT, login } from '../lib/auth'

export function LoginGate({ onSuccess }: { onSuccess: (displayName: string) => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (login(username, password)) {
      onSuccess(DEMO_ACCOUNT.displayName)
    } else {
      setError(true)
    }
  }

  function autofill() {
    setUsername(DEMO_ACCOUNT.username)
    setPassword(DEMO_ACCOUNT.password)
    setError(false)
  }

  return (
    <div className="window">
      <div className="chrome">
        <span className="d" />
        <span className="d" />
        <span className="d" />
        <span className="t">secure ordering portal · sign in</span>
      </div>
      <div className="body">
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 16 }}>
          The Order Platform sits behind sign-in, the way a real BCSS ordering desk would work — the rest of this
          Proposal is open for evaluation.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="bcss.ordering" autoComplete="username" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          </div>
          {error && (
            <p style={{ color: 'var(--red)', fontSize: '0.82rem', marginBottom: 10 }}>Incorrect username or password.</p>
          )}
          <button className="btn btn-gold" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            Sign in
          </button>
        </form>

        <div className="session-bar" style={{ marginTop: 16, flexDirection: 'column', alignItems: 'stretch', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: '0.66rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Provisioned demo credentials
            </span>
            <button type="button" onClick={autofill}>
              Autofill
            </button>
          </div>
          <span className="mono" style={{ fontSize: '0.82rem' }}>
            <b>{DEMO_ACCOUNT.username}</b> / <b>{DEMO_ACCOUNT.password}</b>
          </span>
        </div>
        <p className="mono" style={{ fontSize: '0.64rem', color: 'var(--dim)', marginTop: 10 }}>
          Demonstration gate — client-side only, no backend. Production would issue individual credentials through a
          real identity provider instead of one shared login.
        </p>
      </div>
    </div>
  )
}
