import { useState } from 'react'
import { GARMENT_SPECS } from '../data/specs'
import { SecHead, Head, Tag } from './ui'

export function Specifications() {
  const [active, setActive] = useState(GARMENT_SPECS[0].id)
  const spec = GARMENT_SPECS.find((s) => s.id === active)!

  return (
    <section className="block" id="specifications">
      <div className="wrap">
        <SecHead no="03" label="Specification Compliance" />
        <Head
          title="Every requirement in Schedule 1, confirmed"
          lede="Select a garment to see the full compliance grid — matched line-by-line to Annex 1, 2 and 3, exactly as Appendix B, Response Guideline 1 requires it to be confirmed."
        />

        <div className="tabs reveal">
          {GARMENT_SPECS.map((s) => (
            <button key={s.id} className={`tab ${active === s.id ? 'active' : ''}`} onClick={() => setActive(s.id)}>
              {s.label}
            </button>
          ))}
        </div>

        <div className="reveal" style={{ marginBottom: 14 }}>
          <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--dim)', letterSpacing: '0.06em' }}>
            {spec.annex}
          </span>
        </div>

        <table className="tt reveal">
          <thead>
            <tr>
              <th>Category</th>
              <th>Requirement</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {spec.groups.flatMap((g) =>
              g.items.map((item, i) => (
                <tr key={`${g.heading}-${item}`}>
                  {i === 0 ? (
                    <td className="req" rowSpan={g.items.length}>
                      {g.heading}
                    </td>
                  ) : null}
                  <td>{item}</td>
                  <td>
                    <Tag>YES</Tag>
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
