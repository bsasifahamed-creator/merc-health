import { FadeUpReveal } from '@/components/ui/FadeUpReveal'
import { CounterStat } from '@/components/ui/CounterStat'
import { SplitText } from '@/components/ui/SplitText'

export function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-28 bg-slate">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left column */}
          <FadeUpReveal>
            <div className="font-mono text-[0.65rem] sm:text-[0.72rem] tracking-[0.2em] sm:tracking-[0.32em] uppercase text-teal mb-3 sm:mb-4">
              About MERC
            </div>
            <h2 className="font-heading font-light text-ivory mb-5 sm:mb-6 leading-[1.08]"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)' }}
            >
              <SplitText
                text="Infrastructure Built for the UAE Healthcare Economy"
                goldWord="UAE"
                as="span"
              />
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="space-y-5 text-text-body font-body leading-relaxed text-[0.93rem]">
              <p>
                M E R C is the UAE&apos;s first dedicated healthcare insurance distribution
                and technology infrastructure platform — purpose-built to connect insurers,
                brokers, healthcare providers, and digital health ecosystems through a single
                intelligent layer.
              </p>
              <p>
                We eliminate the operational friction, regulatory complexity, and technological
                fragmentation that has historically limited the UAE and GCC healthcare insurance
                market from reaching its full potential.
              </p>
              <p>
                By unifying distribution, administration, analytics, and compliance into one
                platform, M E R C enables our partners to focus on what matters: delivering care.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-teal/40 text-teal font-mono text-[0.6rem] sm:text-[0.68rem] tracking-[0.02em]">
              <span className="text-gold shrink-0">&#9674;</span>
              <span>Distribution &amp; Technology Facilitator &mdash; Not an Insurer, TPA, or Reinsurer</span>
            </div>
          </FadeUpReveal>

          {/* Right column */}
          <div>
            <FadeUpReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
                <CounterStat value={9} suffix={'\u201318'} label="Months saved on deployment" />
                <CounterStat value={6} label="Regulatory authorities aligned" />
                <CounterStat value={0} label="Scalable broker network" isInfinity />
              </div>
            </FadeUpReveal>
            <FadeUpReveal delay={0.25}>
              <div className="space-y-5 text-text-body font-body leading-relaxed text-[0.93rem]">
                <p>
                  Our platform reduces insurer go-to-market timelines from years to weeks,
                  with zero upfront technology investment required. We handle the integration,
                  the compliance, and the ongoing optimisation.
                </p>
                <p>
                  Backed by deep UAE market expertise and aligned with all major regulatory
                  frameworks, M E R C is the infrastructure that the GCC healthcare
                  insurance ecosystem has been waiting for.
                </p>
              </div>
            </FadeUpReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
