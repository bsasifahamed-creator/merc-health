import { motion } from 'motion/react'
import { FadeUpReveal } from '@/components/ui/FadeUpReveal'
import { SplitText } from '@/components/ui/SplitText'
import { staggerContainer, cardVariants } from '@/lib/animations'

const AUTHORITIES = [
  { abbr: 'DHA', name: 'Dubai Health Authority', url: 'https://dha.gov.ae' },
  { abbr: 'DHIC', name: 'Dubai Health Insurance Corp', url: 'https://isahd.ae' },
  { abbr: 'DHCC', name: 'Dubai Healthcare City Authority', url: 'https://dhcc.ae' },
  { abbr: 'DoH', name: 'Department of Health Abu Dhabi', url: 'https://doh.gov.ae' },
  { abbr: 'MOHAP', name: 'Ministry of Health & Prevention', url: 'https://mohap.gov.ae' },
  { abbr: 'CBUAE', name: 'Central Bank of the UAE', url: 'https://centralbank.ae' },
]

export function Regulatory() {
  return (
    <section id="regulatory" className="px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-28 bg-slate border-t border-border-custom">
      <div className="max-w-6xl mx-auto">
        <FadeUpReveal>
          <div className="font-mono text-[0.65rem] sm:text-[0.72rem] tracking-[0.2em] sm:tracking-[0.32em] uppercase text-teal mb-3 sm:mb-4">
            Regulatory Alignment
          </div>
          <h2 className="font-heading font-light text-ivory mb-4 sm:mb-5 leading-[1.08] max-w-[540px]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)' }}
          >
            <SplitText text="Built for UAE Regulatory Compliance" goldWord="UAE" as="span" />
          </h2>
          <p className="text-text-body font-body leading-relaxed text-sm sm:text-[0.93rem] max-w-[540px] mb-8 sm:mb-12">
            MERC Health is fully aligned with every major healthcare insurance regulatory
            authority across the UAE.
          </p>
        </FadeUpReveal>

        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-soft"
        >
          {AUTHORITIES.map((reg) => (
            <motion.div
              key={reg.abbr}
              variants={cardVariants}
              className="bg-slate p-4 sm:p-6 hover:bg-[#0F1E30] transition-colors duration-300 group"
            >
              <a
                href={reg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="font-mono text-[0.65rem] tracking-[0.18em] text-teal mb-2 uppercase">
                  {reg.abbr}
                </div>
                <div className="font-body text-[0.82rem] text-ivory mb-3">
                  {reg.name}
                </div>
                <div className="font-mono text-[0.7rem] text-muted group-hover:text-gold transition-colors inline-flex items-center gap-1">
                  {new URL(reg.url).hostname}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-[3px]">&rarr;</span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
