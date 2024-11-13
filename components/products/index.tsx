import Link from "next/link";
import ProductCard from "../Cards/ProductCard";
import { ProductCardDets } from "@/constants/data/LandingPage";

const Products = () => {
  return (
    <section className="py-20 flex flex-col items-center w-full sm:px-10">
      <h3 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold pb-4">Nos produits</h3>
      <span className="pb-4 md:text-xl sm:text-m text-sm text-center sm:px-2 px-6">Visitez notre magasin pour obtenir des produits géniaux. Nous vendons des rallonges, des panneaux solaires, des modules wifi et bien plus encore.</span>
      <div className="flex flex-col items-center md:gap-12 gap-8 w-full sm:px-10 sm:py-12 py-6 px-5">
        <div className="flex sm:flex-row flex-col items-center justify-between 2xl:w-4/5 md:gap-9 sm:gap-3 gap-6">
          {ProductCardDets.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
        <Link className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 font-semi-bold rounded-xl text-center w-1/3" href={'/products'}>Voir plus</Link>
      </div>
    </section>
  )
}

export default Products;