// Client-side notification only — this exhibit has no backend or mail server.
// It opens the user's own email client with the confirmation pre-filled, so a
// real notification can be sent with one click. Wiring true server-side
// automation (e.g. on Order acceptance) is a follow-on integration once a
// backend and a transactional-email provider are in place.
export function buildMailto(opts: {
  to: string
  subject: string
  body: string
}): string {
  const params = new URLSearchParams({ subject: opts.subject, body: opts.body })
  return `mailto:${encodeURIComponent(opts.to)}?${params.toString()}`
}
