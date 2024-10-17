import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 flex flex-col items-center bg-brown-100">
      <article className="text-center w-full px-24">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="leading-8 py-7">General energy specializes in utility services like installation and maintenance of photovoltaic systems, modern road traffic lights, home automation, public and decorative lighting, fire hydrants, construction and the charging station for electric vehicles. We also design and manufacture extension cords and do cable fabrication. Our products and services are of the highest quality.
          <br />
          We intends to position ourselves as market leaders in the utilities field by acquiring the best expertise, modern technologies and embrace sustainability. We work with various clients in both residential and commercial settings. The safety of our customers and the general public is our top priority.
          
        </p>
      </article>
      <div className="py-6 flex flex-col gap-6 items-center w-full">
        <h2 className="text-3xl font-bold pb-5">Our Partners</h2>
        <div >
          <div className="flex items-center justify-between gap-5">
            <Image src={'/icons/settings-svgrepo-com.svg'} width={100} height={60} alt="prtnr" />
            <Image src={'/icons/settings-svgrepo-com.svg'} width={100} height={60} alt="prtnr" />
            <Image src={'/icons/settings-svgrepo-com.svg'} width={100} height={60} alt="prtnr" />
            <Image src={'/icons/settings-svgrepo-com.svg'} width={100} height={60} alt="prtnr" />
            <Image src={'/icons/settings-svgrepo-com.svg'} width={100} height={60} alt="prtnr" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
