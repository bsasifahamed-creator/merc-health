const LINKS = {
  platform: ['Embedded Distribution', 'API Infrastructure', 'Analytics Engine', 'Fraud Detection'],
  partners: ['Insurer Partnerships', 'Broker Onboarding', 'Provider Networks', 'Developer API'],
  connect: ['hello@merc.care', 'Dubai, UAE', 'LinkedIn'],
}

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-16 py-14 sm:py-20 border-t border-border-custom bg-[#060E18]">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          <div>
            <img src="/logo.png" alt="M E R C" className="h-12 sm:h-14 w-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-text-body leading-relaxed font-body">
              The operating system for modern healthcare insurance distribution across the UAE and GCC.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.22em] uppercase text-teal mb-4 sm:mb-5">Platform</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {LINKS.platform.map((l) => (
                <li key={l}><a href="#" className="text-sm sm:text-base text-text-body hover:text-gold transition-colors font-body">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.22em] uppercase text-teal mb-4 sm:mb-5">Partners</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {LINKS.partners.map((l) => (
                <li key={l}><a href="#" className="text-sm sm:text-base text-text-body hover:text-gold transition-colors font-body">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.22em] uppercase text-teal mb-4 sm:mb-5">Connect</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {LINKS.connect.map((l) => (
                <li key={l}><a href="#" className="text-sm sm:text-base text-text-body hover:text-gold transition-colors font-body">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm text-muted font-body">&copy; 2026 MERC Health. All rights reserved.</span>
          <span className="font-mono text-[0.6rem] sm:text-[0.7rem] tracking-[0.1em] text-muted">&#9674; Distribution &amp; Technology Facilitator</span>
        </div>
        <p className="text-[0.6rem] sm:text-xs text-muted/70 mt-4 sm:mt-6 leading-relaxed">
          Important Regulatory Disclaimer &mdash; M E R C is a technology and distribution facilitation company. M E R C is not an insurer, third-party administrator (TPA), or reinsurer, and does not underwrite, carry, or assume insurance risk of any kind. All insurance products offered, quoted, or distributed through the M E R C platform are issued, underwritten, and administered exclusively by licensed UAE partner insurance companies regulated by the relevant authorities including the Dubai Health Authority (DHA), Dubai Health Insurance Corporation (DHIC), Department of Health Abu Dhabi (DoH), Ministry of Health &amp; Prevention (MOHAP), and the Central Bank of the UAE (CBUAE). M E R C acts solely as a facilitating intermediary connecting distribution channels to licensed insurance carriers. Policyholders&apos; contractual relationship for insurance coverage is exclusively with the issuing insurance company. All regulatory enquiries should be directed to the relevant licensed insurer. Nothing on this website constitutes insurance.
        </p>
      </div>
    </footer>
  )
}
