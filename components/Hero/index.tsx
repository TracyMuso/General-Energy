import Link from "next/link"

const Hero = () => {
  return (
    <section id="hero" className="px-0 py-11 w-full hero-section h-[83vh]">
      <div className="w-1/2">
        <div className="flex flex-col gap-9 pl-12 pt-6">
          <h1 className="text-5xl font-extrabold leading-14">
            Providing the best utilities in DRC
          </h1>
          <p className="text-xl w-4/5">
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
