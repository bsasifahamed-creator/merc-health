import { useRef, useState, useCallback } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, animate } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const DIFFERENTIATORS = [
  { number: '01', title: 'Weeks, Not Months', desc: 'Pre-built infrastructure eliminates 9–18 months of development time.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop' },
  { number: '02', title: 'Zero CAPEX for Insurers', desc: 'SaaS model means no upfront infrastructure investment.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop' },
  { number: '03', title: 'Unified Broker Intelligence', desc: 'Single platform for broker onboarding, commissions, and compliance.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
  { number: '04', title: 'Embedded Care', desc: 'Integrate telehealth and wellness directly into insurance products.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
  { number: '05', title: 'UAE-Native Compliance', desc: 'Built for DHA, DoH, MOHAP, and CBUAE requirements from day one.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop' },
  { number: '06', title: 'Predictive Analytics', desc: 'AI-powered portfolio insights and automated risk scoring.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
]

function wrap(min: number, max: number, v: number): number {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

export function WhyMerc() {
  const [active, setActive] = useState<number | null>(null)

  const getStep = () => {
    if (typeof window === 'undefined') return 400
    if (window.innerWidth >= 1024) return 380 + 20 // lg (w-[380px] + gap-5 [20px])
    if (window.innerWidth >= 640) return 320 + 20  // sm (w-[320px] + gap-5 [20px])
    return 280 + 12 // mobile (w-[280px] + gap-3 [12px])
  }

  const baseX = useMotionValue(0)
  const smoothX = useSpring(baseX, { damping: 80, stiffness: 120, mass: 0.8 })

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 80, stiffness: 150 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], { clamp: false })

  const x = useTransform(smoothX, (v) => {
    const wrapDistance = getStep() * DIFFERENTIATORS.length
    if (wrapDistance === 0) return '0px'
    return `${wrap(-wrapDistance, 0, v)}px`
  })

  const directionFactor = useRef<number>(1)
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * 40 * (delta / 1000)
    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1
    moveBy += directionFactor.current * moveBy * Math.min(velocityFactor.get(), 3)
    baseX.set(baseX.get() + moveBy)
  })

  const goLeft = useCallback(() => {
    animate(baseX, baseX.get() - getStep(), { type: 'spring', damping: 60, stiffness: 100, mass: 0.6 })
  }, [baseX])

  const goRight = useCallback(() => {
    animate(baseX, baseX.get() + getStep(), { type: 'spring', damping: 60, stiffness: 100, mass: 0.6 })
  }, [baseX])

  return (
    <section id="different" className="bg-slate overflow-hidden">
      {/* Section header */}
      <div className="px-4 sm:px-6 lg:px-16 pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-10 lg:pb-14">
        <div className="max-w-6xl mx-auto animate-fade-up">
          <span className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.28em] uppercase text-gold">Differentiation</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight mt-3 text-ivory leading-tight">
            Why Industry Leaders<br className="hidden sm:block" />Choose MERC
          </h2>
        </div>
      </div>

      {/* Velocity-scrolling cards */}
      <div className="relative overflow-hidden py-4 sm:py-6">
        <motion.div className="flex gap-3 sm:gap-5 w-max" style={{ x }}>
          {[...DIFFERENTIATORS, ...DIFFERENTIATORS].map((d, i) => {
            const isActive = active === i
            return (
              <div
                key={`${d.number}-${i}`}
                onClick={() => setActive(isActive ? null : i)}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] h-[240px] sm:h-[280px] lg:h-[320px] rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden cursor-pointer group"
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', transform: isActive ? 'scale(1.03)' : 'scale(1)' }}
              >
                {/* Image */}
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${d.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Black overlay — only on active */}
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundColor: 'black',
                    opacity: isActive ? 0.65 : 0.2,
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Number */}
                <span
                  className="absolute top-4 sm:top-6 left-5 sm:left-7 text-5xl sm:text-6xl lg:text-7xl font-heading font-light text-gold pointer-events-none"
                  style={{ opacity: isActive ? 0 : 0.12, transition: 'opacity 0.3s ease' }}
                >
                  {d.number}
                </span>

                {/* Default text */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transform: isActive ? 'translateY(10px)' : 'translateY(0)',
                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                  }}
                >
                  <h3 className="text-base sm:text-xl font-semibold text-ivory font-body">{d.title}</h3>
                </div>

                {/* Active text */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span className="font-mono text-[0.6rem] sm:text-[0.72rem] tracking-[0.15em] text-gold block mb-1 sm:mb-2">{d.number}</span>
                  <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 text-gold font-body">{d.title}</h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body">{d.desc}</p>
                </div>

                {/* Gold bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold"
                  style={{
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>
            )
          })}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-slate to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-slate to-transparent z-10 pointer-events-none" />

        {/* Left button */}
        <button onClick={goLeft} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border-custom bg-card/80 backdrop-blur-sm text-platinum hover:border-gold hover:text-gold transition-colors flex items-center justify-center cursor-pointer" aria-label="Previous">
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        {/* Right button */}
        <button onClick={goRight} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border-custom bg-card/80 backdrop-blur-sm text-platinum hover:border-gold hover:text-gold transition-colors flex items-center justify-center cursor-pointer" aria-label="Next">
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </section>
  )
}
