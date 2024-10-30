'use client'
import '../globals.css'
import Header from "@/components/Layout/Header"
import MainProductCard from "@/components/Cards/MainProductCard"

export default function ProductsPage() {
  return (
    <section className='w-full'>
      <Header />
      <div className='py-8 w-full flex flex-col gap-10 px-16'>
        <MainProductCard />
        <MainProductCard />
        <MainProductCard />
      </div>
    </section>
  )
}