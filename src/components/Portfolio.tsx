import { useState, useEffect } from 'react'
import { CardStack } from '@/components/ui/card-stack'
import type { CardStackItem } from '@/components/ui/card-stack'

const PRODUCTS: CardStackItem[] = [
  { id: 1, title: 'SME Group Plans', description: 'Group cover for 3–200-person teams, via MERC\'s broker engine with instant quotes and digital issuance.', tag: 'BROKER-DISTRIBUTED', imageSrc: '/products/sme-group.png' },
  { id: 2, title: 'Essential Benefits Plan', description: 'DHA-mandated entry-tier cover — a high-volume compliance segment with streamlined onboarding.', tag: 'MANDATORY · HIGH-VOLUME', imageSrc: '/products/ebp.png' },
  { id: 3, title: 'Enhanced EBP', description: 'Richer benefits above the EBP floor — better experience and margin for the upwardly mobile segment.', tag: 'UPGRADED TIER', imageSrc: '/products/enhanced-ebp.png' },
  { id: 4, title: 'IPMI & Enterprise', description: 'Cross-border cover for multinationals and expat families across the GCC with concierge services.', tag: 'CROSS-BORDER', imageSrc: '/products/ipmi.png' },
  { id: 5, title: 'Individual & Retail', description: 'Standalone cover for freelancers and the self-employed — digital-first issuance and telehealth-centric care.', tag: 'GROWTH SEGMENT', imageSrc: '/products/individual.png' },
  { id: 6, title: 'API & Integration Layer', description: 'Full REST API for product configuration, policy management, claims processing, and real-time event streaming.', tag: 'DEVELOPER', imageSrc: '/products/api-platform.png' },
]

export function Portfolio() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="portfolio" className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-up mb-8 sm:mb-10 text-center">
          <span className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.28em] uppercase text-gold">Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight mt-3 text-ivory leading-tight">Purpose-Built Insurance Products</h2>
          <p className="text-sm sm:text-base text-text-body mt-3 max-w-xl mx-auto font-body">Each product is designed for specific market segments, powered by our unified infrastructure layer.</p>
        </div>
        <div className="animate-fade-up-delay">
          <CardStack
            items={PRODUCTS}
            initialIndex={0}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            showDots
            cardWidth={isMobile ? 290 : 480}
            cardHeight={isMobile ? 220 : 300}
            maxVisible={isMobile ? 3 : 5}
            overlap={0.5}
            spreadDeg={isMobile ? 25 : 40}
          />
        </div>
      </div>
    </section>
  )
}
