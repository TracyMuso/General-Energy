import Nav from './NavMenu'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full px-0 h-[5rem]">
      <nav className="w-full flex justify-between">
        <Link href="/" className="flex items-center">
          <span className="">G.E</span>
        </Link>
        <Nav />
        <div>
          <button>Contact us!</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
