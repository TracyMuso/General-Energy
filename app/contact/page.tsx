'use client'
import Link from 'next/link';
import '../globals.css'
import Header from "@/components/Layout/Header";
import Contact from '@/components/Contact';
import FAQs from '@/components/faqs';

const ContactPage = () => {
  return (
    <div className="w-full">
      <Header />
      <section className="w-full contact-top md:h-[83vh] flex flex-col justify-center items-center gap-4 sm:py-12 py-16">
        <h1 className='font-bold lg:text-4xl sm:text-3xl text-2xl pb-4'>We are here for you</h1>
        <p className='lg:text-xl sn:text-base sm:leading-7 md:leading-11 text-m w-4/5 text-center pb-6'>General Energy has been serving customers excellently since 2019. Please the use the available platforms to get in touch. Or come visit us at the office. <br /> Please check out the frequently asked questions below, </p>
        <Link className='bg-white hover:bg-blue-200 md:text-[17px] text-sm px-6 py-3 text-center rounded-xl font-bold' href={'#contact'}> Go to Contact form</Link>
        <Link className='bg-yellow-500 md:text-[17px] text-sm px-6 py-3 text-center rounded-xl font-bold' href={'#faq'}> Go to FAQ</Link>
      </section>
      <section id='contact' className='w-full sm:px-16 px-10 flex flex-col gap-7 items-center py-16'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Get in touch</h1>
        <Contact />
      </section>
      <section id='faq' className='md:px-20 px-10 pt-6 pb-16'>
        <FAQs />
      </section>
    </div>
  )
}

export default ContactPage;
