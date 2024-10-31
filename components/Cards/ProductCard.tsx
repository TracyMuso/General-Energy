import Image from "next/image";
import Link from "next/link";
import { ProductCardType } from "@/types";

const ProductCard = ({ productName, img, brand, price }: ProductCardType) => {
  return (
    <div className="border bg-yellow-100 border-yellow-300 shadow rounded-xl xl:w-[300px] sm:h-[500px] p-0 flex sm:flex-col gap-3">
      <span className="sm:block hidden">
      <Image className="rounded-t-xl" src={img} width={300} height={180} alt="product" />
      </span>
      <span className="block sm:hidden">
      <Image className="rounded-l-xl" src={img} width={180} height={180} alt="product" />
      </span>
      <div className="flex flex-col gap-1 p-3 sm:w-full">
        <h4 className="font-bold lg:text-xl sm:text-m ">{productName}</h4>
        <small className="text-blue-900 md:text-m text-[12px] italic">Brand: {brand}</small>
        <span className="font-semibold py-1 md:text-m text-[12px]">from {price}</span>
        <Link className="bg-blue-500 md:w-1/2 w-full px-3 py-1 lg:text-m text-sm text-center text-white rounded-lg" href={'#'}>View details</Link>
      </div>
    </div>
  )
}

export default ProductCard;
