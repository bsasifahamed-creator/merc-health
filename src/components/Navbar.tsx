import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#portfolio' },
  { label: 'Verticals', href: '#verticals' },
  { label: 'Why MERC', href: '#different' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50
                   backdrop-blur-[20px] border-b border-border-custom transition-colors duration-300 bg-[rgba(8,17,31,0.97)]`}
      >
        <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-[clamp(1.5rem,5vw,4rem)] py-5 sm:py-6">
          <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img src="/logo.png" alt="M E R C" className="h-8 sm:h-10 w-auto" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-heading text-lg sm:text-xl font-semibold text-gold tracking-widest">M E R C</span>
              <span className="font-mono text-[0.55rem] sm:text-[0.65rem] tracking-[0.1em] text-platinum/70 hidden sm:block leading-tight">Modern Embedded Refined Care</span>
            </div>
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
            <a href="mailto:operations@merc.care" className="inline-flex items-center gap-2 px-6 py-2.5 border border-gold text-gold rounded-full text-[0.78rem] tracking-[0.12em] uppercase font-medium font-body hover:bg-gold hover:text-navy transition-colors duration-200">
              Request Access
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-platinum bg-transparent border-none cursor-pointer p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-navy flex flex-col items-center overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-platinum bg-transparent border-none cursor-pointer p-2"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>

            <nav className="flex flex-col items-center gap-6 pt-20 pb-12 w-full px-6">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="M E R C" className="h-12 sm:h-14 w-auto" />
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-semibold text-gold tracking-widest">M E R C</span>
                  <span className="font-mono text-[0.6rem] tracking-[0.1em] text-platinum/70 leading-tight">Modern Embedded Refined Care</span>
                </div>
              </div>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setMobileOpen(false); setTimeout(() => { document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }, 100) }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-[2rem] text-ivory hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:operations@merc.care"
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
