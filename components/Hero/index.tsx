import Link from 'next/link'

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-t from-amber-200 to-yellow-400 px-0 lg:pb-0 md:pb-20 w-full hero-section h-screen relative pt-[80px]"
    >
      <div className="flex flex-col md:items-left xl:gap-6 items-center w-full md:w-4/5 xl:w-1/2 pt-12 lg:pt-4 pb-20 md:pb-0 2xl:pt-16 ">
        <div className="flex flex-col 2xl:gap-12 gap-10 md:px-16 pt-6 px-8 md:items-start sm:px-12 items-center">
          <h1 className="lg:text-3xl md:text-4xl sm:text-2xl text-xl md:w-full lg:w-4/5 md:text-left text-center font-extrabold md:leading-12">
            Fournir les meilleurs services publics en Afrique
          </h1>
          <p className="md:text-left w-4/5 text-center ">
            Découvrez des solutions énergétiques durables qui responsabilisent
            votre communauté. Chez General Energy, nous fournissons des services
            publics fiables et respectueux de l`environnement pour alimenter un
            avenir plus brillant et plus propre.
          </p>
          <span className="active:scale-110">
            <Link
              href={'#services'}
              className="w-[230px] transform  md:text-xl text-center rounded-xl bg-yellow-600 hover:bg-yellow-400  text-blue-800 font-bold px-8 py-4"
            >
              Voir les prestations !
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
