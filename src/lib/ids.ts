function pad(n: number, width: number): string {
  return String(n).padStart(width, '0')
}

// Order numbers reference the Opportunity ID until a Contract number is assigned.
export function generateOrderNumber(date: Date, seq: number): string {
  const y = date.getFullYear()
  const m = pad(date.getMonth() + 1, 2)
  const d = pad(date.getDate(), 2)
  return `RFP-232053-${y}${m}${d}-${pad(seq, 3)}`
}
