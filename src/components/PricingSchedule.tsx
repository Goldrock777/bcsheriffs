import { useMemo, useState } from 'react'
import { CATALOG, BADGE_TAG_LABEL } from '../data/catalog'
import { RFP } from '../data/contract'
import { DELIVERY_LOCATIONS, WAREHOUSE_ORIGIN } from '../data/locations'
import { haversineKm } from '../lib/geo'
import { formatCurrency, formatNumber } from '../lib/format'
import { SecHead, Head } from './ui'

interface Row {
  key: string
  label: string
  price: number
  qty: number
  freightEligible: boolean
}

const evenSplit = Math.floor(RFP.scope.annualUnitsUpTo / CATALOG.length)

const INITIAL_ROWS: Row[] = [
  ...CATALOG.map((c) => ({ key: c.sku, label: c.label, price: 0, qty: evenSplit, freightEligible: true })),
  { key: 'badge-tag', label: BADGE_TAG_LABEL, price: 0, qty: 0, freightEligible: false },
]

const DISTANCES = DELIVERY_LOCATIONS.map((loc) => ({
  loc,
  km: haversineKm(WAREHOUSE_ORIGIN.lat, WAREHOUSE_ORIGIN.lon, loc.lat, loc.lon),
})).sort((a, b) => b.km - a.km)

function FreightModel({
  ratePerKm,
  setRatePerKm,
  unitsPerShipment,
  setUnitsPerShipment,
  handlingFee,
  setHandlingFee,
  blended,
}: {
  ratePerKm: number
  setRatePerKm: (v: number) => void
  unitsPerShipment: number
  setUnitsPerShipment: (v: number) => void
  handlingFee: number
  setHandlingFee: (v: number) => void
  blended: number
}) {
  const perLocation = DISTANCES.map((d) => {
    const perShipment = handlingFee + d.km * ratePerKm
    return { ...d, perUnit: unitsPerShipment > 0 ? perShipment / unitsPerShipment : 0 }
  })

  return (
    <div className="window reveal" style={{ marginBottom: 22 }}>
      <div className="chrome">
        <span className="d" />
        <span className="d" />
        <span className="d" />
        <span className="t">freight model · {WAREHOUSE_ORIGIN.name} → 41 BCSS locations</span>
      </div>
      <div className="body">
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: 14 }}>
          RFP §2.8 and Appendix B require one flat, unconditional unit price, FOB destination — no per-location shipping
          surcharge. That means the cost of reaching Fort St. John or Prince Rupert has to be absorbed into the same
          price as reaching New Westminster. Set your own assumptions below; nothing here is a carrier quote —
          distances are straight-line, not driven or ferry-adjusted.
        </p>
        <div className="field-row">
          <div className="field">
            <label>Freight rate ($/km)</label>
            <input
              type="number"
              min={0}
              step="0.01"
              value={ratePerKm || ''}
              placeholder="e.g. 1.75"
              onChange={(e) => setRatePerKm(Number(e.target.value) || 0)}
            />
          </div>
          <div className="field">
            <label>Units per shipment</label>
            <input
              type="number"
              min={1}
              value={unitsPerShipment}
              onChange={(e) => setUnitsPerShipment(Math.max(1, Number(e.target.value) || 1))}
            />
          </div>
        </div>
        <div className="field">
          <label>Handling fee per shipment ($)</label>
          <input
            type="number"
            min={0}
            step="0.01"
            value={handlingFee || ''}
            placeholder="0.00"
            onChange={(e) => setHandlingFee(Number(e.target.value) || 0)}
          />
        </div>

        <div className="session-bar" style={{ marginTop: 4 }}>
          <span>Blended freight per unit, averaged across all 41 locations</span>
          <b className="mono" style={{ color: 'var(--gold)', fontSize: '0.95rem' }}>
            {formatCurrency(blended)}
          </b>
        </div>

        <details style={{ marginTop: 14 }}>
          <summary
            className="mono"
            style={{ fontSize: '0.7rem', color: 'var(--dim)', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Show distance breakdown for all 41 locations
          </summary>
          <table className="dtable" style={{ marginTop: 10 }}>
            <thead>
              <tr>
                <th>Location</th>
                <th style={{ textAlign: 'right' }}>Distance (km)</th>
                <th style={{ textAlign: 'right' }}>Freight / unit</th>
              </tr>
            </thead>
            <tbody>
              {perLocation.map((p) => (
                <tr key={p.loc.id}>
                  <td>{p.loc.name}</td>
                  <td className="num">{formatNumber(Math.round(p.km))}</td>
                  <td className="num">{formatCurrency(p.perUnit)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>
    </div>
  )
}

export function PricingSchedule() {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS)
  const [ratePerKm, setRatePerKm] = useState(0)
  const [unitsPerShipment, setUnitsPerShipment] = useState(24)
  const [handlingFee, setHandlingFee] = useState(0)

  const freightPerUnit = useMemo(() => {
    if (unitsPerShipment <= 0) return 0
    const total = DISTANCES.reduce((t, d) => t + (handlingFee + d.km * ratePerKm), 0)
    return total / unitsPerShipment / DISTANCES.length
  }, [ratePerKm, unitsPerShipment, handlingFee])

  function updatePrice(key: string, value: string) {
    const price = Number(value)
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, price: Number.isFinite(price) ? price : 0 } : r)))
  }
  function updateQty(key: string, value: string) {
    const qty = Number(value)
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, qty: Number.isFinite(qty) ? Math.max(0, qty) : 0 } : r)))
  }

  const landed = (r: Row) => r.price + (r.freightEligible ? freightPerUnit : 0)
  const total = rows.reduce((t, r) => t + landed(r) * r.qty, 0)
  const totalUnits = rows.filter((r) => r.key !== 'badge-tag').reduce((t, r) => t + r.qty, 0)

  return (
    <section className="block" id="pricing">
      <div className="wrap">
        <SecHead no="06" label="Pricing Schedule" />
        <Head
          title="Appendix B, Response Guideline 7 — priced live"
          lede="Firm for the full 36-month initial term, per unit, CAD, inclusive of duty, freight and delivery, exclusive of tax. Quantities below are an illustrative planning split of the RFP's stated cap of up to 3,600 units/year across all three garments — not a guaranteed breakdown — edit them to model your own assumptions."
        />

        <FreightModel
          ratePerKm={ratePerKm}
          setRatePerKm={setRatePerKm}
          unitsPerShipment={unitsPerShipment}
          setUnitsPerShipment={setUnitsPerShipment}
          handlingFee={handlingFee}
          setHandlingFee={setHandlingFee}
          blended={freightPerUnit}
        />

        <table className="ptable reveal">
          <thead>
            <tr>
              <th>Item</th>
              <th style={{ textAlign: 'right' }}>Base price</th>
              <th style={{ textAlign: 'right' }}>Freight / unit</th>
              <th style={{ textAlign: 'right' }}>Landed unit price</th>
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
                <td className="num">{r.freightEligible ? formatCurrency(freightPerUnit) : '—'}</td>
                <td className="num" style={{ color: 'var(--gold)' }}>
                  {formatCurrency(landed(r))}
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
                <td className="num">{formatCurrency(landed(r) * r.qty)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Estimated annual units (excl. badge tags)</td>
              <td className="num">{formatNumber(totalUnits)}</td>
              <td />
            </tr>
            <tr>
              <td colSpan={5}>Estimated annual value (landed, freight included)</td>
              <td className="num">{formatCurrency(total)}</td>
            </tr>
          </tfoot>
        </table>
        <p className="mono" style={{ fontSize: '0.68rem', color: 'var(--dim)', marginTop: 10 }}>
          RFP §2.8(b): if unit pricing sums are mis-added by the Proponent, the Province takes the mathematically correct
          total for evaluation and contracting — this schedule always computes it live, so that can't happen here. The
          "Landed unit price" — base plus blended freight — is the single figure that belongs in the Appendix B
          submission, per §2.8 and the FOB destination requirement.
        </p>
      </div>
    </section>
  )
}
