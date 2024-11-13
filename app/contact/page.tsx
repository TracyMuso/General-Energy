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
      <section className="w-full bg-gradient-to-t from-amber-200 to-yellow-400 md:h-[83vh] flex flex-col justify-center items-center gap-4 sm:py-12 py-16">
        <h1 className='font-bold lg:text-4xl sm:text-3xl text-2xl pb-4'>Nous sommes là pour vous</h1>
        <p className='lg:text-xl sn:text-base sm:leading-7 md:leading-11 text-m w-4/5 text-center pb-6'>General Energy sert parfaitement ses clients depuis 2019. Veuillez utiliser les plateformes disponibles pour nous contacter. Ou venez nous rendre visite au bureau. <br /> Veuillez consulter les questions fréquemment posées ci-dessous, </p>
        <Link className='bg-white hover:bg-blue-200 md:text-[17px] text-sm px-6 py-3 text-center rounded-xl font-bold' href={'#contact'}> Contact</Link>
        <Link className='bg-yellow-500 md:text-[17px] text-sm px-6 py-3 text-center rounded-xl font-bold' href={'#faq'}> Aller à la QFM</Link>
      </section>
      <section id='contact' className='w-full sm:px-16 px-10 flex flex-col gap-7 items-center py-16'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Entrer en contact</h1>
        <Contact />
      </section>
      <section id='faq' className='md:px-20 px-10 pt-6 pb-16'>
        <FAQs />
      </section>
    </div>
  )
}

export default ContactPage;
