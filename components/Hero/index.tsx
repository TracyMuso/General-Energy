"use client"
import Link from "next/link"
import Header from "../Layout/Header"

const Hero = () => {
  return (
    <section id="hero" className="px-0 lg:pb-0 md:pb-20 w-full hero-section lg:h-[100vh]">
      <Header />
      <div className="flex flex-col md:items-left items-center w-full md:w-4/5 lg:w-3/5 xl:w-1/2 pt-12 pb-20 md:pb-0 lg:pt-16">
        <div className="flex flex-col gap-9 pl-12 pt-6 md:items-left items-center ">
          <h1 className="lg:text-5xl md:text-4xl text-3xl md:w-full lg:w-4/5 md:text-left text-center font-extrabold leading-14">
            Providing the best utilities in DRC
          </h1>
          <p className="text-xl md:text-left text-center w-4/5">
            Go Green with General Energy. We are here to bring smart and sustainable energy solutions with modern technology. 
          </p>
          <Link href={'#services'} className="w-[230px] text-xl text-center rounded-xl bg-yellow-600 text-blue-800 font-bold px-8 py-4">
            View Services!
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
