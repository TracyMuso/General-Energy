"use client"
import Image from "next/image"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import Contact from "@/components/Contact"
import '../globals.css'

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <section className="bg-gradient-to-t from-amber-200 to-yellow-400 py-16 w-full">
        <div className="md:pt-12 flex flex-col gap-5 items-center">
          <h1 className="lg:text-5xl sm:text-3xl text-2xl font-semibold pb-5">Notre histoire</h1>
          <div className="w-11/12 md:px-20 px-10">
            <p className="text-center lg:text-xl lg:leading-9">
            General Energy est basé à Lubumbashi dans la province du Haut-Katanga en RDC. Fondé en 2019 dans le but de rendre accessible la qualité et la modernisation des feux de signalisation routière, faire mieux en solaire en répondant aux exigences techniques de ces équipements et innover en apportant un plus dans tous nos services.
            </p>
          <div/>
          </div>
          <div className="md:py-20 py-12 flex justify-between gap-12 items-center md:px-28 px-12">
            <div className="space-y-8 sm:text-left text-center">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl xl:pb-10 font-semibold">Notre Vision</h2>
              <p className=" lg:leading-9 sm:block lg:text-xl">
              Nous avons l'intention de nous positionner comme leader du marché dans le domaine des services publics en acquérant la meilleure expertise, les technologies modernes et en adoptant la durabilité. Nous travaillons avec divers clients dans des milieux résidentiels et commerciaux. La sécurité de nos clients et du grand public est notre priorité absolue.
              </p>
            </div>
            <div className="w-[200px] h-[400px] lg:block hidden">
              <Image src={'/images/woman-sittng-with-laptop.jpg'} width={300} height={400} alt="woman smiling" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col items-center gap-5 py-16 md:px-16 px-7 w-full">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold text-center">Réservez votre consultation aujourd'hui</h1>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage;
