import Link from 'next/link'
import { NavLinksData } from '@/constants/data/LandingPage'

const NavLinks = () => {
  return (
    <div className="hidden md:flex justify-between w-1/4">
      {NavLinksData.map((item) => (
        <Link
          className=" text-brown-800 hover:text-white"
          href={item.url}
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default NavLinks
