import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Powering your home with green energy</h1>
        <p>
          General Energy is dedicated to providing reliable and sustainable
          energy for both residential and commercial clients. Save up on energy
          costs with flexible payment plans and your No 1 solar energy company
          <button>Get started!</button>
        </p>
      </div>
      <div>
        <Image
          src={'/images/man-holding-solar-panel.jpg'}
          height={640}
          width={480}
          alt="man holding solar panel"
        />
      </div>
    </section>
  )
}

export default Hero
