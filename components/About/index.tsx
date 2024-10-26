const PartnersData = [
  'Junc',
  'Solaire',
  'Somfy',
  'Yangtze Solar',
  'Light'
]

const About = () => {
  return (
    <section className="py-20 w-full flex flex-col items-center bg-yellow-100">
      <article className="text-center w-full md:px-24 px-10">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">Our Partners</h1>
        <p className="leading-8 lg:text-xl py-7">
          We have partnered with some of the best companies that help us acquire the best expertise and modern technologies.
        </p>
      </article>
        <div className="flex items-center flex-wrap sm:justify-between justify-center sm:gap-5 md:px-1 px-10">
          {PartnersData.map((item, idx) => (
          <span className="text-center text-blue-700 font-semibold p-4 lg:text-2xl md:text-xl text-m" key={idx}>{item}</span>
          ))}
      </div>
    </section>
  )
}

export default About;
