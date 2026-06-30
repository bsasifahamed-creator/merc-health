import { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#portfolio' },
  { label: 'Verticals', href: '#verticals' },
  { label: 'Why MERC', href: '#different' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(8,17,31,0.72)', 'rgba(8,17,31,0.97)']
  )

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg }}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                   px-[clamp(1.5rem,5vw,4rem)] py-5 sm:py-6
                   backdrop-blur-[20px] border-b border-border-custom"
      >
        <a href="#" className="flex items-center gap-3 sm:gap-4">
          <img src="/logo.png" alt="M E R C" className="h-8 sm:h-10 w-auto" />
          <span className="font-mono text-[0.6rem] sm:text-[0.68rem] tracking-[0.15em] text-platinum leading-tight hidden md:block">Modern Embedded Refined Care</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}
              className="font-body text-[0.78rem] tracking-[0.12em] uppercase text-muted hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:hello@merc.care" className="inline-flex items-center gap-2 px-6 py-2.5 border border-gold text-gold rounded-full text-[0.78rem] tracking-[0.12em] uppercase font-medium font-body hover:bg-gold hover:text-navy transition-colors duration-200">
            Request Access
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-platinum bg-transparent border-none cursor-pointer p-1"
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-platinum bg-transparent border-none cursor-pointer p-1"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              <img src="/logo.png" alt="M E R C" className="h-12 sm:h-14 w-auto mb-4" />
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-[2rem] text-ivory hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:hello@merc.care"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 inline-flex items-center gap-2 px-8 py-3 bg-gold text-navy rounded-full font-body font-medium text-[0.9rem]"
              >
                Request Access
                <ArrowUpRight className="h-5 w-5" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
