import Image from "next/image"
import Link from "next/link"
import { ProductsAndServices } from "@/constants/data/about"

const Services = () => {
  return (
    <section id="services" className="flex justify-between items-center gap-9 py-16 px-6">
      <div className="flex flex-col gap-7">
        <h3 className="text-4xl font-bold pb-4">Our Services</h3>
        <span className="text-xl pb-3">We carry out the installation and maintenance of:</span>
        <ul className="py-8 w-[700px] list-disc list-inside space-y-5 columns-2">
         {ProductsAndServices.map((item, idx) => (
           <li className="font-bold" key={idx}>
              <Link className="hover:underline text-blue-800" key={idx} href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Link className="text-center font-semibold text-blue-900 w-1/2 px-6 py-3 border rounded-xl border-yellow-500" href={'/services'}>Go to services Page &rarr; </Link>
      </div>
      <div className="self-start">
        <Image
        src={'/images/pexels-kindelmedia-8487406-removebg-preview.png'}
        width={400}
        height={500}
        alt="woman inhardhat"
        />
      </div>
    </section>
  )
}

export default Services;
