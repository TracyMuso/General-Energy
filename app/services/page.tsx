'use client'
import Link from 'next/link';
import '../globals.css'
import Header from '@/components/Layout/Header';
import ServiceLinks from '@/components/Services/serviceLinks';
import ServiceDetsCard from '@/components/Cards/ServiceDetsCard';
import { serviceCard } from '@/constants/data/services';
import { ArrowUp } from '@/components/Icons';

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
            <span className='bg-gradient-to-t from-amber-200 to-yellow-400 p-1 rounded-lg text-sm fixed md:hidden items-center bottom-[10%] right-[4%]'>
      <Link className='w-full flex flex-col items-center' href={'#mobile-nav'}>
      <ArrowUp />
      </Link>
      </span>
      <ServiceLinks />
      <section id='service-top' className='w-full md:pb-16 pb-8 px-0 md:h-[100vh]'>
      <Header />
        <div className='service-text w-4/5 lg:m-0 md:mt-8 mt-8 md:ml-8 flex flex-col md:justify-between justify-around service-hero-text md:w-1/2 lg:w-2/5 md:pl-12 xl:pl-20 py-5 rounded-xl h-[370px]'>
          <div>
            <h1 className='xl:text-5xl md:text-4xl text-2xl font-bold pb-3 '>Énergie générale</h1>
            <p className='lg:text-xl pt-2 pb-8'>
            Votre entreprise numéro un dans le domaine de l`énergie et des services publics qui propose des solutions modernes aux problèmes modernes. Passons ensemble à l`énergie verte !
            </p>
          </div>
          <Link href={'#services-container'} className='md:self-baseline lg:mx-0mx-auto py-3 px-6 bg-yellow-400 rounded-md font-bold'>Consultez nos prestations ci-dessous</Link>
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
