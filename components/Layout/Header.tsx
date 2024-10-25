import NavLinks from './NavMenu'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HamburgerMenuIcon, CloseMenuIcon } from '../Icons'
import MobileNav from './MobileNav'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="w-full px-8 font-Inria max-w-[1536px] xl:bg-none">
      <nav id='nav' className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={'/icons/logo2.png'} width={120} height={80} alt='logo' />
        </Link>
        <NavLinks />
        <div className="pb-3 gap-1 pt-5 hidden lg:flex flex-col justify-between">
        <span className='text-center text-m pb-1'>
            Call us!
          </span>
          <Link href={'tel:+260778483992'} className="text-m font-semibold text-blue-900 hover:text-blue-400">+260 778 483 992</Link>
        </div>
        <span className={isMenuOpen? "hidden" : "cursor-pointer"} onClick={() => {setIsMenuOpen(true)}}>
          <HamburgerMenuIcon />
        </span>
        <span className={isMenuOpen ? "cursor-pointer z-50 fixed top-7 sm:left-[93%] left-[70%]" : "hidden"} onClick={() => {setIsMenuOpen(false)}}>
          <CloseMenuIcon />
        </span>
        {isMenuOpen && <MobileNav />}
      </nav>
    </header>
  )
}

export default Header;
