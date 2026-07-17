import { useRef, useState } from 'react'
import type { Order } from '../types'
import { formatDate } from '../lib/businessDays'
import { exportNodeAsJpeg, exportNodeAsPdf } from '../lib/exportSlip'
import { buildMailto } from '../lib/mailto'
import { RFP } from '../data/contract'

export function OrderConfirmation({ order }: { order: Order }) {
  const slipRef = useRef<HTMLDivElement>(null)
  const [busy, setBusy] = useState<'pdf' | 'jpeg' | null>(null)

  async function handleExport(kind: 'pdf' | 'jpeg') {
    if (!slipRef.current) return
    setBusy(kind)
    try {
      if (kind === 'pdf') await exportNodeAsPdf(slipRef.current, order.orderNumber)
      else await exportNodeAsJpeg(slipRef.current, order.orderNumber)
    } finally {
      setBusy(null)
    }
  }

  const totalUnits = order.lines.reduce((t, l) => t + l.quantity, 0)

  const notifyHref = buildMailto({
    to: '',
    subject: `Order Confirmation ${order.orderNumber} — RFP ${RFP.opportunityId}`,
    body: [
      `Order ${order.orderNumber} has been generated for ${order.deliveryLocation.name}.`,
      ``,
      `Delivery location: ${order.deliveryLocation.address}, ${order.deliveryLocation.city} ${order.deliveryLocation.postal}`,
      `Accept-by date (2 business days): ${formatDate(order.acceptByDate)}`,
      `Expected delivery date: ${formatDate(order.expectedDeliveryDate)}`,
      `Total units: ${totalUnits}`,
      ``,
      `Lines:`,
      ...order.lines.map((l) => `  - ${l.quantity}× ${l.item.label} — ${l.fit}, size ${l.size}${l.badgeTag ? ' + badge tag' : ''}`),
    ].join('\n'),
  })

  return (
    <div className="window">
      <div className="chrome">
        <span className="d" />
        <span className="d" />
        <span className="d" />
        <span className="t">order confirmation · {order.orderNumber}</span>
      </div>
      <div className="body">
        <div ref={slipRef} className="slip">
          <div className="slip-head">
            <div>
              <div className="org">BC Sheriff Service · Order Confirmation & Packing Slip</div>
              <h2>{order.orderNumber}</h2>
            </div>
            <div className="meta">
              <b>{formatDate(order.createdAt)}</b>
              RFP {RFP.opportunityId}
            </div>
          </div>

          <div className="slip-grid">
            <div className="slip-box">
              <h4>Ship To</h4>
              <p>
                BC Sheriff Service — {order.deliveryLocation.name}
                <br />
                {order.deliveryLocation.address}
                <br />
                {order.deliveryLocation.city}, BC {order.deliveryLocation.postal}
              </p>
            </div>
            <div className="slip-box">
              <h4>Order Timing</h4>
              <p>
                Order issued: {formatDate(order.createdAt)}
                <br />
                Accept-by (2 business days): {formatDate(order.acceptByDate)}
                <br />
                Expected delivery: {formatDate(order.expectedDeliveryDate)} ({order.leadTimeDays} calendar days)
              </p>
            </div>
          </div>

          <table className="items">
            <thead>
              <tr>
                <th>Item</th>
                <th>Fit</th>
                <th>Size</th>
                <th>Badge tag</th>
                <th style={{ textAlign: 'right' }}>Qty</th>
              </tr>
            </thead>
            <tbody>
              {order.lines.map((l, i) => (
                <tr key={i}>
                  <td>{l.item.label}</td>
                  <td>{l.fit}</td>
                  <td>{l.size}</td>
                  <td>{l.badgeTag ? 'Yes' : '—'}</td>
                  <td style={{ textAlign: 'right' }}>{l.quantity}</td>
                </tr>
              ))}
              {order.lines.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ color: '#889', fontStyle: 'italic' }}>
                    No line items added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="slip-foot">
            <span>Warranty: {RFP.warrantyYears} year from date of acceptance · Proponent: {order.proponentName || '—'}</span>
            <span>Total units: {totalUnits}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
          <button className="btn btn-gold" onClick={() => handleExport('pdf')} disabled={busy !== null}>
            {busy === 'pdf' ? 'Preparing…' : 'Download PDF'}
          </button>
          <button className="btn btn-ghost" onClick={() => handleExport('jpeg')} disabled={busy !== null}>
            {busy === 'jpeg' ? 'Preparing…' : 'Download JPEG'}
          </button>
          <a className="btn btn-ghost" href={notifyHref}>
            Notify BCSS quartermaster
          </a>
        </div>
        <p className="mono" style={{ fontSize: '0.68rem', color: 'var(--dim)', marginTop: 10 }}>
          Demonstration platform — "Notify" opens your own email client with the confirmation pre-filled; no mail server is
          wired up here.
        </p>
      </div>
    </div>
  )
}
