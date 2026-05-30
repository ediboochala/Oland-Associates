import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Authority from '@/components/sections/Authority'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Authority />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
