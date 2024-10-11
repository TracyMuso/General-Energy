const Hero = () => {
  return (
    <section className="px-0 py-11 w-full hero-section h-[83vh]">
      <div className="w-1/2">
        <div className="flex flex-col gap-9 pl-10">
          <h1 className="text-4xl font-extrabold text-brown-900 leading-14">
            Providing the best utilities in DRC
          </h1>
          <p className="text-xl text-brown-800 font-Inria w-4/5">
            General Energy is dedicated to installation and maintenance of photovoltaic systems, traffic lights, home automation, public lighting, fire hydrants, civil engineering and charging stations for electric vehicles. 
          </p>
          <button className="w-[230px] text-xl rounded-xl bg-yellow-500 text-white font-bold px-8 py-4">
            View Services!
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
