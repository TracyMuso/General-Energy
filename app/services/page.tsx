'use client'
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
      <section id='service-top' className='w-full md:pb-16 pb-8 px-0 md:h-[100vh]'>
      <Header />
        <div className='service-text w-4/5 lg:m-0 md:mt-8 mt-8 md:ml-8 flex flex-col md:justify-between justify-around service-hero-text md:w-1/2 lg:w-2/5 md:pl-12 xl:pl-20 py-5 rounded-xl h-[370px]'>
          <div>
            <h1 className='xl:text-5xl md:text-4xl text-2xl font-bold pb-3 '>General Energy</h1>
            <p className='lg:text-xl pt-2 pb-8'>Your number one energy and utilities company. We provide modern solutions to modern problems
            </p>
          </div>
          <Link href={'#services-container'} className='md:self-baseline mx-auto py-3 px-6 bg-yellow-400 rounded-md font-bold'>View our services below </Link>
        </div>
      </section>
      <section id='services-container' className="w-full flex flex-col items-center lg:items-start py-20 sm:px-12 px-8">
        {serviceCard.map((item, idx) => (
          <ServiceDetsCard {...item} key={idx} />
        ))}
      </section>
    </div>
  )
}
