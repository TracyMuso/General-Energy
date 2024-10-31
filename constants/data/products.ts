import type { MainProductCardType } from "@/types";

export const ProductsData: MainProductCardType[] = [
  {
    productName: 'Hybrid Solar Inverter',
    price: '$10',
    img: '/images/extension-cord.png',
    stock: 'Out of Stock',
    variants: [
      '3kva', '5kva', '10kva', '12kva'
    ],
    points: [
      'When mains power is on this inverter will automatically kick in and start charging your batteries.',
     'During loadshedding this inverter will automatically runs off battery power and your appliances will continue to have power.',
     'Includes battery cables to connect battery and inverter.'
    ],
  },
  {
    productName: 'Ext Cords',
    price: '$10',
    img: '/images/extension-cord.png',
    stock: 'In Stock',
    variants: [
      '3kva', '5kva', '10kva', '12kva'
    ],
    points: [
      'When mains power is on this inverter will automatically kick in and start charging your batteries.',
     'During loadshedding this inverter will automatically runs off battery power and your appliances will continue to have power.',
     'Includes battery cables to connect battery and inverter.'
    ],
  },
  {
    productName: 'Solar panels',
    img: '/images/solar-panel2.jpg',
    stock: 'In Stock',
    price: '$10',
    variants: [
      '3kva', '5kva', '10kva', '12kva'
    ],
    points: [
      'When mains power is on this inverter will automatically kick in and start charging your batteries.',
     'During loadshedding this inverter will automatically runs off battery power and your appliances will continue to have power.',
     'Includes battery cables to connect battery and inverter.'
    ],
  },
  {
    productName: 'Wifi Modules',
    img: '/images/wifi-module.jpeg',
    stock: 'Out of Stock',
    price: '$10',
    variants: [
      '3kva', '5kva', '10kva', '12kva'
    ],
    points: [
      'When mains power is on this inverter will automatically kick in and start charging your batteries.',
     'During loadshedding this inverter will automatically runs off battery power and your appliances will continue to have power.',
     'Includes battery cables to connect battery and inverter.'
    ],
  },
]