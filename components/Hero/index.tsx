import Image from 'next/image'

const Hero = () => {
  return (
    <section className="container px-24 py-11 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-9 w-3/5">
          <h1 className="text-5xl font-extrabold text-brown-900 leading-14">
            Powering your home with 
            <span className='text-green-600'> green</span> energy
          </h1>
          <p className="text-xl text-brown-800 font-Inria w-4/5">
            General Energy is dedicated to providing reliable and sustainable
            energy for both residential and commercial clients. Save up on
            energy costs with <span className='italic'> flexible</span> payment plans and your No 1 solar energy
            company.
          </p>
          <button className="w-[230px] text-xl rounded-xl bg-yellow-500 text-white font-bold px-8 py-4">
            View packages!
          </button>
        </div>
        <div>
          <Image
            src={'/images/man-holding-solar-panel.jpg'}
            height={640}
            width={480}
            alt="man holding solar panel"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
