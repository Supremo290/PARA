import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import CTA from './sections/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-dark-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}