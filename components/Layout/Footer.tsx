import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "@/constants/data/LandingPage";

const Footer = () => {
  return (
    <div className="bg-brown-200 w-full">
      <footer className="w-full flex px-24 py-12 justify-between items-start">
        <div className="w-[350px] flex flex-col items-center gap-6 px-6">
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
            <div className="flex flex-col items-center py-4">
              <strong className="text-brown-900 text-xl pb-2">Our office</strong>
              <span className="text-center">14, rout Kipushi, Lubumbashi RD Congo</span>
              <span>+243 808 348 094</span>
              <span>8am -9am </span>
            </div>
          </div>
        </div>
        <div className="px-4">
        <div className="flex max-[640px]:flex-col flex-wrap flex-row items-start max-[640px]:items-center xl:gap-28 gap-20 xl:text-center pt-10 sm:w-4/5 md:w-full md:flex-row md:justify-around">
            {FooterLinks.map((group, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-start gap-2"
              >
                <p className="text-2xl font-bold mb-2">
                  {group.title}
                </p>
                {group.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="font-normal text-base text-brown-600 leading-normal font-Inria"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
