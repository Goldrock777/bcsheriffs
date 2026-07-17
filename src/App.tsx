import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero, StandardsStrip, Commitment, CapabilitiesTable } from './components/Proposal'
import { Specifications } from './components/Specifications'
import { CoverageMap } from './components/CoverageMap'
import { OrderBuilder } from './components/OrderBuilder'
import { PricingSchedule } from './components/PricingSchedule'
import { RFP } from './data/contract'

function useRevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

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
            <a href="#specifications">Specifications</a>
            <a href="#coverage">Coverage</a>
            <a href="#platform">Order platform</a>
            <a href="#pricing">Pricing</a>
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
          <span>
            RFP {RFP.opportunityId} · BC SHERIFF SERVICE · BRITISH COLUMBIA
          </span>
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
          <a href="#platform" className="btn btn-gold">
            Try the order platform
          </a>
          <a href="#specifications" className="btn btn-ghost">
            Review specifications
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  useRevealOnScroll()
  return (
    <>
      <Header />
      <Hero />
      <StandardsStrip />
      <Commitment />
      <CapabilitiesTable />
      <Specifications />
      <CoverageMap />
      <OrderBuilder />
      <PricingSchedule />
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
