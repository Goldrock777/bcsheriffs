// A hand-simplified, illustrative outline of British Columbia — not survey
// data. Good enough to orient 41 delivery-location pins on a proposal
// exhibit; not suitable for anything requiring geographic accuracy.

export const MAP_VIEW = { width: 640, height: 760 }

const BOUNDS = { latMin: 48.0, latMax: 60.0, lonMin: -139.5, lonMax: -114.0 }

export function project(lat: number, lon: number): { x: number; y: number } {
  const x = ((lon - BOUNDS.lonMin) / (BOUNDS.lonMax - BOUNDS.lonMin)) * MAP_VIEW.width
  const y = ((BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin)) * MAP_VIEW.height
  return { x, y }
}

type LonLat = [number, number]

// Clockwise from the Lower Mainland border, tracing the Alberta divide north,
// the 60th parallel, the Alaska panhandle notch, and the coast back south.
export const BC_MAINLAND: LonLat[] = [
  [-123.1, 49.0],
  [-120.0, 49.0],
  [-117.0, 49.0],
  [-114.5, 49.0],
  [-114.3, 51.0],
  [-115.5, 53.0],
  [-118.0, 54.5],
  [-120.0, 56.5],
  [-120.0, 60.0],
  [-124.0, 60.0],
  [-129.0, 60.0],
  [-133.0, 60.0],
  [-133.5, 58.5],
  [-131.8, 57.5],
  [-130.0, 56.3],
  [-130.3, 55.0],
  [-129.9, 54.6],
  [-130.3, 54.3],
  [-129.0, 53.0],
  [-128.0, 52.0],
  [-127.5, 51.0],
  [-127.0, 50.3],
  [-125.5, 50.6],
  [-124.9, 49.8],
  [-123.9, 49.5],
  [-123.1, 49.0],
]

export const VANCOUVER_ISLAND: LonLat[] = [
  [-127.9, 50.85],
  [-126.9, 50.5],
  [-125.9, 50.3],
  [-125.2, 49.9],
  [-124.9, 49.5],
  [-123.9, 49.1],
  [-123.4, 48.6],
  [-123.3, 48.35],
  [-124.0, 48.4],
  [-125.3, 48.6],
  [-126.6, 49.3],
  [-127.9, 50.0],
]

export const HAIDA_GWAII: LonLat[] = [
  [-132.7, 54.2],
  [-131.4, 54.3],
  [-131.2, 53.0],
  [-132.3, 52.2],
  [-133.1, 53.1],
]

export function outlineToPoints(outline: LonLat[]): string {
  return outline.map(([lon, lat]) => {
    const { x, y } = project(lat, lon)
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
}

// Great-circle distance — a straight-line lower bound, not real road distance
// (actual driven/carrier distance to northern and coastal points, especially
// anything served by ferry or floatplane, will be meaningfully longer).
export function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
