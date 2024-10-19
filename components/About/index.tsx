import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 w-full flex flex-col items-center bg-yellow-100">
      <article className="text-center w-full px-24">
        <h1 className="text-4xl font-bold">Our Partners</h1>
        <p className="leading-8 text-xl py-7">
          We have partnered with some of the best companies that help us acquire the best expertise and modern technologies.
        </p>
      </article>
        <div className="flex items-center justify-between gap-5">
          <span className="text-center text-blue-700 font-semibold p-4 text-2xl">Junc</span>
          <span className="text-center text-blue-700 font-semibold p-4 text-2xl">Solaire</span>
          <span className="text-center text-blue-700 font-semibold p-4 text-2xl">Somfy</span>
          <span className="text-center text-blue-700 font-semibold p-4 text-2xl">Yangtze Solar</span>
          <span className="text-center text-blue-700 font-semibold p-4 text-2xl">Light</span>
      </div>
    </section>
  )
}

export default About;
