import type { MainProductCardType } from "@/types";

export const ProductsData: MainProductCardType[] = [
  {
    productName: 'Onduleur solaire hybride',
    price: '$10',
    img: '/images/solar-inverter.jpg',
    stock: 'Rupture de stock',
    variants: [
      '3kva', '5kva', '10kva', '12kva'
    ],
    points: [
      'Lorsque l`alimentation principale est active, cet onduleur se déclenche automatiquement et commence à charger vos batteries.',
      'En cas de délestage, cet onduleur fonctionnera automatiquement sur batterie, et vos appareils continueront d`être alimentés.',
      'Comprend des câbles de batterie pour connecter la batterie et l`onduleur.'
    ],
  },
  {
    productName: 'Câbles d`extension',
    price: '$15',
    img: '/images/extension-cord.png',
    stock: 'En stock',
    variants: [
      '5m', '10m', '15m', '20m'
    ],
    points: [
      'Câbles d`extension robustes pour une utilisation intérieure et extérieure.',
      'Disponibles en plusieurs longueurs pour répondre aux différents besoins d`alimentation.',
      'Fabriqués avec des matériaux durables pour résister à l`usure.',
      'Idéaux pour alimenter les appareils électriques en cas de panne de courant ou dans des lieux éloignés.'
    ],
  },
  {
    productName: 'Câbles électriques',
    price: '$15',
    img: '/images/electric-cables.jpg',
    stock: 'En stock',
    variants: [
      '5m', '10m', '15m', '20m'
    ],
    points: [
      'Câbles électriques robustes pour la connexion électrique.',
      'Disponibles en plusieurs longueurs pour répondre aux différents besoins d`alimentation.',
      'Fabriqués avec des matériaux durables pour résister à l`usure.',
    ],
  },
  {
    productName: 'Panneaux solaires',
    img: '/images/solar-panel2.jpg',
    stock: 'En stock',
    price: '$200',
    variants: [
      '100W', '200W', '300W', '400W'
    ],
    points: [
      'Panneaux solaires à haute efficacité avec une longue durée de vie.',
      'Convertit la lumière du soleil en électricité pour alimenter votre maison ou entreprise.',
      'Durables et résistants aux intempéries, adaptés à l`installation extérieure.',
      'Réduit les coûts d`électricité et contribue aux efforts en faveur des énergies renouvelables.'
    ],
  },
  {
    productName: 'Modules WiFi',
    img: '/images/wifi-module.jpeg',
    stock: 'Rupture de stock',
    price: '$50',
    variants: [
      'Standard', 'Pro'
    ],
    points: [
      'Permet la surveillance et le contrôle à distance de votre système solaire.',
      'Connecte votre onduleur ou système solaire à un réseau WiFi.',
      'Compatible avec la plupart des onduleurs modernes pour une intégration transparente.',
      'Accédez aux données de performance du système en temps réel via une application mobile ou une plateforme web.'
    ],
  },
];
