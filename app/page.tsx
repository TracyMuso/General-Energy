import './globals.css'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Layout/Footer'

export default function Home() {

  return (
    <div className="w-full max-w-[1536px]">
      <main className="flex flex-col items-center w-full m-0 p-0">
        <Hero />
        <Services />
        <About />
        <section className='py-16 px-10 w-full flex flex-col gap-5 items-center'>
            <h2 className="md:text-4xl text-2xl font-bold">Get in Touch</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
