import Link from 'next/link';
import Image from 'next/image';
import '../globals.css'
import Header from '@/components/Layout/Header';
import ServiceLinks from '@/components/Services/serviceLinks';

export const ServicesPage = () => {
  return (
    <div className="w-full flex flex-col">
      <ServiceLinks />
      <Header />
      <section className='w-full py-16 px-12 service-top h-[83vh]'>
        <div className='flex flex-col justify-between service-hero-text w-2/5 p-6 rounded-xl h-[400px]'>
        <div>
        <h1 className='text-5xl font-bold pb-3'>General Energy</h1>
        <p className='text-xl pt-2 pb-8'>Your number one energy and utilities company. We provide modern solutions to modern problems</p>
        </div>
          <Link href={'#services-container'} className='self-baseline py-3 px-6 bg-yellow-400 rounded-md font-bold'>Check out our services below </Link>
        </div>
      </section>
      <section id='services-container' className="w-full flex flex-col items-center py-20 px-16">
        <div className='flex flex-col gap-9 items-center bg-brown-100 rounded-xl pt-8 pb-4'>
          <h1 className='text-center text-3xl font-bold'>service name</h1>
          <div className='flex items-center w-11/12 justify-between gap-7 py-5 px-9 border-t-2 border-brown-200'>
            <div className='flex flex-col justify-between gap-3'>
              <p>loreum ipsum decorum ids a language that was made in 1993</p>
              <ul className='list-disc list-inside pb-4'>
                <li>point1</li>
                <li>point 2</li>
                <li>pint 3</li>
                <li>pint 3</li>
              </ul>
              <Link className='bg-yellow-400 font-bold rounded-2xl py-2 px-5 w-1/2 text-center' href={'#'}>View Packages</Link>
            </div>
            <div>
              <Image src={'/images/men-installing-solar-panels.jpg'} alt='supporting image' width={500} height={350} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage;
