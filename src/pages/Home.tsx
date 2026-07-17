import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Hero, StandardsStrip, Commitment, CapabilitiesTable } from '../components/Proposal'
import { CoverageMap } from '../components/CoverageMap'
import { PricingSchedule } from '../components/PricingSchedule'
import { RFP } from '../data/contract'
import { useRevealOnScroll } from '../lib/useRevealOnScroll'

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="nm">DutyLine · BC Sheriff Service</div>
            <p>A proposal exhibit prepared in response to RFP {RFP.opportunityId} — Duty Shirts, Under Carrier Shirts and Sweaters for BC Sheriff Service.</p>
          </div>
          <div className="foot-col">
            <h4>Platform</h4>
            <a href="#proposal">Proposal</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#coverage">Coverage</a>
            <a href="#pricing">Pricing</a>
            <Link to="/portal">Order platform</Link>
          </div>
          <div className="foot-col">
            <h4>Procurement</h4>
            <span className="li">
              <b>Opportunity</b> {RFP.opportunityId}
            </span>
            <span className="li">
              <b>Ministry</b> {RFP.ministry}
            </span>
            <span className="li">
              <b>Buyer</b> {RFP.buyer}
            </span>
            <span className="li">
              <b>Closing</b> {RFP.closingDate} · {RFP.closingTime}
            </span>
          </div>
        </div>
        <div className="foot-base">
          <span>MINISTRY OF ATTORNEY GENERAL · COURT SERVICES BRANCH</span>
          <span>RFP {RFP.opportunityId} · BC SHERIFF SERVICE · BRITISH COLUMBIA</span>
        </div>
      </div>
    </footer>
  )
}

function CtaSection() {
  return (
    <section className="cta">
      <div className="wrap reveal">
        <h2>Everything BCSS needs to see, in one place</h2>
        <p>Specifications confirmed, coverage mapped, an ordering platform that already works, and pricing that computes itself.</p>
        <div className="hero-actions">
          <Link to="/portal" className="btn btn-gold">
            Try the order platform
          </Link>
          <a href="#capabilities" className="btn btn-ghost">
            Review capabilities
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useRevealOnScroll()
  useEffect(() => {
    document.title = 'DutyLine — BC Sheriff Service Duty Uniform Platform | RFP 232053'
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <StandardsStrip />
      <Commitment />
      <CapabilitiesTable />
      <CoverageMap />
      <PricingSchedule />
      <CtaSection />
      <Footer />
    </>
  )
}
