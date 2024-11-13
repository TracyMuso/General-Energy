import { ServiceNav } from "@/constants/data/services";
import Link from "next/link";

const ServiceLinks = () => {
  return (
    <div className="hidden md:block fixed md:top-[10rem] lg:top-[6rem] px-7 lg:py-5 py-3 rounded-xl right-[3rem] bg-yellow-100">
      <span className="font-bold text-center">Avancez</span>
      <ul className="py-4">
        {ServiceNav.map((item, idx) => (
         <li className="lg:py-2 py-1 italic px-1 border-l border-brown-800 hover:text-brown-500 hover:underline" key={idx}>
           <Link key={idx} href={item.url} className="lg:text-base text-sm">{item.name}</Link>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceLinks;
