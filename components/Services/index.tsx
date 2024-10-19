import Link from "next/link"
import { ProductsAndServices } from "@/constants/data/about"

const Services = () => {
  return (
    <section>
      <h3></h3>
      <ul className=" w-2/3 pt-4 list-disc list-inside space-y-3 columns-2">
              {ProductsAndServices.map((item, idx) => (
                <li className="font-bold" key={idx}>
                  <Link className="hover:underline " key={idx} href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
    </section>
  )
}

export default Services;
