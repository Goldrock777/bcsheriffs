import { useState } from 'react'
import { DELIVERY_LOCATIONS, REGION_COLOR, REGION_ORDER, locationsByRegion } from '../data/locations'
import { MAP_VIEW, project, outlineToPoints, BC_MAINLAND, VANCOUVER_ISLAND, HAIDA_GWAII } from '../lib/geo'
import { SecHead, Head } from './ui'

export function CoverageMap() {
  const [hover, setHover] = useState<string | null>(null)
  const hovered = DELIVERY_LOCATIONS.find((l) => l.id === hover) ?? null

  return (
    <section className="block" id="coverage">
      <div className="wrap">
        <SecHead no="04" label="Coverage" />
        <Head
          title="All 41 BCSS delivery locations, province-wide"
          lede="Every location in Schedule 2, Annex 1 is pre-configured in the platform — from Fort St. John to Victoria — so an Order routes correctly the moment it's placed."
        />

        <div className="map-shell reveal">
          <div className="map-svg-wrap">
            <div style={{ position: 'relative', width: '100%' }}>
              <svg viewBox={`0 0 ${MAP_VIEW.width} ${MAP_VIEW.height}`} xmlns="http://www.w3.org/2000/svg">
                <polygon points={outlineToPoints(BC_MAINLAND)} fill="rgba(111,168,220,0.05)" stroke="var(--line-3)" strokeWidth="1.5" />
                <polygon points={outlineToPoints(VANCOUVER_ISLAND)} fill="rgba(111,168,220,0.05)" stroke="var(--line-3)" strokeWidth="1.5" />
                <polygon points={outlineToPoints(HAIDA_GWAII)} fill="rgba(111,168,220,0.05)" stroke="var(--line-3)" strokeWidth="1.5" />
                {DELIVERY_LOCATIONS.map((loc) => {
                  const { x, y } = project(loc.lat, loc.lon)
                  return (
                    <g
                      key={loc.id}
                      className="map-pin"
                      onMouseEnter={() => setHover(loc.id)}
                      onMouseLeave={() => setHover((h) => (h === loc.id ? null : h))}
                    >
                      <circle cx={x} cy={y} r={hover === loc.id ? 6.5 : 4.2} fill={REGION_COLOR[loc.region]} stroke="#070b12" strokeWidth="1.2" />
                    </g>
                  )
                })}
              </svg>
              {hovered && (
                <div
                  className="map-tooltip"
                  style={{
                    left: `${(project(hovered.lat, hovered.lon).x / MAP_VIEW.width) * 100}%`,
                    top: `${(project(hovered.lat, hovered.lon).y / MAP_VIEW.height) * 100}%`,
                  }}
                >
                  <b>{hovered.name}</b>
                  <br />
                  {hovered.address}, {hovered.city}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="map-region-list">
              {REGION_ORDER.map((region) => (
                <div className="map-region-group" key={region}>
                  <h5 style={{ color: REGION_COLOR[region] }}>
                    <span className="dot" style={{ background: REGION_COLOR[region] }} />
                    {region} · {locationsByRegion(region).length}
                  </h5>
                  {locationsByRegion(region).map((loc) => (
                    <div
                      className="map-loc-row"
                      key={loc.id}
                      onMouseEnter={() => setHover(loc.id)}
                      onMouseLeave={() => setHover((h) => (h === loc.id ? null : h))}
                      style={{ color: hover === loc.id ? 'var(--text)' : undefined }}
                    >
                      <span className="city">{loc.name}</span>
                      <span className="mono" style={{ fontSize: '0.7rem' }}>
                        {loc.postal}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="map-note">ILLUSTRATIVE MAP · APPROXIMATE POSITIONS · NOT TO SCALE</div>
          </div>
        </div>
      </div>
    </section>
  )
}
