import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { WhyMerc } from './components/WhyMerc'
import { Regulatory } from './components/Regulatory'
import { Faq } from './components/Faq'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { LenisProvider } from './components/LenisProvider'

export default function App() {
  return (
    <LenisProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyMerc />
        <Regulatory />
        <Faq />
        <CtaBand />
        <Footer />
      </div>
    </LenisProvider>
  )
}
