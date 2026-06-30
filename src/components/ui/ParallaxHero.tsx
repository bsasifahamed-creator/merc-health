'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Play } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '0% 0%',
        end: '100% 0%',
        scrub: 0,
      },
    })

    const layerConfigs = [
      { id: 'bg', yPercent: -12 },
      { id: 'content', yPercent: 20 },
    ]

    layerConfigs.forEach((config, idx) => {
      const targets = containerRef.current!.querySelectorAll(`[data-parallax-layer="${config.id}"]`)
      if (targets.length > 0) {
        tl.to(
          targets,
          { yPercent: config.yPercent, ease: 'none' },
          idx === 0 ? undefined : '<'
        )
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-navy">
      <div ref={containerRef} className="relative min-h-[70vh] sm:min-h-[100svh] flex items-center justify-center w-full">
        
        {/* Background Layer (Single 2D Image with Parallax) */}
        <div className="absolute top-0 left-0 w-full h-[120%] overflow-hidden pointer-events-none z-10">
          <img
            data-parallax-layer="bg"
            src="/parallax/hero-bg.webp"
            alt="MERC Health"
            className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
            loading="eager"
          />
        </div>

        

        {/* Left-side dark gradient overlay for text readability */}
        <div
          className="absolute inset-0 z-15 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(8, 17, 31, 0.85) 0%, rgba(8, 17, 31, 0.5) 30%, rgba(8, 17, 31, 0.15) 55%, transparent 80%)',
          }}
        />

        {/* Content Layer */}
        <div
          data-parallax-layer="content"
          className="flex items-start justify-start w-full h-[100svh] absolute top-0 left-0 z-20 will-change-transform px-6 lg:px-16"
        >
          <div className="max-w-3xl text-left pt-28 sm:pt-32 lg:pt-36">
            <div className="font-mono text-[0.7rem] sm:text-[0.75rem] tracking-[0.25em] sm:tracking-[0.32em] uppercase text-teal mb-4 sm:mb-6 flex items-center justify-start gap-2 sm:gap-3 flex-wrap">
              <span className="inline-block w-5 h-px sm:w-6 bg-teal shrink-0" />
              UAE · GCC · Healthcare Insurance
            </div>

            <h1
              className="font-heading font-light text-ivory leading-[1.04] tracking-tight mb-6 sm:mb-8"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)' }}
            >
              <span className="block">The Operating System</span>
              <span className="block">for <em className="text-gold not-italic font-normal">Modern</em> Healthcare</span>
              <span className="block">Insurance Distribution</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-text-body max-w-xl font-body leading-relaxed mb-6 sm:mb-8">
              The operating system for modern healthcare insurance distribution across the UAE and GCC.
            </p>

            <div className="flex items-center justify-start gap-3 sm:gap-4 flex-wrap">
              <a href="#about" className="bg-gold text-navy rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold inline-flex items-center gap-2 hover:bg-gold-light transition-colors font-body">
                Explore the Ecosystem
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-platinum hover:text-gold transition-colors font-body">
                <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                Watch Overview
              </a>
            </div>
          </div>
        </div>



        {/* Scroll hint (bottom-left) */}
        <div className="absolute bottom-8 left-6 lg:left-16 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted z-35 pointer-events-none">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          Scroll to explore
        </div>

        {/* Legal micro-disclaimer (bottom-right) */}
        <div className="absolute bottom-8 right-6 lg:right-16 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted max-w-[280px] text-right leading-relaxed hidden sm:block z-35 pointer-events-none">
          Distribution &amp; Technology Facilitator &middot; Not an Insurer, TPA, or Reinsurer
        </div>

        {/* Fade gradient at bottom */}
        <div
          className="z-40 w-full h-[30%] absolute bottom-0 left-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(8,17,31,1) 0%, rgba(8,17,31,0.738) 19%, rgba(8,17,31,0.541) 34%, rgba(8,17,31,0.382) 47%, rgba(8,17,31,0.278) 56.5%, rgba(8,17,31,0.194) 65%, rgba(8,17,31,0.126) 73%, rgba(8,17,31,0.075) 80.2%, rgba(8,17,31,0.042) 86.1%, rgba(8,17,31,0.021) 91%, rgba(8,17,31,0.008) 95.2%, rgba(8,17,31,0.002) 98.2%, transparent 100%)',
          }}
        />
      </div>
    </section>
  )
}
