import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-dark-bg min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}