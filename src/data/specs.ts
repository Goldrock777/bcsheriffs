export interface SpecGroup {
  heading: string
  items: string[]
}

export interface GarmentSpec {
  id: string
  label: string
  annex: string
  groups: SpecGroup[]
}

export const GARMENT_SPECS: GarmentSpec[] = [
  {
    id: 'duty-shirt',
    label: 'Duty Shirt',
    annex: 'Schedule 1 · Annex 1',
    groups: [
      { heading: 'Colour', items: ['Midnight Navy/LAPD Blue (RGB 27, 36, 82)', 'White (RGB 255, 255, 255)'] },
      {
        heading: 'Fabric',
        items: [
          '75% Poly / 25% wool blend, or equivalent',
          'Machine washable and machine dryable',
          'Pre-shrunk',
          'Fluid resistant finish',
          'Wrinkle resistant',
          'Colour fade resistant',
          'Pilling resistant',
          'Breathable',
          'Wicking material (preferred)',
        ],
      },
      {
        heading: 'Sizing & Fit',
        items: [
          'Short and long sleeve',
          "Men's and Women's style",
          "Men's sizes 14–20.5, incl. tall & half sizes (min.)",
          "Women's sizes 2–28 incl. tall (min.)",
          "Women's cut available",
          'Extra-long shirt tails',
          'Long sleeve available in shorter & longer lengths',
        ],
      },
      {
        heading: 'Design',
        items: [
          'Same product line across style, sleeve length & colour',
          'Zippered front closure under false button placket',
          '4½" slide-in epaulette with button closure',
          'Five military creases (2 front, 3 back), not through pockets',
          'No badge eyelets on chest',
          'Permanent collar stays, fused collar',
          'Top stitch construction',
        ],
      },
      { heading: 'Packaging', items: ['Individually packaged'] },
      { heading: 'Closure & Fasteners', items: ['YKK brand zipper', 'Melamine buttons', 'Velcro brand hook and loop'] },
      { heading: 'Pocket', items: ['Two pleated & scalloped flap chest pockets', 'Hook-and-loop flap closure, non-functional buttons', 'Pen opening'] },
      { heading: 'Cresting', items: ['BC Sheriffs crest, each sleeve, 1" below shoulder seam (Ministry supplied)', 'Badge number tag above right chest pocket (preferred, vendor supplied)'] },
    ],
  },
  {
    id: 'under-carrier',
    label: 'Under Carrier Shirt',
    annex: 'Schedule 1 · Annex 2',
    groups: [
      { heading: 'Colour', items: ['Midnight Navy/LAPD Blue (RGB 27, 36, 82)', 'White (RGB 255, 255, 255)'] },
      {
        heading: 'Fabric',
        items: [
          'Dual fabric — upper: polyester / poly-rich twill, wrinkle & fluid resistant',
          'Dual fabric — lower: moisture-wicking stretch knit (poly/spandex)',
          'Machine washable and machine dryable',
          'Pre-shrunk',
          'Pilling & colour fade resistant',
          'Breathable',
        ],
      },
      { heading: 'Sizing & Fit', items: ['Short sleeve', "Men's and Women's style & sizes", "Women's cut available"] },
      {
        heading: 'Design',
        items: [
          'Class A appearance in visible areas, visually matches Duty Shirt',
          'Collar with min. 2 buttons on centre front placket',
          'Dual-fabric seam sits under carrier',
          '4½" slide-in epaulette with button closure',
          'No badge eyelets, permanent collar stays, fused collar',
        ],
      },
      { heading: 'Packaging', items: ['Individually packaged'] },
      { heading: 'Cresting', items: ['BC Sheriffs crest, each sleeve, 1" below shoulder seam (Ministry supplied)'] },
    ],
  },
  {
    id: 'sweater',
    label: 'Duty Sweater',
    annex: 'Schedule 1 · Annex 3',
    groups: [
      { heading: 'Colour', items: ['Midnight Navy/LAPD Blue (RGB 27, 36, 82)'] },
      {
        heading: 'Fabric',
        items: [
          'Wool, wool-blend, or acrylic-blend knit',
          'Warmth retention, breathable, abrasion resistant, non-pilling',
          'Shape-retaining, machine washable and dryable',
          'Reinforcement panels: nylon/poly twill, shoulders & elbows, colour-matched, bar-tacked',
        ],
      },
      { heading: 'Sizing & Fit', items: ["Men's and Women's style & sizes", "Women's cut available", 'Full range of motion, compatible with body armour worn over or under', 'Waistband stays in position; sleeves maintain length'] },
      {
        heading: 'Design',
        items: [
          'Rib-knit cuffs, waistband and collar',
          '4½" slide-in epaulette with button closure',
          'Reinforcement panels at shoulders/elbows + right-chest badge panel',
          'Left and right mic clip strip',
        ],
      },
      { heading: 'Packaging', items: ['Individually packaged'] },
      { heading: 'Construction', items: ['Double-stitched seams throughout', 'Reinforced stitching at high-stress points', 'Reinforcement panels bar-tacked or equivalent'] },
      { heading: 'Cresting', items: ['BC Sheriffs crest, each sleeve, 1" below shoulder seam (Ministry supplied)', 'Badge number tag above right chest pocket (preferred, vendor supplied)'] },
    ],
  },
]
