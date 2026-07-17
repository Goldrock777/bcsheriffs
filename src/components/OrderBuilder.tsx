import { useMemo, useState } from 'react'
import { CATALOG, sizesForFit, type Fit } from '../data/catalog'
import { DELIVERY_LOCATIONS, REGION_ORDER, locationsByRegion } from '../data/locations'
import { LEAD_TIME_TIERS, ORDER_PROCESS_STEPS, ACCEPT_COMMITMENT_HOURS, TYPICAL_LEAD_TIME_BUSINESS_DAYS } from '../data/contract'
import { addCalendarDays, addHours } from '../lib/businessDays'
import { generateOrderNumber } from '../lib/ids'
import { getSession, logout, type Session } from '../lib/auth'
import type { Order, OrderLine } from '../types'
import { SecHead, Head } from './ui'
import { OrderConfirmation } from './OrderConfirmation'
import { LoginGate } from './LoginGate'

const BADGE_ELIGIBLE = new Set(['DS-LS-NAVY', 'DS-LS-WHITE', 'DS-SS-NAVY', 'DS-SS-WHITE', 'SW-NAVY'])

let orderSeq = 1

export function OrderBuilder() {
  const [locationId, setLocationId] = useState(DELIVERY_LOCATIONS[0].id)
  const [sku, setSku] = useState(CATALOG[0].sku)
  const [fit, setFit] = useState<Fit>("Men's")
  const [size, setSize] = useState(sizesForFit("Men's")[0])
  const [qty, setQty] = useState(6)
  const [badgeTag, setBadgeTag] = useState(false)
  const [lines, setLines] = useState<OrderLine[]>([])

  const [leadTimeDays, setLeadTimeDays] = useState(3)
  const [proponentName, setProponentName] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [order, setOrder] = useState<Order | null>(null)
  const [session, setSession] = useState<Session | null>(() => getSession())

  const item = CATALOG.find((c) => c.sku === sku)!
  const location = DELIVERY_LOCATIONS.find((l) => l.id === locationId)!
  const sizes = sizesForFit(fit)
  const badgeEligible = BADGE_ELIGIBLE.has(sku)

  const leadTimePoints = useMemo(() => {
    const tier = LEAD_TIME_TIERS.find((t) => leadTimeDays <= t.maxDays)
    return tier?.points ?? 0
  }, [leadTimeDays])

  function addLine() {
    setLines((prev) => [...prev, { item, fit, size, quantity: qty, badgeTag: badgeEligible && badgeTag }])
    setQty(6)
    setBadgeTag(false)
  }

  function removeLine(i: number) {
    setLines((prev) => prev.filter((_, idx) => idx !== i))
  }

  function generateOrder() {
    const issued = new Date()
    const acceptBy = addHours(issued, ACCEPT_COMMITMENT_HOURS)
    const expectedDelivery = addCalendarDays(acceptBy, leadTimeDays)
    setOrder({
      orderNumber: generateOrderNumber(issued, orderSeq++),
      createdAt: issued,
      deliveryLocation: location,
      lines,
      leadTimeDays,
      acceptByDate: acceptBy,
      expectedDeliveryDate: expectedDelivery,
      proponentName,
      contactName,
      contactEmail,
    })
  }

  return (
    <section className="block" id="platform">
      <div className="wrap">
        <SecHead no="05" label="Order Platform" />
        <Head
          title="A working ordering platform — not a mockup"
          lede={`This is the actual §4.1.3 Order Process — with our own commitment layered on top: the RFP allows up to 2 business days to accept an Order, we confirm within about ${ACCEPT_COMMITMENT_HOURS} hour, and the delivery date is calculated straight from the proposed Lead Time. Build one below.`}
        />

        <div className="tl-grid reveal" style={{ marginBottom: 36 }}>
          {ORDER_PROCESS_STEPS.map((s) => (
            <div className="ph" key={s.step}>
              <div className="wk">STEP {s.step}</div>
              <div className="ttl">{s.title}</div>
              <p>{s.detail}</p>
              <div className="bar">
                <i style={{ width: '100%' }} />
              </div>
            </div>
          ))}
        </div>

        <div id="order-portal">
        {!session ? (
          <LoginGate onSuccess={(displayName) => setSession({ displayName, at: Date.now() })} />
        ) : (
          <>
            <div className="session-bar">
              <span>
                Signed in as <b>{session.displayName}</b>
              </span>
              <button
                onClick={() => {
                  logout()
                  setSession(null)
                }}
              >
                Log out
              </button>
            </div>
            <div className="platform-grid">
          <div className="window">
            <div className="chrome">
              <span className="d" />
              <span className="d" />
              <span className="d" />
              <span className="t">order builder · new Order</span>
            </div>
            <div className="body">
              <div className="field">
                <label>Delivery location (Schedule 2 · Annex 1)</label>
                <select value={locationId} onChange={(e) => setLocationId(e.target.value)}>
                  {REGION_ORDER.map((region) => (
                    <optgroup label={region} key={region}>
                      {locationsByRegion(region).map((loc) => (
                        <option value={loc.id} key={loc.id}>
                          {loc.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>Garment</label>
                <select
                  value={sku}
                  onChange={(e) => {
                    setSku(e.target.value)
                    setBadgeTag(false)
                  }}
                >
                  {CATALOG.map((c) => (
                    <option value={c.sku} key={c.sku}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>Fit</label>
                <div className="chips">
                  {(["Men's", "Women's"] as Fit[]).map((f) => (
                    <button
                      key={f}
                      className={`chip ${fit === f ? 'active' : ''}`}
                      onClick={() => {
                        setFit(f)
                        setSize(sizesForFit(f)[0])
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Size</label>
                  <select value={size} onChange={(e) => setSize(e.target.value)}>
                    {sizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Quantity</label>
                  <input type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} />
                </div>
              </div>

              {badgeEligible && (
                <label className="field-inline" style={{ marginBottom: 14 }}>
                  <input type="checkbox" checked={badgeTag} onChange={(e) => setBadgeTag(e.target.checked)} />
                  Add sewn badge number tag (preferred feature)
                </label>
              )}

              <button className="btn btn-ghost" onClick={addLine} style={{ width: '100%', justifyContent: 'center' }}>
                Add line item
              </button>

              {lines.length > 0 && (
                <table className="line-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Fit / Size</th>
                      <th>Qty</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {lines.map((l, i) => (
                      <tr key={i}>
                        <td>
                          {l.item.label}
                          {l.badgeTag ? ' · badge tag' : ''}
                        </td>
                        <td>
                          {l.fit}, {l.size}
                        </td>
                        <td>{l.quantity}</td>
                        <td>
                          <button className="rm-btn" onClick={() => removeLine(i)} aria-label="Remove line">
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <div className="field" style={{ marginTop: 18 }}>
                <label>Proposed Lead Time (calendar days) — Appendix B, Response Guideline 6</label>
                <input type="number" min={1} max={90} value={leadTimeDays} onChange={(e) => setLeadTimeDays(Number(e.target.value))} />
              </div>
              <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--dim)', marginTop: -8, marginBottom: 14 }}>
                Scores {leadTimePoints} of 30 available Lead Time points at this value. Most orders ship in{' '}
                {TYPICAL_LEAD_TIME_BUSINESS_DAYS} business days — actual Lead Time depends on order size and mix.
              </p>

              <div className="field-row">
                <div className="field">
                  <label>Proponent name</label>
                  <input value={proponentName} onChange={(e) => setProponentName(e.target.value)} placeholder="Your company legal name" />
                </div>
                <div className="field">
                  <label>Contact name</label>
                  <input value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Authorized representative" />
                </div>
              </div>
              <div className="field">
                <label>Contact email</label>
                <input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="name@company.com" />
              </div>

              <button
                className="btn btn-gold"
                onClick={generateOrder}
                disabled={lines.length === 0}
                style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}
              >
                Generate Order Confirmation
              </button>
              {lines.length === 0 && (
                <p className="mono" style={{ fontSize: '0.68rem', color: 'var(--dim)', marginTop: 8 }}>
                  Add at least one line item first.
                </p>
              )}
            </div>
          </div>

          {order ? (
            <OrderConfirmation order={order} />
          ) : (
            <div className="window">
              <div className="chrome">
                <span className="d" />
                <span className="d" />
                <span className="d" />
                <span className="t">order confirmation · preview</span>
              </div>
              <div className="body">
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                  Build an Order on the left — delivery date is calculated automatically as{' '}
                  <span className="mono">
                    Order issued + {ACCEPT_COMMITMENT_HOURS} hour (our accept commitment) + {leadTimeDays} calendar days (Lead Time)
                  </span>
                  , per RFP §4.1.3.
                </p>
              </div>
            </div>
          )}
            </div>
          </>
        )}
        </div>
      </div>
    </section>
  )
}
