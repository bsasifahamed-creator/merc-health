import { motion } from 'motion/react'
import { FadeUpReveal } from '@/components/ui/FadeUpReveal'
import { staggerContainer, cardVariants } from '@/lib/animations'
import { ArrowUpRight, Heart, Shield } from 'lucide-react'

const PILLARS = [
  {
    tag: 'CX Support',
    icon: Heart,
    title: 'MERC Care',
    subtitle: 'Concierge-Level Member Support',
    desc: 'Dedicated, concierge-level support that makes your policy the one members remember.',
    features: [
      'Care Concierge — Named CX agent for every member with rapid query resolution',
      'Tele-Triage — Tele-led triage before every hospital visit',
      'e-Pharmacy Coordination — Prescription management and home delivery',
      'Home Care Facilitation — Post-discharge coordination reducing readmissions',
      'Member Satisfaction Reporting — Monthly CSAT/NPS data for retention intelligence',
    ],
  },
  {
    tag: 'Value-Added Segments',
    icon: Shield,
    title: 'MERC Protect',
    subtitle: 'Premium-Tier Add-Ons',
    desc: 'Premium-tier add-ons that increase GWP per member and sharpen your market positioning.',
    features: [
      'Enhanced Chronic Disease Cover — Diabetes and CVD management programmes',
      'Mental Health & Wellness — EAP, therapy sessions, and screenings',
      'International Emergency Evacuation — Medical repatriation and assistance',
      'Vision & Dental Bundles — Packaged optional benefits driving higher ASP',
      'Critical Illness Rider — High-margin lump-sum benefit improving GWP',
    ],
  },
]

export function MercVerticals() {
  return (
    <section id="verticals" className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 bg-navy">
      <div className="max-w-6xl mx-auto">
        <FadeUpReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.28em] uppercase text-gold">
              MERC Verticals
            </span>
            <h2 className="font-heading font-light text-ivory mt-3 sm:mt-4 leading-[1.08] max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}
            >
              Beyond the Platform — What You Actually Get from MERC
            </h2>
            <p className="text-text-body font-body leading-relaxed text-sm sm:text-base mt-4 sm:mt-5 max-w-2xl mx-auto">
              Most embedded insurance platforms stop at technology. MERC goes further — with two differentiated service pillars built to drive member satisfaction, loyalty, and premium stickiness.
            </p>
          </div>
        </FadeUpReveal>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {PILLARS.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={cardVariants}
                className="rounded-[1.25rem] sm:rounded-[1.5rem] bg-card border border-border-custom p-6 sm:p-8 lg:p-10 hover:border-gold/30 transition-colors group flex flex-col"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                  </div>
                  <div>
                    <span className="font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.15em] text-teal uppercase">{p.tag}</span>
                    <h3 className="text-xl sm:text-2xl font-heading text-gold mt-0.5">{p.title}</h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-text-body font-body leading-relaxed mb-5 sm:mb-6">
                  {p.desc}
                </p>

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[0.9rem] text-platinum/80 font-body leading-relaxed">
                      <span className="text-gold mt-1 shrink-0">◈</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:operations@merc.care"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors font-body group/link"
                >
                  Know More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        <FadeUpReveal delay={0.2}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-ivory font-heading font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
              MERC Care drives member retention. MERC Protect plugs the gaps the market leaves open.
            </p>
            <a
              href="mailto:operations@merc.care"
              className="inline-flex items-center gap-2 bg-gold text-navy rounded-full px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-gold-light transition-colors font-body"
            >
              Talk to Us
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </FadeUpReveal>
      </div>
    </section>
  )
}
