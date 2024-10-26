import Image from "next/image"
import Link from "next/link"
import { ProductsAndServices } from "@/constants/data/about"

const Services = () => {
  return (
    <section id="services" className="w-full flex lg:justify-between justify-center items-center xl:gap-9 gap-6 py-16 md:px-20 px-6">
      <div className="flex flex-col gap-7 items-center lg:items-start">
        <h3 className="md:text-4xl text-2xl font-bold md:pb-4">Our Services</h3>
        <span className="md:text-xl pb-3 md:text-left text-center">We carry out the installation and maintenance of:</span>
        <ul className="md:py-8 py-4 xl:w-[700px] list-disc list-inside space-y-5 sm:columns-2">
         {ProductsAndServices.map((item, idx) => (
           <li className="font-bold" key={idx}>
              <Link className="hover:underline text-blue-800 sm:text-m xl:text-[18px]" key={idx} href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Link className="text-center font-semibold text-blue-900 w-1/2 px-6 py-3 border rounded-xl border-yellow-500" href={'/services'}>Go to services Page &rarr; </Link>
      </div>
      <div className="self-start lg:block hidden">
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
