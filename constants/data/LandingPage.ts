import type { PackagesType, NavLinkType } from '@/types'

const Str = 'string'

export const NavLinksData: NavLinkType[] = [
  {
    name: 'Home',
    url: '/',
    id: '1',
  },
  {
    name: 'Services',
    url: '/services',
    id: '3',
  },
  {
    name: 'About',
    url: '/about',
    id: '4',
  },
  {
    name: 'Contact',
    url: '/contact',
    id: '5',
  },
]

export const PackagesData: PackagesType[] = [
  {
    link: '/residential',
    title: 'Residential Packages',
    icon: '/icons/home-svgrepo-com.svg',
    text: 'Power up your home with packages starting from k5000',
    point1: '24/7 support',
    point2: 'Free consultation',
    point3: 'Save up tp 40% on power costs'
  },
  {
    link: '/commercial',
    title: 'Commercial Packages',
    icon: '/icons/business-building-svgrepo-com.svg',
    text: 'Keep your business up and running with back up power',
    point1: 'Save up to 70% on taxes',
    point2: 'Buy or lease options',
    point3: 'Free consultaion'
  },
]

export default Str
