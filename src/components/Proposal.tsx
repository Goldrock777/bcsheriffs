import { RFP, EVALUATION } from '../data/contract'
import { SecHead, Head, Tag, ICONS } from './ui'

export function Hero() {
  return (
    <section className="hero" id="proposal">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Response to RFP · Opportunity {RFP.opportunityId}</span>
          <h1>
            <em>DutyLine</em> — a single-source duty uniform program for BC Sheriff Service.
          </h1>
          <p className="lede">
            Duty Shirts, Under Carrier Shirts and Sweaters for {RFP.scope.officers.toLocaleString()} sheriffs
            across all {RFP.scope.courthouses} BCSS locations — built to the exact specifications in Schedule 1,
            with an ordering platform ready before the {new Date(RFP.term.anticipatedStart).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })} start date.
          </p>
          <div className="hero-actions">
            <a href="#platform" className="btn btn-gold">
              Try the order platform
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#specifications" className="btn btn-ghost">
              Review specification compliance
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <div className="v">{RFP.scope.annualUnitsUpTo.toLocaleString()}</div>
              <div className="l">UNITS / YEAR (UP TO)</div>
            </div>
            <div>
              <div className="v">{RFP.scope.courthouses}</div>
              <div className="l">BCSS DELIVERY LOCATIONS</div>
            </div>
            <div>
              <div className="v">
                {RFP.term.initialYears}+{RFP.term.extensionOptions}×{RFP.term.extensionYearsEach}
              </div>
              <div className="l">YEAR TERM (MAX {RFP.term.maxYears})</div>
            </div>
          </div>
        </div>

        <div className="readout reveal">
          <div className="rt">
            <span className="t mono">rfp-232053 · at a glance</span>
            <span className="st">LIVE READOUT</span>
          </div>
          <div className="rb">
            <div className="rrow">
              <span className="k">Issue date</span>
              <span className="dots" />
              <span className="val">Jul 16, 2026</span>
            </div>
            <div className="rrow">
              <span className="k">Closing</span>
              <span className="dots" />
              <span className="val g">Aug 13, 2026 · 2:00 PM PT</span>
            </div>
            <div className="rrow">
              <span className="k">Contract start</span>
              <span className="dots" />
              <span className="val">Sep 1, 2026</span>
            </div>
            <div className="rrow">
              <span className="k">First Order due</span>
              <span className="dots" />
              <span className="val">Sep 30, 2026</span>
            </div>
            <div className="rrow">
              <span className="k">Warranty</span>
              <span className="dots" />
              <span className="val">{RFP.warrantyYears} year, all Goods</span>
            </div>
            <div className="rrow">
              <span className="k">Weighted score</span>
              <span className="dots" />
              <span className="val">
                {EVALUATION.subtotal} pts <span style={{ color: 'var(--dim)' }}>(min {EVALUATION.subtotalMinScore})</span>
              </span>
            </div>
            <div className="rrow">
              <span className="k">Wear test</span>
              <span className="dots" />
              <span className="val gr">
                {EVALUATION.wearTest.points} pts <span style={{ color: 'var(--dim)' }}>(min {EVALUATION.wearTest.minScore})</span>
              </span>
            </div>
            <div className="rrow">
              <span className="k">Total available</span>
              <span className="dots" />
              <span className="val">{EVALUATION.total} pts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StandardsStrip() {
  return (
    <div className="standards">
      <div className="wrap standards-in">
        <div className="std">
          <div className="h">Coverage</div>
          <div className="v">41 / 41 locations</div>
        </div>
        <div className="std">
          <div className="h">Pricing</div>
          <div className="v">Firm, 36-month term</div>
        </div>
        <div className="std">
          <div className="h">Response format</div>
          <div className="v">English · Appendix B</div>
        </div>
        <div className="std">
          <div className="h">Warranty</div>
          <div className="v">1 year, all Goods</div>
        </div>
        <div className="std">
          <div className="h">Wear test samples</div>
          <div className="v">Ready in 14 business days</div>
        </div>
      </div>
    </div>
  )
}

export function Commitment() {
  return (
    <section className="block" id="commitment">
      <div className="wrap">
        <SecHead no="01" label="Understanding &amp; Commitment" />
        <Head
          title="Award this RFP, and every operational piece is ready before September 1."
          lede={
            <>
              This RFP is decided almost entirely on execution: 75% of the 400 available points sit in the wear test, not
              the paper proposal. Our plan puts a compliant, better-than-spec sample in front of the evaluation committee
              fast, and has the ordering system BCSS will actually use running well ahead of the anticipated contract start.
            </>
          }
        />
        <div className="tl-grid reveal">
          <div className="ph">
            <div className="wk">ON AWARD</div>
            <div className="ttl">Contract finalization</div>
            <p>Tax Verification Letter and Contract execution handled within the 30-day finalization window in §2.15.</p>
            <div className="bar">
              <i style={{ width: '100%' }} />
            </div>
          </div>
          <div className="ph">
            <div className="wk">14 BUSINESS DAYS</div>
            <div className="ttl">Wear test samples delivered</div>
            <p>Full 28-unit sample set — both fits, all six garment/colour combinations — shipped to the Coquitlam Quartermaster within the RFP's own deadline.</p>
            <div className="bar">
              <i style={{ width: '100%' }} />
            </div>
          </div>
          <div className="ph">
            <div className="wk">BEFORE SEP 1</div>
            <div className="ttl">Ordering platform live</div>
            <p>DutyLine configured with all 41 delivery locations and the exact §4.1.3 Order Process — accept/decline clock included.</p>
            <div className="bar">
              <i style={{ width: '100%' }} />
            </div>
          </div>
          <div className="ph">
            <div className="wk">SEP 1, 2026</div>
            <div className="ttl">Contract start</div>
            <p>Production and inventory positioned in BC to meet the Lead Time proposed in Appendix B Response Guideline 6.</p>
            <div className="bar">
              <i style={{ width: '100%' }} />
            </div>
          </div>
          <div className="ph">
            <div className="wk">BY SEP 30, 2026</div>
            <div className="ttl">First Order fulfilled</div>
            <p>The anticipated first Order accepted within 2 business days and delivered inside the proposed Lead Time — no surprises.</p>
            <div className="bar">
              <i style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CapabilitiesTable() {
  const rows: { req: string; ref: string; capability: string }[] = [
    {
      req: 'Deliver to all 41 BCSS locations',
      ref: 'RFP §7.1 · Mandatory',
      capability: 'Every delivery location in Schedule 2 – Annex 1 is pre-loaded in the ordering platform, grouped by region, with routing confirmed for each courthouse and detention/escort centre.',
    },
    {
      req: 'Meet required specifications — all three garments',
      ref: 'Appendix B · Response Guideline 1',
      capability: 'Full compliance confirmed against every requirement in Schedule 1, Annexes 1–3 — colour, fabric, sizing, design, closures, pockets and cresting placement.',
    },
    {
      req: 'Preferred badge number tag option',
      ref: 'Appendix B · Response Guideline 2',
      capability: 'Sewn badge number tag offered as a priced option on Duty Shirts (navy &amp; white) and the Duty Sweater, to the exact patch specification.',
    },
    {
      req: '5+ years relevant experience within 10 years',
      ref: 'Appendix B · Response Guideline 3',
      capability: 'Track record supplying comparable uniform goods at comparable volumes to law enforcement and public-sector customers.',
    },
    {
      req: 'Quality assurance & inspection procedures',
      ref: 'Appendix B · Response Guideline 4',
      capability: 'Documented QA/QC inspection at cut, sew and pre-ship stages, with the same sample retained by BCSS as the ongoing quality-control benchmark.',
    },
    {
      req: 'Returns & 1-year warranty process',
      ref: 'Appendix B · Response Guideline 5',
      capability: 'Single-point warranty intake built into the platform — every unit is tracked from delivery date, with a streamlined return-and-replace workflow.',
    },
    {
      req: 'Fast, unconditional Lead Time + backorder policy',
      ref: 'Appendix B · Response Guideline 6',
      capability: 'Lead Time proposed unconditionally, with the order platform auto-calculating the promised delivery date from Order acceptance.',
    },
  ]

  return (
    <section className="block" id="capabilities">
      <div className="wrap">
        <SecHead no="02" label="Capabilities" />
        <Head title="Mapped directly to the RFP & Appendix B requirements" lede="Nothing here is aspirational — every row below is either already demonstrated in this platform or is a direct, priced commitment in the Proposal." />
        <table className="tt reveal">
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Capability</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.req}>
                <td className="req">
                  {r.req}
                  <span className="ref">{r.ref}</span>
                </td>
                <td dangerouslySetInnerHTML={{ __html: r.capability }} />
                <td>
                  <Tag>Ready</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="grid c3 reveal" style={{ marginTop: 32 }}>
          <div className="cell">
            <div className="ic">{ICONS.shield}</div>
            <h4>No minimum orders</h4>
            <p>We remain flexible to BCSS's as-if-and-when-requested model — no minimum quantity or dollar value required to fulfill an Order.</p>
          </div>
          <div className="cell">
            <div className="ic">{ICONS.clock}</div>
            <h4>Two-day accept, no ambiguity</h4>
            <p>Every Order is answered inside the 2-business-day window in §4.1.3 — accepted, or with clearly flagged changes.</p>
          </div>
          <div className="cell">
            <div className="ic">{ICONS.scale}</div>
            <h4>Firm pricing, full 36 months</h4>
            <p>Pricing quoted holds for the entire initial term as required by §4.1.2 — CAD, FOB destination, duty and freight included.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
