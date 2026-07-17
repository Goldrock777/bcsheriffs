import { useState } from 'react'
import { CATALOG, BADGE_TAG_LABEL } from '../data/catalog'
import { RFP } from '../data/contract'
import { formatCurrency, formatNumber } from '../lib/format'
import { SecHead, Head } from './ui'

interface Row {
  key: string
  label: string
  price: number
  qty: number
}

const evenSplit = Math.floor(RFP.scope.annualUnitsUpTo / CATALOG.length)

const INITIAL_ROWS: Row[] = [
  ...CATALOG.map((c) => ({ key: c.sku, label: c.label, price: 0, qty: evenSplit })),
  { key: 'badge-tag', label: BADGE_TAG_LABEL, price: 0, qty: 0 },
]

export function PricingSchedule() {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS)

  function updatePrice(key: string, value: string) {
    const price = Number(value)
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, price: Number.isFinite(price) ? price : 0 } : r)))
  }
  function updateQty(key: string, value: string) {
    const qty = Number(value)
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, qty: Number.isFinite(qty) ? Math.max(0, qty) : 0 } : r)))
  }

  const total = rows.reduce((t, r) => t + r.price * r.qty, 0)
  const totalUnits = rows.filter((r) => r.key !== 'badge-tag').reduce((t, r) => t + r.qty, 0)

  return (
    <section className="block" id="pricing">
      <div className="wrap">
        <SecHead no="06" label="Pricing Schedule" />
        <Head
          title="Pricing, computed live"
          lede="Firm for the full 36-month initial term, per unit, CAD, inclusive of duty, freight and delivery, exclusive of tax. Quantities below are an illustrative planning split of the RFP's stated cap of up to 3,600 units/year across all three garments — not a guaranteed breakdown — edit them to model your own assumptions."
        />

        <table className="ptable reveal">
          <thead>
            <tr>
              <th>Item</th>
              <th style={{ textAlign: 'right' }}>Unit price (CAD)</th>
              <th style={{ textAlign: 'right' }}>Est. annual qty</th>
              <th style={{ textAlign: 'right' }}>Extended</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key}>
                <td>{r.label}</td>
                <td style={{ textAlign: 'right' }}>
                  <input
                    className="price"
                    type="number"
                    min={0}
                    step="0.01"
                    value={r.price || ''}
                    placeholder="0.00"
                    onChange={(e) => updatePrice(r.key, e.target.value)}
                  />
                </td>
                <td className="num">
                  <input
                    className="price"
                    type="number"
                    min={0}
                    value={r.qty}
                    onChange={(e) => updateQty(r.key, e.target.value)}
                  />
                </td>
                <td className="num">{formatCurrency(r.price * r.qty)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Estimated annual units (excl. badge tags)</td>
              <td className="num">{formatNumber(totalUnits)}</td>
              <td />
            </tr>
            <tr>
              <td colSpan={3}>Estimated annual value</td>
              <td className="num">{formatCurrency(total)}</td>
            </tr>
          </tfoot>
        </table>
        <p className="mono" style={{ fontSize: '0.68rem', color: 'var(--dim)', marginTop: 10 }}>
          RFP §2.8(b): if unit pricing sums are mis-added by the Proponent, the Province takes the mathematically correct
          total for evaluation and contracting — this schedule always computes it live, so that can't happen here.
        </p>
      </div>
    </section>
  )
}
