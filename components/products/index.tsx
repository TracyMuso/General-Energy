import Image from "next/image";
import Link from "next/link";
import ProductCard from "../Cards/ProductCard";
import { ProductCardDets } from "@/constants/data/LandingPage";

const Products = () => {
  return (
    <section className="py-20 flex flex-col items-center w-full">
      <h3 className="text-4xl font-bold pb-4">Our Products</h3>
      <span className="pb-4 ">Visit our store to get awesome products. We sell extension cords, solar panels, wifi-modules and so much more</span>
      <div className="flex items-center justify-between gap-8 py-12">
        <div className="flex items-center w-11/12 justify-between gap-4">
          {ProductCardDets.map((item, idx) => (
        <ProductCard key={idx} {...item} />
          ))}
        </div>
        <Link href={'#'}><Image src={'/icons/arrow-right-svgrepo-com.png'} height={400} width={200} alt="arrow right icon" /> </Link>
      </div>
    </section>
  )
}

export default Products;