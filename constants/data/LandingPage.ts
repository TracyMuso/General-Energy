import type { PackagesType, NavLinkType, ServiceCardType } from '@/types'

const Str = 'string'

export const NavLinksData: NavLinkType[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Services',
    url: '/services',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]

export const ServiceCardData: ServiceCardType[] = [
  {
    title: 'Solar Systems',
    text: 'Power up your home or business with solar energy',
  },
  {
    title: 'Fire Hydrants',
    text: 'Get a safety measure in case of fires',
  },
  {
    title: 'Lighting',
    text: 'Decorative and public lighting of all kinds',
  },
  {
    title: 'Charging stations',
    text: 'Charge your electric vehicles safely and efficiently',
  },
  {
    title: 'Home Automation',
    text: 'Get your smart home today with the best tech',
  },
  {
    title: 'Traffic Lights',
    text: 'Ensure the safety of the general public',
  },
  {
    title: 'Construction',
    text: 'We have the best civil engineers for your needs',
  },
  {
    title: 'Extension cords',
    text: 'We design and manufacture extension cords',
  },
  {
    title: 'Roller Shutter',
    text: 'We motorize all types of manual roller shutters.',
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

interface FooterLink {
  title: string;
  links: NavLinkType[];
}

export const FooterLinks: FooterLink[] = [
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        url: "#",
      },
      {
        name: "Services",
        url: "#",
      },
      {
        name: "Products",
        url: "#",
      },
      {
        name: "Careers",
        url: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        url: "#",
      },
      {
        name: "Shipping Policy",
        url: "#",
      },
      {
        name: "Terms of Use",
        url: "#",
      },
      {
        name: "Legal Disclaimer",
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Articles",
        url: "#",
      },
      {
        name: "Contact",
        url: "#",
      },
      {
        name: "Sitemap",
        url: "#",
      },
      {
        name: "Blog",
        url: "#",
      },
    ],
  },
]

export default Str
