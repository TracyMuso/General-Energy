import Link from "next/link"
import Header from "@/components/Layout/Header"
import { ProductsAndServices } from "@/constants/data/about"

const AboutPage = () => {
  return (
    <div className="w-full">
      <Header />
      <section>
        <div>
          <h1>About us</h1>
          <div>
            <p>
            General Energy is based in Lubumbashi in the Haut-Katanga province of the DRC. It was founded in 2019 with the aim of making high quality and modern road traffic lights accessible. We aim to do better by incorporating solar energy and meeting the technical requirements of photovoltaic equipment, and hiring the most qualified professionals.<br /> <br />
            We carry out the installation and maintenance of:
            </p>
          <ul>
            {ProductsAndServices.map((item, idx) => (
              <li key={idx}>
               <Link key={idx} href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
           We also design and manufature electric <Link href={'/services/cable-fabrication'}>cables and wires</Link> and <Link href={'/products/extension-cords'}>extension cords</Link> .
          </div>
        </div>
      </section>
      </div>
  )
}

export default AboutPage;
