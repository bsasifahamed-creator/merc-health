import { ArrowUpRight } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 bg-slate">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight mb-4 sm:mb-5 text-ivory leading-tight">
          Ready to Deploy <em className="text-gold">Next-Generation</em> Infrastructure?
        </h2>
        <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto mb-8 sm:mb-10 font-body leading-relaxed">
          Join the leading insurers, brokers, and healthcare providers already leveraging M E R C&apos;s infrastructure across the UAE and GCC.
        </p>
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <a href="mailto:operations@merc.care" className="bg-gold text-navy rounded-full px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold inline-flex items-center gap-2 hover:bg-gold-light transition-colors font-body">
            Get Started
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a href="mailto:api@merc.care" className="text-sm sm:text-base font-semibold text-platinum underline underline-offset-4 decoration-platinum/30 hover:decoration-platinum transition-colors font-body">
            Developer Access
          </a>
        </div>
      </div>
    </section>
  )
}
