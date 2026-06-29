import { useState, useEffect } from 'react'
import { CardStack } from '@/components/ui/card-stack'
import type { CardStackItem } from '@/components/ui/card-stack'

const PRODUCTS: CardStackItem[] = [
  { id: 1, title: 'Chronic Care Ecosystem', description: 'End-to-end chronic disease management integrating continuous monitoring, care coordination, and predictive interventions.', tag: 'CHRONIC & COMPLEX', imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop' },
  { id: 2, title: "Women's Wellness & Maternity", description: "Comprehensive women's health coverage spanning maternity care, fertility support, and preventive wellness programs.", tag: "WOMEN'S HEALTH", imageSrc: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop' },
  { id: 3, title: 'SME Healthcare', description: 'Scalable group health solutions designed for small and medium enterprises with streamlined onboarding and flexible plan design.', tag: 'BUSINESS', imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop' },
  { id: 4, title: 'IPMI & Executive Care', description: 'International private medical insurance for executives and expatriates with global coverage networks and concierge services.', tag: 'EXECUTIVE & GLOBAL', imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop' },
  { id: 5, title: 'Freelancer & Individual', description: 'Digital-first individual health plans with instant issuance, flexible coverage options, and telehealth-centric care delivery.', tag: 'DIGITAL WORKFORCE', imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop' },
  { id: 6, title: 'API & Integration Layer', description: 'Full REST API access for product configuration, policy management, claims processing, and real-time event streaming.', tag: 'DEVELOPER', imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' },
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
    <section id="portfolio" className="px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-28 bg-navy">
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
