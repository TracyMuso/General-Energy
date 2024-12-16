import Image from 'next/image'
import Footer from '@/components/Layout/Footer'
import Contact from '@/components/Contact'
import '../globals.css'

const AboutPage = () => {
  return (
    <div className="w-full">
      <section
      className="bg-gradient-to-t from-amber-200 to-yellow-400 pb-16 w-full xl:h-screen relative pt-[80px]">
        <div className="pt-20 flex flex-col gap-5 items-center">
          <h1 className="lg:text-5xl sm:text-3xl text-2xl font-semibold pb-5">
            A propos de Nous
          </h1>
          <div className="w-11/12 md:px-20 lg:pb-20 px-10">
            <p className="text-center lg:text-xl lg:leading-9">
              General Energy est basé à Lubumbashi dans la province du
              Haut-Katanga en RDC. Fondé en 2019 dans le but de rendre
              accessible la qualité et la modernisation des feux de
              signalisation routière, faire mieux en solaire en répondant aux
              exigences techniques de ces équipements et innover en apportant un
              plus dans tous nos services.
            </p>
            <div />
          </div>
        </div>
      </section>
      <section>
      <div className="md:py-20 py-12 lg:flex justify-between gap-12 items-center md:px-28 px-12 bg-blue-700">
            <div className="space-y-8 lg:text-left text-center lg:w-1/2">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl xl:pb-10 font-semibold text-white">
                Notre Vision
              </h2>
              <p className=" lg:leading-9 sm:block lg:text-xl text-white">
                Faire l'installation et la maintenance photovoltaïque,
                des feux de signalition routière moderne, de la domotique,
                de l'éclairage plublic de tous type, de la bouche d'incendie, du genie civile ainsi que de la borne de 
                recharge pour vehicule éléctrique
              </p>
            </div>
            <div className=" lg:block hidden">
              <Image
                src={'/images/woman-sittng-with-laptop.jpg'}
                width={300}
                height={400}
                alt="woman smiling"
              />
            </div>
          </div>
      </section>
      <section className="bg-white flex flex-col items-center gap-5 py-16 md:px-16 px-7 w-full">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold text-center">
          Réservez votre consultation aujourd'hui
        </h1>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage
