import Link from "next/link"
import { NavLinksData } from "@/constants/data/LandingPage"

const MobileNav = () => {
  return (
    <div id="mobile-nav" className="fixed bg-gradient-to-r from-teal-400 to-yellow-200 sm:top-0 sm:bottom-0 w-screen sm:right-0 z-10 flex justify-center sm:w-[300px]">
      <ul className="flex flex-col gap-5 items-center pt-20 px-6">
        {NavLinksData.map((item, idx) => (
           <Link key={idx} className=" py-2 px-5 text-blue-900 hover:text-white" href={item.url}>{item.name}</Link>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav;
