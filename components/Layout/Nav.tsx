'use client'
import NavLinks from './NavMenu'
import Link from 'next/link'
import Image from 'next/image'
import HamMenu from './HamMenu'

const Nav = () => {
  return (
    <header className="w-full px-8 font-Inria max-w-[1536px] bg-transparent absolute top-0 left-0 right-0 z-50">
      <nav id='nav' className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={'/icons/logo2.png'} width={120} height={80} alt='logo' />
        </Link>
        <NavLinks />
        <div className="pb-3 gap-1 pt-5 hidden lg:flex flex-col justify-between">
        <span className='text-center text-m pb-1'>
          Call us!
        </span>
          <Link href={'tel:+260778483992'} className="text-m font-semibold text-blue-900 hover:text-blue-400">
          +260 778 483 992
          </Link>
        </div>
        <HamMenu />
      </nav>
    </header>
  )
}

export default Nav;
