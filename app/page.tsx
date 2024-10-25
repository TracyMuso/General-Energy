import './globals.css'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Layout/Footer'
import Products from '@/components/products'

export default function Home() {

  return (
    <div className="w-full max-w-[1536px]">
      <main className="flex flex-col items-center w-full m-0 p-0">
        <Hero />
        <Services />
        <Products />
        <About />
        <section className='py-16 px-0 flex flex-col gap-5 items-center'>
            <h2 className="text-4xl font-bold">Get in Touch</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
