import type { PackagesType, NavLinkType, ServiceCardType, ProductCardType } from '@/types'
const Str = 'string'

export const NavLinksData: NavLinkType[] = [
  {
    name: 'Accueil',
    url: '/',
  },
  {
    name: 'À propos',
    url: '/about',
  },
  {
    name: 'Services',
    url: '/services',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'Produits',
    url: '/products'
  }
];

export const ServiceCardData: ServiceCardType[] = [
  {
    title: 'Systèmes solaires',
    text: 'Alimentez votre maison ou entreprise avec l`énergie solaire',
  },
  {
    title: 'Bouches d`incendie',
    text: 'Prenez des mesures de sécurité en cas d`incendie',
  },
  {
    title: 'Éclairage',
    text: 'Éclairage décoratif et public de toutes sortes',
  },
  {
    title: 'Stations de recharge',
    text: 'Rechargez vos véhicules électriques en toute sécurité et efficacité',
  },
  {
    title: 'Domotique',
    text: 'Transformez votre maison en maison intelligente avec les meilleures technologies',
  },
  {
    title: 'Feux de circulation',
    text: 'Assurez la sécurité du public',
  },
  {
    title: 'Construction',
    text: 'Nous disposons des meilleurs ingénieurs civils pour vos besoins',
  },
  {
    title: 'Câbles d`extension',
    text: 'Nous concevons et fabriquons des câbles d`extension',
  },
  {
    title: 'Volet roulant',
    text: 'Nous motorisons tous types de volets roulants manuels',
  },
];

export const PackagesData: PackagesType[] = [
  {
    link: '/residential',
    title: 'Forfaits résidentiels',
    icon: '/icons/home-svgrepo-com.svg',
    text: 'Alimentez votre maison avec des forfaits à partir de k5000',
    point1: 'Support 24/7',
    point2: 'Consultation gratuite',
    point3: 'Économisez jusqu`à 40 % sur les coûts énergétiques'
  },
  {
    link: '/commercial',
    title: 'Forfaits commerciaux',
    icon: '/icons/business-building-svgrepo-com.svg',
    text: 'Assurez la continuité de votre entreprise avec une alimentation de secours',
    point1: 'Économisez jusqu`à 70 % en taxes',
    point2: 'Options d`achat ou de location',
    point3: 'Consultation gratuite'
  },
];

interface FooterLink {
  title: string;
  links: NavLinkType[];
}

export const FooterLinks: FooterLink[] = [
  {
    title: "Entreprise",
    links: [
      {
        name: "À propos de nous",
        url: "/about",
      },
      {
        name: "Services",
        url: "/services",
      },
      {
        name: "Produits",
        url: "/products",
      },
      {
        name: "Carrières",
        url: "#",
      },
    ],
  },
  {
    title: "Légal",
    links: [
      {
        name: "Politique de confidentialité",
        url: "#",
      },
      {
        name: "Politique de livraison",
        url: "#",
      },
      {
        name: "Conditions d'utilisation",
        url: "#",
      },
      {
        name: "Avertissement légal",
        url: "#",
      },
    ],
  },
  {
    title: "Ressources",
    links: [
      {
        name: "Articles",
        url: "#",
      },
      {
        name: "Contact",
        url: "/contact",
      },
      {
        name: "Plan du site",
        url: "#",
      },
      {
        name: "Blog",
        url: "#",
      },
    ],
  },
];

export const ProductCardDets: ProductCardType[] = [
  {
    productName: 'Câbles d`extension',
    brand: 'Énergie Générale',
    price: '$10',
    img: '/images/extension-cord.png'
  },
  {
    productName: 'Panneaux solaires',
    brand: 'Soly',
    price: '$15',
    img: '/images/solar-panel2.jpg'
  },
  {
    productName: 'Modules Wi-Fi',
    brand: 'Énergie Générale',
    price: '$20',
    img: '/images/wifi-module.jpeg'
  },
];

export default Str
