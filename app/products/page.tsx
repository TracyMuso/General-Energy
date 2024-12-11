import '../globals.css'
import Link from 'next/link'
import MainProductCard from "@/components/Cards/MainProductCard"
import { ProductsData } from '@/constants/data/products'
import { ArrowUp } from '@/components/Icons'

export default function ProductsPage(){
  return (
    <section className='w-full relative pt-20'>
      <div className='pb-8 w-full pt-20 flex flex-col gap-10 lg:px-16 md:px-12 px-8'>
      <span className='bg-yellow-200 p-1 rounded-lg text-sm fixed lg:hidden items-center bottom-[10%] right-[4%]'>
      <Link className='w-full flex flex-col items-center' href={'#mobile-nav'}>
      <ArrowUp />
      </Link>
      </span>
        {ProductsData.map((item, idx) => (
          <MainProductCard {...item} key={idx} />
        ))}
      </div>
    </section>
  )
}