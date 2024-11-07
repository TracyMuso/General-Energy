"use client"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import Contact from "@/components/Contact"
import '../globals.css'

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <section className="bg-gradient-to-t from-amber-200 to-yellow-400 py-16 w-full">
        <div className="py-12 flex flex-col gap-5 items-center">
          <h1 className="text-5xl font-bold pb-5">Our Story</h1>
          <div className="w-11/12 px-8">
            <p className="text-center">
            General Energy est basé à Lubumbashi dans la province du Haut-Katanga en RDC. Fondé en 2019 dans le but de rendre accessible la qualité et la modernisation des feux de signalisation routière, faire mieux en solaire en répondant aux exigences techniques de ces équipements et innover en apportant un plus dans tous nos services.<br />
          <br />
          </p>
          <p className="text-center hidden sm:block">
          We intends to position ourselves as market leaders in the utilities field by acquiring the best expertise, modern technologies and embrace sustainability. We work with various clients in both residential and commercial settings. The safety of our customers and the general public is our top priority.
          </p>
          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col items-center gap-5 py-16 md:px-16 px-7 w-full">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold text-center">Book your consultation today</h1>
        <Contact />
      </section>
      <Footer />
      </div>
  )
}

export default AboutPage;
