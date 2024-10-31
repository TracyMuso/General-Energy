import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "@/constants/data/LandingPage";

const Footer = () => {
  return (
    <div className="bg-blue-800 w-full text-white">
      <footer className="w-full flex lg:flex-row flex-col xl:px-24 sm:gap-3 md:px-12 py-12 lg:justify-between items-center lg:items-start">
        <div className="w-[350px] hidden lg:flex flex-col items-center gap-6 px-6">
          <Image src={'/icons/logo1.png'} width={150} height={100} alt="logo" />
          <div className="flex flex-col items-center">
            <div className="flex items-start gap-3 p-3">
              <Link href={'#'}>
                <Image src={'/icons/facebook-176-svgrepo-com.svg'} width={27} height={20} alt="facebook icon" />
              </Link>
              <Link href={'#'}>
                <Image src={'/icons/instagram-svgrepo-com.svg'} width={35} height={35} alt="instagram icon" />
              </Link>
              <Link href={'#'}>
                <Image src={'/icons/mail-svgrepo-com.svg'} width={33} height={33} alt="mail icon" />
              </Link>
              <Link href={'#'} className="pl-1">
                <Image src={'/icons/linkedin-linked-in-svgrepo-com.svg'} width={33} height={33} alt="mail icon" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-white py-4">
              <strong className="text-white text-xl pb-2 xl:text-[17px] md:text-base">Our office</strong>
              <span className="text-white text-center xl:text-base text-sm w-4/5">14, rout Kipushi, Lubumbashi RD Congo</span>
              <span className="text-white xl:text-base text-sm">+243 808 348 094</span>
              <span className="text-white xl:text-base text-sm">8am -9am </span>
            </div>
          </div>
        </div>
          <div className="text-white flex max-[640px]:flex-col flex-wrap flex-row items-start max-[640px]:items-center xl:gap-28 gap-20 xl:text-center pt-10 md:flex-row justify-between md:justify-around max-[1023px]:w-4/5">
              {FooterLinks.map((group, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center sm:items-start sm:justify-start gap-2"
                >
                  <p className="text-white xl:text-2xl md:text-xl font-bold mb-2">
                    {group.title}
                  </p>
                  {group.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="text-white font-normal xl:text-base md:text-m leading-normal hover:underline font-Inria"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
        <hr className="border-s-blue-200" />
        <span>Made by </span>
        <div className="flex lg:hidden items-start gap-3 p-3">
              <Link href={'#'}>
                <Image src={'/icons/facebook-176-svgrepo-com.svg'} width={27} height={20} alt="facebook icon" />
              </Link>
              <Link href={'#'}>
                <Image src={'/icons/instagram-svgrepo-com.svg'} width={35} height={35} alt="instagram icon" />
              </Link>
              <Link href={'#'}>
                <Image src={'/icons/mail-svgrepo-com.svg'} width={33} height={33} alt="mail icon" />
              </Link>
              <Link href={'#'} className="pl-1">
                <Image src={'/icons/linkedin-linked-in-svgrepo-com.svg'} width={33} height={33} alt="mail icon" />
              </Link>
            </div>
      </footer>
    </div>
  )
}

export default Footer;
