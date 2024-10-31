import Link from "next/link"
import Image from "next/image"
import type { ServiceCardInterface } from "@/types"

const ServiceDetsCard = ({ service, maintext, icon, img, point1, point2, point3, point4, link, id }: ServiceCardInterface) => {
  return (
    <div id={id} className='flex flex-col items-center md:items-start gap-6 rounded-xl pt-8 pb-4'>
      <div className="flex items-center gap-4 sm:pl-5">
        <h1 className='md:text-3xl text-2xl font-bold'>{service}</h1>
        <Image src={icon} width={35} height={35} alt="icon" />
      </div>
          <div className='flex md:items-start items-center sm:w-4/5 md:justify-between justify-center gap-7 py-5 sm:px-9  px-1 border-b-2 border-blue-500'>
            <div className='flex flex-col justify-between gap-3 md:w-3/5 pt-6'>
              <p className="italic md:text-left md:text-[17px] text-center">{maintext}</p>
              <ul className='text-left md:text-base text-sm list-disc space-y-3 list-inside pb-4 md:pt-1 pt-5'>
                <li>{point1}</li>
                <li>{point2}</li>
                <li>{point3}</li>
                <li>{point4}</li>
              </ul>
              <div className='flex flex-col sm:flex-row items-center gap-4'>
                <Link className='bg-yellow-400 text-white md:text-base text-sm font-bold rounded-2xl py-2 px-5 w-1/2 text-center' href={link}>
                View Packages
                </Link>
                <Link className='border-yellow-500 border md:text-base hover:bg-yellow-400 text-sm font-bold rounded-2xl py-2 px-5 w-1/2 text-center' href={'#'}>
                View Projects
                </Link>
              </div>
            </div>
            <div className="w-[600px] h-[450px] hidden lg:block object-cover">
              <Image className='rounded-lg' src={img} alt='supporting image' width={570} height={430} />
            </div>
          </div>
        </div>
  )
}

export default ServiceDetsCard;
