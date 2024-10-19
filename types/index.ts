export interface NavLinkType {
  name: string
  url: string
}

export interface ServiceCardType {
  title: string;
  text: string;
}

export interface PackagesType {
  link: string;
  title: string;
  icon: string; 
  text: string; 
  point1: string; 
  point2: string; 
  point3: string; 
}

export interface ServiceCardInterface {
  id: string;
  service: string;
  maintext: string;
  icon: string;
  img: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  link: string;
}

export interface ProductCardType {
  img: string;
  productName: string;
  brand: string;
  price: string;
}

type Energy = string

export default Energy
