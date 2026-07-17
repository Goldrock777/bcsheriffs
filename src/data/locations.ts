export type Region = 'Lower Mainland' | 'Interior' | 'North' | 'Vancouver Island'

export interface DeliveryLocation {
  id: string
  name: string
  address: string
  city: string
  postal: string
  region: Region
  /** Approximate coordinates for the illustrative coverage map — not survey-grade. */
  lat: number
  lon: number
}

// Our distribution point for freight modeling — approximate Surrey coordinates.
export const WAREHOUSE_ORIGIN = { name: 'Surrey Warehouse', lat: 49.111, lon: -122.79 }

export const REGION_COLOR: Record<Region, string> = {
  'Lower Mainland': 'var(--gold)',
  Interior: 'var(--blue)',
  North: 'var(--green)',
  'Vancouver Island': 'var(--red)',
}

export const DELIVERY_LOCATIONS: DeliveryLocation[] = [
  // Lower Mainland
  { id: 'abbotsford', name: 'Abbotsford', address: '32375 Veterans Way', city: 'Abbotsford', postal: 'V2T 0B3', region: 'Lower Mainland', lat: 49.038, lon: -122.279 },
  { id: 'central-float', name: 'Central Float Pool', address: '651 Carnarvon Street', city: 'New Westminster', postal: 'V3M 1C9', region: 'Lower Mainland', lat: 49.202, lon: -122.911 },
  { id: 'chilliwack', name: 'Chilliwack', address: '46085 Yale Road', city: 'Chilliwack', postal: 'V2P 2L8', region: 'Lower Mainland', lat: 49.157, lon: -121.951 },
  { id: 'coquitlam-ops', name: 'Sheriff Provincial Operations — Coquitlam', address: 'Roadside Building, 2601 Lougheed Highway', city: 'Coquitlam', postal: 'V3C 4J2', region: 'Lower Mainland', lat: 49.253, lon: -122.793 },
  { id: 'jibc', name: 'Justice Institute of B.C.', address: '715 McBride Blvd.', city: 'New Westminster', postal: 'V3L 5T4', region: 'Lower Mainland', lat: 49.211, lon: -122.925 },
  { id: 'new-westminster', name: 'New Westminster', address: '651 Carnarvon Street', city: 'New Westminster', postal: 'V3M 1C9', region: 'Lower Mainland', lat: 49.202, lon: -122.905 },
  { id: 'north-van', name: 'North Vancouver', address: '200 East 23rd Street', city: 'North Vancouver', postal: 'V7L 4R4', region: 'Lower Mainland', lat: 49.32, lon: -123.073 },
  { id: 'chief-sheriff', name: 'Office of Chief Sheriff', address: '#401 - 800 Hornby Street', city: 'Vancouver', postal: 'V6Z 2C5', region: 'Lower Mainland', lat: 49.284, lon: -123.121 },
  { id: 'prof-standards', name: 'Office of Professional Standards', address: '#99 - 800 Hornby Street', city: 'Vancouver', postal: 'V6Z 2C5', region: 'Lower Mainland', lat: 49.284, lon: -123.119 },
  { id: 'poco-itau', name: 'Port Coquitlam - ITAU', address: '2620 Mary Hill Road', city: 'Port Coquitlam', postal: 'V3C 3B2', region: 'Lower Mainland', lat: 49.259, lon: -122.779 },
  { id: 'poco', name: 'Port Coquitlam', address: '2620 Mary Hill Road', city: 'Port Coquitlam', postal: 'V3C 3B2', region: 'Lower Mainland', lat: 49.259, lon: -122.783 },
  { id: 'richmond', name: 'Richmond', address: '7577 Elmbridge Way', city: 'Richmond', postal: 'V6X 4J2', region: 'Lower Mainland', lat: 49.18, lon: -123.139 },
  { id: 'robson-square', name: 'Robson Square / Vancouver', address: '#98 - 800 Hornby Street', city: 'Vancouver', postal: 'V6Z 2C5', region: 'Lower Mainland', lat: 49.284, lon: -123.123 },
  { id: 'sechelt', name: 'Sechelt', address: '5480 Shorncliffe Avenue', city: 'Sechelt', postal: 'V0N 3A0', region: 'Lower Mainland', lat: 49.472, lon: -123.766 },
  { id: 'surrey', name: 'Surrey', address: "14340 - 57th Avenue", city: 'Surrey', postal: 'V3X 1B2', region: 'Lower Mainland', lat: 49.111, lon: -122.79 },
  { id: 'van-law-courts', name: 'Vancouver Law Courts', address: '#212 - 800 Smithe Street', city: 'Vancouver', postal: 'V6Z 2E1', region: 'Lower Mainland', lat: 49.281, lon: -123.121 },
  { id: 'van-provincial-court', name: 'Vancouver Provincial Court', address: '222 Main Street', city: 'Vancouver', postal: 'V6A 2S8', region: 'Lower Mainland', lat: 49.282, lon: -123.1 },

  // Interior Region
  { id: 'cranbrook', name: 'Cranbrook', address: "#102 - 11th Avenue", city: 'Cranbrook', postal: 'V1C 2P3', region: 'Interior', lat: 49.512, lon: -115.769 },
  { id: 'kamloops', name: 'Kamloops', address: '#221 - 455 Columbia Street', city: 'Kamloops', postal: 'V2C 6K4', region: 'Interior', lat: 50.674, lon: -120.328 },
  { id: 'kelowna', name: 'Kelowna', address: '1st Floor - 1355 Water Street', city: 'Kelowna', postal: 'V1Y 9R3', region: 'Interior', lat: 49.888, lon: -119.497 },
  { id: 'nelson', name: 'Nelson', address: '320 Ward Street', city: 'Nelson', postal: 'V1L 1S6', region: 'Interior', lat: 49.493, lon: -117.294 },
  { id: 'penticton', name: 'Penticton', address: '#116 - 100 Main Street', city: 'Penticton', postal: 'V2A 5A5', region: 'Interior', lat: 49.499, lon: -119.591 },
  { id: 'salmon-arm', name: 'Salmon Arm', address: '550 2nd Avenue', city: 'Salmon Arm', postal: 'V1E 4S4', region: 'Interior', lat: 50.699, lon: -119.283 },
  { id: 'south-okanagan', name: 'South Okanagan Escort Centre', address: '200 Enterprise Way', city: 'Oliver', postal: 'V0H 1T2', region: 'Interior', lat: 49.183, lon: -119.549 },
  { id: 'vernon', name: 'Vernon', address: '3001 27th Street', city: 'Vernon', postal: 'V1T 4W5', region: 'Interior', lat: 50.267, lon: -119.272 },

  // North Region
  { id: 'dawson-creek', name: 'Dawson Creek', address: "1201 - 103rd Avenue", city: 'Dawson Creek', postal: 'V1G 4J2', region: 'North', lat: 55.759, lon: -120.236 },
  { id: 'fort-st-john', name: 'Fort St. John', address: "10600 - 100th Street", city: 'Fort St. John', postal: 'V1J 4L6', region: 'North', lat: 56.251, lon: -120.847 },
  { id: 'prince-george', name: 'Prince George', address: '250 George Street', city: 'Prince George', postal: 'V2L 5S2', region: 'North', lat: 53.917, lon: -122.753 },
  { id: 'prince-rupert', name: 'Prince Rupert', address: '100 Market Place', city: 'Prince Rupert', postal: 'V8J 1B8', region: 'North', lat: 54.315, lon: -130.32 },
  { id: 'quesnel', name: 'Quesnel', address: 'Room #19 - 350 Barlow Avenue', city: 'Quesnel', postal: 'V2J 2C2', region: 'North', lat: 52.981, lon: -122.492 },
  { id: 'smithers', name: 'Smithers', address: 'Bag 5000 - 3793 Alfred Street', city: 'Smithers', postal: 'V0J 2N0', region: 'North', lat: 54.781, lon: -127.171 },
  { id: 'terrace', name: 'Terrace', address: '#220 - 3408 Kalum Street', city: 'Terrace', postal: 'V8G 2N6', region: 'North', lat: 54.517, lon: -128.603 },
  { id: 'williams-lake', name: 'Williams Lake', address: '540 Borland Street', city: 'Williams Lake', postal: 'V2G 1R8', region: 'North', lat: 52.128, lon: -122.141 },

  // Vancouver Island Region
  { id: 'campbell-river', name: 'Campbell River', address: "500 - 13th Avenue", city: 'Campbell River', postal: 'V9W 6P1', region: 'Vancouver Island', lat: 50.025, lon: -125.245 },
  { id: 'courtenay', name: 'Courtenay', address: '#27 - 420 Cumberland Road', city: 'Courtenay', postal: 'V9N 2C4', region: 'Vancouver Island', lat: 49.688, lon: -124.997 },
  { id: 'duncan', name: 'Duncan', address: '238 Government Street', city: 'Duncan', postal: 'V9L 1A5', region: 'Vancouver Island', lat: 48.778, lon: -123.708 },
  { id: 'nanaimo', name: 'Nanaimo', address: '#119 - 35 Front Street', city: 'Nanaimo', postal: 'V9R 5J1', region: 'Vancouver Island', lat: 49.166, lon: -123.936 },
  { id: 'port-alberni', name: 'Port Alberni', address: '2999 4th Avenue', city: 'Port Alberni', postal: 'V9Y 8A5', region: 'Vancouver Island', lat: 49.234, lon: -124.805 },
  { id: 'powell-river', name: 'Powell River', address: '#103 - 6953 Alberni Street', city: 'Powell River', postal: 'V8A 2B8', region: 'Vancouver Island', lat: 49.834, lon: -124.525 },
  { id: 'victoria', name: 'Victoria', address: '#111 - 850 Burdett Avenue', city: 'Victoria', postal: 'V8W 9J2', region: 'Vancouver Island', lat: 48.421, lon: -123.365 },
  { id: 'western-communities', name: 'Western Communities', address: '1756 Island Highway', city: 'Victoria', postal: 'V8W 9J5', region: 'Vancouver Island', lat: 48.451, lon: -123.508 },
]

export const REGION_ORDER: Region[] = ['Lower Mainland', 'Interior', 'North', 'Vancouver Island']

export function locationsByRegion(region: Region): DeliveryLocation[] {
  return DELIVERY_LOCATIONS.filter((l) => l.region === region)
}
