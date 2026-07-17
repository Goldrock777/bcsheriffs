# DutyLine — BC Sheriff Service Duty Uniform Platform

A proposal exhibit built for RFP 232053 (Ministry of Attorney General, Court
Services Branch) — Duty Shirts, Under Carrier Shirts and Sweaters for BC
Sheriff Service.

This is a client-side proposal, specification-compliance, and order-intake
demonstration, not a production procurement system. There is no backend,
database, or mail server — it exists to show, concretely, how the RFP's
§4.1.3 Order Process, specification compliance, and pricing schedule would
work in practice.

## What's here

- **Proposal** — a streamlined, single-page version of the written Proposal:
  scope, term, evaluation weighting, and a readiness timeline mapped to the
  RFP's own dates.
- **Specifications** — line-by-line compliance confirmation against Schedule
  1, Annexes 1–3 (Duty Shirt, Under Carrier Shirt, Duty Sweater).
- **Coverage** — an illustrative map of British Columbia with all 41 BCSS
  delivery locations from Schedule 2, Annex 1, grouped by region.
- **Order Platform** — a working implementation of the §4.1.3 Order Process:
  build an Order against a real delivery location, and see the 2-business-day
  accept window and Lead-Time-based delivery date calculated live.
- **Order Confirmation** — generates the order confirmation / packing slip,
  downloadable as PDF or JPEG (client-side, via `html2canvas` + `jsPDF`), plus
  a `mailto:`-based notification link. There is no server-side email —
  "Notify" opens the visitor's own email client with the confirmation
  pre-filled.
- **Pricing Schedule** — the Appendix B, Response Guideline 7 pricing grid,
  live-editable, with extended totals computed automatically.

All RFP terms, specifications, and delivery locations live in `src/data/`.

## Development

```bash
npm install
npm run dev
```

```bash
npm run build   # type-check + production build
npm run lint    # oxlint
```
