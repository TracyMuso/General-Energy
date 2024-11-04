import type { MainProductCardType } from "@/types";

export const ProductsData: MainProductCardType[] = [
  {
    productName: 'Hybrid Solar Inverter',
    price: '$10',
    img: '/images/solar-inverter.jpg',
    stock: 'Out of Stock',
    variants: [
      '3kva', '5kva', '10kva', '12kva'
    ],
    points: [
      'When mains power is on this inverter will automatically kick in and start charging your batteries.',
      'During loadshedding, this inverter will automatically run off battery power, and your appliances will continue to have power.',
      'Includes battery cables to connect battery and inverter.'
    ],
  },
  {
    productName: 'Extension Cords',
    price: '$15',
    img: '/images/extension-cord.png',
    stock: 'In Stock',
    variants: [
      '5m', '10m', '15m', '20m'
    ],
    points: [
      'Heavy-duty extension cords for indoor and outdoor use.',
      'Available in multiple lengths to suit different power needs.',
      'Built with durable materials to withstand wear and tear.',
      'Ideal for powering electrical devices during power outages or in remote locations.'
    ],
  },
  {
    productName: 'Solar Panels',
    img: '/images/solar-panel2.jpg',
    stock: 'In Stock',
    price: '$200',
    variants: [
      '100W', '200W', '300W', '400W'
    ],
    points: [
      'High-efficiency solar panels with a long lifespan.',
      'Converts sunlight into electricity to power your home or business.',
      'Durable and weather-resistant, suitable for outdoor installation.',
      'Reduces electricity costs and contributes to renewable energy efforts.'
    ],
  },
  {
    productName: 'WiFi Modules',
    img: '/images/wifi-module.jpeg',
    stock: 'Out of Stock',
    price: '$50',
    variants: [
      'Standard', 'Pro'
    ],
    points: [
      'Enables remote monitoring and control of your solar system.',
      'Connects your inverter or solar system to a WiFi network.',
      'Compatible with most modern inverters for seamless integration.',
      'Access real-time system performance data via a mobile app or web platform.'
    ],
  },
];
