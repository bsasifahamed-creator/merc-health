import { useState } from 'react'
import { motion } from 'motion/react'
import { FadeUpReveal } from '@/components/ui/FadeUpReveal'
import { Modal } from '@/components/ui/Modal'
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

// Extended blog content for the modals
const BLOG_CONTENT = {
  'MERC Care': {
    image: '/blog/merc-care.png',
    paragraphs: [
      "In the modern healthcare landscape, members don't just expect coverage—they expect an experience. MERC Care transforms standard health insurance from a transactional necessity into a premium, concierge-level relationship.",
      "By assigning a named Care Concierge to every member, we eliminate the frustrating maze of automated call centers. Whether it's coordinating post-discharge home care to reduce readmissions, or managing complex chronic prescriptions with seamless home delivery, the focus is entirely on member outcomes and satisfaction.",
      "Furthermore, our Tele-Triage system acts as a digital front door, ensuring members receive immediate clinical guidance before stepping into a hospital. This not only optimizes care pathways but significantly reduces unnecessary claims costs, driving both member loyalty and sustainable loss ratios."
    ]
  },
  'MERC Protect': {
    image: '/blog/merc-protect.png',
    paragraphs: [
      "MERC Protect represents the next evolution of value-added insurance, designed specifically to plug the critical gaps left open by traditional coverage. By offering premium-tier add-ons, insurers can immediately elevate their market positioning while simultaneously increasing Gross Written Premium (GWP) per member.",
      "Our comprehensive wellness suites go beyond physical health, incorporating essential Mental Health & Wellness programs, including Employee Assistance Programs (EAP), virtual therapy, and preventative screenings.",
      "For cross-border and executive segments, features like International Emergency Evacuation and specialized Vision & Dental bundles provide the ultimate peace of mind. Meanwhile, high-margin Critical Illness riders ensure that when members face their toughest battles, their coverage is as robust as their care."
    ]
  }
}

export function MercVerticals() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <section id="verticals" className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 bg-navy relative">
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
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {PILLARS.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.div
                key={idx}
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

                <button
                  onClick={() => setActiveModal(p.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors font-body group/link self-start"
                >
                  Know More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Modals */}
        {PILLARS.map((p) => {
          const content = BLOG_CONTENT[p.title as keyof typeof BLOG_CONTENT]
          if (!content) return null
          
          return (
            <Modal key={`modal-${p.title}`} isOpen={activeModal === p.title} onClose={() => setActiveModal(null)}>
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-2/5 h-48 md:h-auto shrink-0 relative bg-navy">
                  <img 
                    src={content.image} 
                    alt={p.title} 
                    className="absolute inset-0 w-full h-full object-cover rounded-t-[1.5rem] md:rounded-l-[1.5rem] md:rounded-tr-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy to-transparent opacity-80" />
                </div>
                
                {/* Content Section */}
                <div className="p-6 sm:p-8 lg:p-12 w-full md:w-3/5 flex flex-col justify-center bg-card rounded-b-[1.5rem] md:rounded-r-[1.5rem] md:rounded-bl-none">
                  <div className="flex items-center gap-3 mb-4">
                    <p.icon className="w-6 h-6 text-gold" />
                    <span className="font-mono text-xs tracking-widest text-teal uppercase">{p.tag}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-ivory mb-2">{p.title}</h3>
                  <h4 className="text-lg text-gold mb-6 sm:mb-8 font-light italic">{p.subtitle}</h4>
                  
                  <div className="space-y-4 text-text-body font-body leading-relaxed text-sm sm:text-base">
                    {content.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border-custom">
                    <a href="mailto:operations@merc.care" className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors font-body">
                      Discuss Integration
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Modal>
          )
        })}

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
