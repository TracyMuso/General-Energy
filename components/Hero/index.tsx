"use client"
import Link from "next/link"
import Header from "../Layout/Header"

const Hero = () => {
  return (
    <section id="hero" className="px-0 lg:pb-0 md:pb-20 w-full hero-section lg:h-[100vh]">
      <Header />
      <div className="flex flex-col md:items-left xl:gap-6items-center w-full md:w-4/5 xl:w-1/2 pt-12 pb-20 md:pb-0 2xl:pt-16 ">
        <div className="flex flex-col 2xl:gap-12 gap-10 md:px-16 pt-6 px-8 md:items-start sm:px-12 items-center">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl md:w-full lg:w-4/5 md:text-left text-center font-extrabold md:leading-14">
            Providing the best utilities in DRC
          </h1>
          <p className="md:text-left md:text-xl w-4/5 text-center ">
            Go Green with General Energy. We are here to bring smart and sustainable energy solutions with modern technology. 
          </p>
          <span>
            <Link href={'#services'} className="w-[230px] md:text-xl text-center rounded-xl bg-yellow-600 text-blue-800 font-bold px-8 py-4">
              View Services!
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
