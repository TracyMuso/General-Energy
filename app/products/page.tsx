'use client'
import type { Metadata } from 'next'
import '../globals.css'
import Link from 'next/link'
import Header from "@/components/Layout/Header"
import MainProductCard from "@/components/Cards/MainProductCard"
import { ProductsData } from '@/constants/data/products'
import { ArrowUp } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'General Energy | Utilities services in Congo',
  description: 'The number 1 Solar Energy provider in DRC',
}

export default function ProductsPage() {

  return (
    <section className='w-full'>
      <Header />
      <div className='py-8 w-full flex flex-col gap-10 lg:px-16 md:px-12 px-8'>
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