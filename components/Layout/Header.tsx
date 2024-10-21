import NavLinks from './NavMenu'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full px-8 font-Inria bg-yellow-500 h-[17vh]">
      <nav id='nav' className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={'/icons/logo2.png'} width={120} height={80} alt='logo' />
        </Link>
        <NavLinks />
        <div className="pb-2 gap-1 pt-5 flex flex-col self-start justify-between">
        <span className='text-center text-m pb-1'>
            Call us!
          </span>
          <Link href={'tel:+260778483992'} className="text-m font-semibold text-blue-900">+260 778 483 992</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
