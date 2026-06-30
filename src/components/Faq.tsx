import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  { q: 'What is M E R C?', a: 'M E R C is a healthcare insurance distribution and technology platform purpose-built for the UAE and GCC markets. We are a distribution and technology facilitator — not an insurer, TPA, or reinsurer.' },
  { q: 'How does M E R C work?', a: 'Our platform provides six core infrastructure layers: Embedded Distribution, API-Driven Technology, Embedded Healthcare Services, Real-Time Analytics, Fraud Detection, and Renewal Automation.' },
  { q: 'Who can use M E R C?', a: 'M E R C serves insurance companies, brokers, healthcare providers, and digital health platforms operating in the UAE and GCC.' },
  { q: 'Is M E R C an insurance company?', a: 'No. All insurance products are underwritten and issued by licensed partner insurance companies regulated by UAE authorities.' },
  { q: 'How quickly can we deploy?', a: 'Partners can deploy compliant insurance products in weeks, not months, with our modular architecture and zero CAPEX SaaS model.' },
  { q: 'How do I get started?', a: 'Contact us at hello@merc.care for general enquiries, insurers@merc.care for partnerships, or api@merc.care for developer access.' },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 bg-navy">
      <div className="max-w-3xl mx-auto">
        <div className="animate-fade-up mb-10 sm:mb-14 text-center">
          <span className="font-mono text-[0.7rem] sm:text-[0.8rem] tracking-[0.28em] uppercase text-teal">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight mt-3 text-ivory">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-border-custom">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none"
              >
                <span className="text-base sm:text-lg font-semibold text-ivory pr-3 sm:pr-4 font-body">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 sm:h-6 sm:w-6 text-gold shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="pb-5 sm:pb-6 text-sm sm:text-base text-text-body leading-relaxed font-body">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
