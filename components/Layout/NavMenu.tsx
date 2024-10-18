import Link from 'next/link'
import { NavLinksData } from '@/constants/data/LandingPage'

const Nav = () => {
  return (
    <div className="hidden md:flex justify-between w-1/4">
      {NavLinksData.map((item, idx) => (
        <Link
          className=" text-brown-800 hover:text-white"
          href={item.url}
          key={idx}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Nav;
