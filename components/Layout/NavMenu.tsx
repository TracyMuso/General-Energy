import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLinksData } from '@/constants/data/LandingPage'

const Nav = () => {
  const currentPath = usePathname()

  return (
    <div className="hidden lg:flex justify-between py-5 px-3">
      {NavLinksData.map((item, idx) => (
        <Link
          className={currentPath === item.url ? "px-3 py-2 hover:bg-yellow-300 bg-yellow-400 rounded-xl text-blue-700" : "text-blue-900 px-3 py-2 hover:text-blue-500 hover:underline"}
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
