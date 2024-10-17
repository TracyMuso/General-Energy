import Link from "next/link"
import Image from "next/image"
import type { ServiceCardInterface } from "@/types"

const ServiceDetsCard = ({ service, maintext, icon, img, point1, point2, point3, point4, link, id }: ServiceCardInterface) => {
  return (
    <div id={id} className='flex flex-col gap-6 rounded-xl pt-8 pb-4'>
      <div className="flex items-center gap-4 pl-5">
        <h1 className=' text-3xl font-bold'>{service}</h1>
        <Image src={icon} width={35} height={35} alt="icon" />
      </div>
          <div className='flex items-start w-4/5 justify-between gap-7 py-5 px-9 border-b-2 border-brown-200'>
            <div className='flex flex-col justify-between gap-3 w-3/5 pt-6'>
              <p>{maintext}</p>
              <ul className='list-disc list-inside pb-4'>
                <li>{point1}</li>
                <li>{point2}</li>
                <li>{point3}</li>
                <li>{point4}</li>
              </ul>
              <div className='flex items-center gap-4'>
              <Link className='bg-yellow-400 text-white font-bold rounded-2xl py-2 px-5 w-1/2 text-center' href={link}>
              View Packages
              </Link>
              <Link className='border-brown-400 border font-bold rounded-2xl py-2 px-5 w-1/2 text-center' href={'#'}>
              View Projects
              </Link>
              </div>
            </div>
            <div className="w-[600px] h-[450px] object-cover">
              <Image className='rounded-lg' src={img} alt='supporting image' width={570} height={430} />
            </div>
          </div>
        </div>
  )
}

export default ServiceDetsCard;
