import './globals.css'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-col items-center w-full m-0 p-0">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
