import type { ReactNode } from 'react'

export function SecHead({ no, label }: { no: string; label: string }) {
  return (
    <div className="sec-head reveal">
      <span className="no">{no}</span>
      <span className="lbl">{label}</span>
      <span className="rule" />
    </div>
  )
}

export function Head({ title, lede }: { title: string; lede?: ReactNode }) {
  return (
    <div className="head reveal">
      <h2>{title}</h2>
      {lede && <p>{lede}</p>}
    </div>
  )
}

export function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Tag({ children, tone = 'ok' }: { children: ReactNode; tone?: 'ok' | 'pref' }) {
  return <span className={`tag ${tone}`}>{children}</span>
}

export function Pill({ children, tone }: { children: ReactNode; tone: 'ok' | 'low' | 'crit' | 'pend' }) {
  return <span className={`pill p-${tone}`}>{children}</span>
}

export const ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 5 6v5c0 5 8 10 8 10s8-5 8-10V6l-8-4Z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M12 7v5l3 2" />
      <path d="M21 3v5h-5" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  ),
  needle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 7h16M7 12h10M10 17h4" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M9 3 5 5l1.5 3L6 20h12l-.5-12L19 5l-4-2-3 2-3-2Z" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 12h4l3 7 4-14 3 7h4" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 3h11l3 3v15H5z" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
}
