export type GarmentCategory = 'Duty Shirt' | 'Under Carrier Shirt' | 'Sweater'
export type Colour = 'Midnight Navy/LAPD Blue' | 'White'
export type SleeveLength = 'Long Sleeve' | 'Short Sleeve' | 'N/A'
export type Fit = "Men's" | "Women's"

export interface CatalogItem {
  sku: string
  category: GarmentCategory
  colour: Colour
  sleeve: SleeveLength
  /** Appendix B Response Guideline 7 - single unit price applies across all sizes for a given SKU. */
  label: string
}

// Mirrors the seven Appendix B, Response Guideline 7 pricing line items exactly.
export const CATALOG: CatalogItem[] = [
  { sku: 'DS-LS-NAVY', category: 'Duty Shirt', colour: 'Midnight Navy/LAPD Blue', sleeve: 'Long Sleeve', label: 'Duty Shirt - Long Sleeve, Midnight Navy/LAPD Blue' },
  { sku: 'DS-LS-WHITE', category: 'Duty Shirt', colour: 'White', sleeve: 'Long Sleeve', label: 'Duty Shirt - Long Sleeve, White' },
  { sku: 'DS-SS-NAVY', category: 'Duty Shirt', colour: 'Midnight Navy/LAPD Blue', sleeve: 'Short Sleeve', label: 'Duty Shirt - Short Sleeve, Midnight Navy/LAPD Blue' },
  { sku: 'DS-SS-WHITE', category: 'Duty Shirt', colour: 'White', sleeve: 'Short Sleeve', label: 'Duty Shirt - Short Sleeve, White' },
  { sku: 'SW-NAVY', category: 'Sweater', colour: 'Midnight Navy/LAPD Blue', sleeve: 'N/A', label: 'Duty Sweater - Midnight Navy/LAPD Blue' },
  { sku: 'UC-NAVY', category: 'Under Carrier Shirt', colour: 'Midnight Navy/LAPD Blue', sleeve: 'Short Sleeve', label: 'Duty Under Carrier Shirt - Midnight Navy' },
  { sku: 'UC-WHITE', category: 'Under Carrier Shirt', colour: 'White', sleeve: 'Short Sleeve', label: 'Duty Under Carrier Shirt - White' },
]

export const MEN_SIZES = ['14', '14.5', '15', '15.5', '16', '16.5', '17', '17.5', '18', '18.5', '19', '19.5', '20', '20.5', '14T', '15T', '16T', '17T', '18T']
export const WOMEN_SIZES = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '10T', '12T', '14T', '16T']

export const BADGE_TAG_PRICE_SKU = 'BADGE-TAG'
export const BADGE_TAG_LABEL = 'Badge Number Tag (sewn, per garment - preferred feature)'

export function sizesForFit(fit: Fit): string[] {
  return fit === "Men's" ? MEN_SIZES : WOMEN_SIZES
}
