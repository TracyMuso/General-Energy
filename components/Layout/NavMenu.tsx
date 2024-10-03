import Link from 'next/link'
import { NavLinks } from '@/constants/data/LandingPage'

const Nav = () => {
  return (
    <div className="hidden lg:flex justify-between w-2/3">
      {NavLinks.map((item, idx) => (
        <Link href={item.url} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Nav
