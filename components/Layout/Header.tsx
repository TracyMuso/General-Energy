import NavLinks from './NavMenu'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full px-8 font-Inria bg-yellow-400">
      <nav className="w-full flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-white">G.E</span>
        </Link>
        <NavLinks />
        <div className="p-1 gap-1 flex flex-col self-start justify-between">
          <span className="text-m text-brown-900">+260 778 483 992</span>
          <button className="bg-white rounded-xl px-4 py-2 text-brown-900 font-bold font-Roboto">
            Get in Touch!
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
