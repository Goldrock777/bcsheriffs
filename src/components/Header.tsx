export function Header() {
  return (
    <>
      <div className="util">
        <div className="wrap util-in">
          <span className="l">GOVERNMENT OF BRITISH COLUMBIA · MINISTRY OF ATTORNEY GENERAL · COURT SERVICES BRANCH</span>
          <span className="r">
            <span>
              OPPORTUNITY <b>232053</b>
            </span>
          </span>
        </div>
      </div>
      <header className="nav">
        <div className="wrap nav-in">
          <div className="brand">
            <svg className="mark" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.5 5 5.2v5.3c0 4.3 2.9 8.2 7 9.5 4.1-1.3 7-5.2 7-9.5V5.2L12 2.5Z" />
              <path d="m9 12 2 2 4-4.5" />
            </svg>
            <div className="nm">
              DutyLine
              <small>BC SHERIFF SERVICE · DUTY UNIFORMS</small>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#proposal">Proposal</a>
            <a href="#specifications">Specifications</a>
            <a href="#coverage">Coverage</a>
            <a href="#platform">Order platform</a>
            <a href="#pricing">Pricing</a>
            <a href="#platform" className="cta">
              Start an order
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
