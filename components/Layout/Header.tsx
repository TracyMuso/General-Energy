import NavLinks from './NavMenu'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full px-8 font-Inria bg-yellow-400">
      <nav id='nav' className="w-full flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <Image src={'/icons/logo1.png'} width={120} height={80} alt='logo' />
        </Link>
        <NavLinks />
        <div className="p-1 gap-1 flex flex-col self-start justify-between">
          <span className="text-m text-brown-800">+260 778 483 992</span>
          <Link href={'#contact'} className="bg-white rounded-xl px-4 py-2 text-brown-800 font-bold font-Roboto">
            Get in Touch!
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
