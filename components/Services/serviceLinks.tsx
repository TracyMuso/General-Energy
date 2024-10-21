import { ServiceNav } from "@/constants/data/services";
import Link from "next/link";

const ServiceLinks = () => {
  return (
    <div className="fixed top-[6rem] px-7 py-5 rounded-xl right-[3rem] bg-yellow-100">
      <span className="font-bold text-center">Jump ahead</span>
      <ul className="py-4">
        {ServiceNav.map((item, idx) => (
         <li className="py-2 italic px-1 border-l border-brown-800 hover:text-brown-500 hover:underline" key={idx}>
           <Link key={idx} href={item.url} className="">{item.name}</Link>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceLinks;
