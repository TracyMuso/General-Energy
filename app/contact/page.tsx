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
      <section className="w-full contact-top h-[83vh] flex flex-col justify-center items-center gap-4 py-12">
        <h1 className='font-bold text-4xl pb-4'>We are here for you</h1>
        <p className='text-xl w-4/5 text-center pb-6'>General Energy has been serving customers excellently since 2019. Please the use the available platforms to get in touch. Or come visit us at the office. <br /> Please check out the frequently asked questions below, </p>
        <Link className='bg-white px-6 py-3 text-center rounded-xl font-bold' href={'#contact'}> Go to Contact form</Link>
        <Link className='bg-yellow-500 px-6 py-3 text-center rounded-xl font-bold' href={'#faq'}> Go to FAQ</Link>
      </section>
      <section id='contact' className='w-full flex flex-col gap-7 items-center py-16'>
        <h1 className='text-4xl font-bold'>Get in touch</h1>
        <Contact />
      </section>
      <section id='faq' className='px-20 pt-6 pb-16'>
        <FAQs />
      </section>
    </div>
  )
}

export default ContactPage;
