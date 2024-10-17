import Link from 'next/link';
import '../globals.css'
import Header from '@/components/Layout/Header';
import ServiceLinks from '@/components/Services/serviceLinks';
import ServiceDetsCard from '@/components/Cards/ServiceDetsCard';
import { serviceCard } from '@/constants/data/services';

export default function ServicesPage() {
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
      <section id='services-container' className="w-full flex flex-col py-20 px-12">
        {serviceCard.map((item, idx) => (
          <ServiceDetsCard {...item} key={idx} />
        ))}
      </section>
    </div>
  )
}
