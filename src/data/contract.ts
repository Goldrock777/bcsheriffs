export const RFP = {
  opportunityId: '232053',
  title: 'Duty Shirts, Under Carrier Shirts and Sweaters for BC Sheriff Service',
  ministry: 'Ministry of Attorney General',
  branch: 'Court Services Branch',
  buyer: 'BC Sheriff Service (BCSS)',
  issueDate: '2026-07-16',
  closingDate: '2026-08-13',
  closingTime: '2:00 PM Pacific Time',
  officialContact: {
    name: 'Alina Lazar',
    title: 'Contract Procurement Specialist',
    email: 'Alina.Lazar@gov.bc.ca',
  },
  quartermaster: {
    name: 'Rhea Michalatos',
    title: 'BCSS Quartermaster',
    address: 'Roadside Building, 2601 Lougheed Hwy, Coquitlam, BC V3C 4J2',
  },
  term: {
    initialYears: 3,
    extensionOptions: 2,
    extensionYearsEach: 1,
    maxYears: 5,
    anticipatedStart: '2026-09-01',
    firstOrderBy: '2026-09-30',
  },
  scope: {
    officers: 600,
    courthouses: 41,
    annualUnitsUpTo: 3600,
  },
  warrantyYears: 1,
} as const

export const EVALUATION = {
  weighted: [
    { criterion: 'Ability to Meet Required Specifications', points: 0, note: 'Pass/Fail', minScore: 'PASS' },
    { criterion: 'Ability to Meet Preferred Specifications', points: 5, minScore: 'N/A' },
    { criterion: 'Desired Experience — Background', points: 10, minScore: 5 },
    { criterion: 'Quality Assurance and Quality Control', points: 5, minScore: 3 },
    { criterion: 'Returns and Warranty Process', points: 5, minScore: 3 },
    { criterion: 'Lead Time', points: 30, minScore: 10 },
    { criterion: 'Price', points: 45, minScore: 'N/A' },
  ],
  subtotal: 100,
  subtotalMinScore: 21,
  wearTest: { points: 300, minScore: 150 },
  total: 400,
} as const

export const LEAD_TIME_TIERS = [
  { maxDays: 30, points: 30, label: '0–30 calendar days' },
  { maxDays: 60, points: 20, label: '31–60 calendar days' },
  { maxDays: 90, points: 10, label: '61–90 calendar days' },
] as const

export const ORDER_PROCESS_STEPS = [
  { step: 1, title: 'Order issued', detail: 'BCSS determines quantities and delivery location(s), and issues an Order to the Contractor.' },
  { step: 2, title: 'Contractor response window', detail: '2 business days to accept, propose changes, or decline the Order.' },
  { step: 3, title: 'Province response window', detail: 'If changes are proposed, the Province has 2 business days to accept or reject them — silence voids the changes.' },
  { step: 4, title: 'Fulfillment', detail: 'Once accepted, the Contractor delivers to the specified BCSS location within the Lead Time.' },
] as const

export const WEAR_TEST_SAMPLE_UNITS = [
  { item: "Duty shirt — Long Sleeve Midnight Navy/LAPD Blue", units: 6, men: 3, women: 3 },
  { item: 'Duty shirt — Long Sleeve White (badge number tag)', units: 2, men: 1, women: 1 },
  { item: 'Duty shirt — Short Sleeve Midnight Navy/LAPD Blue', units: 6, men: 3, women: 3 },
  { item: 'Duty shirt — Short Sleeve White (badge number tag)', units: 2, men: 1, women: 1 },
  { item: 'Duty Sweater — Midnight Navy/LAPD Blue', units: 6, men: 3, women: 3 },
  { item: 'Duty Under Carrier — Midnight Navy/LAPD Blue', units: 6, men: 3, women: 3 },
] as const

export const TIE_BREAKER_ORDER = [
  'Highest Wear Testing score',
  'Highest Price score',
  'random.org List Randomizer (witnessed)',
] as const
