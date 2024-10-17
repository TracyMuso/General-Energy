import Link from "next/link"
import Header from "@/components/Layout/Header"
import Contact from "@/components/Contact"
import { ProductsAndServices } from "@/constants/data/about"
import '../globals.css'

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <section className="bg-brown-100 pb-16">
        <div className="py-12 flex flex-col items-center">
          <h1 className="text-5xl font-bold pb-5">Our Story</h1>
          <div className="w-11/12 px-8">
            <p className="text-left">
            General Energy is based in Lubumbashi in the Haut-Katanga province of the DRC. It was founded in 2019 with the aim of making high quality and modern road traffic lights accessible. We aim to do better by incorporating solar energy and meeting the technical requirements of photovoltaic equipment, and hiring the most qualified professionals. We also design and manufature electric <Link href={'/services/cable-fabrication'}>cables </Link> and <Link className="font-bold hover:underline" href={'/products/extension-cords'}>extension cords</Link>.<br /> <br />
            We carry out the installation and maintenance of:
            </p>
              <ul className=" w-2/3 pt-4 list-disc list-inside space-y-3 columns-2">
              {ProductsAndServices.map((item, idx) => (
                <li className="font-bold" key={idx}>
                  <Link className="hover:underline " key={idx} href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-11/12 px-8">
          <p className="text-center italic">
          The world is facing an energy deficit and General Energy wants to position itself as a leader in the energy sector.
          </p>
        </div>
      </section>
      <section className="bg-white flex flex-col items-center gap-5 py-16">
        <h1 className="text-4xl font-bold text-center">Book your consultation today</h1>
        <Contact />
      </section>
      </div>
  )
}

export default AboutPage;
