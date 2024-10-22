import Image from "next/image";
import Link from "next/link";
import { ProductCardType } from "@/types";

const ProductCard = ({ productName, img, brand, price }: ProductCardType) => {
  return (
    <div className="border bg-yellow-100 border-yellow-300 shadow rounded-xl w-[300px] p-0 flex flex-col gap-3">
      <Image className="rounded-t-xl" src={img} width={300} height={180} alt="product" />
      <div className="flex flex-col gap-1 p-3 w-full">
        <h4 className="font-bold text-xl">{productName}</h4>
        <small className="text-blue-900 italic">Brand: {brand}</small>
        <span className="font-semibold py-1">from {price}</span>
        <Link className="bg-blue-500 w-1/2 px-3 py-1 text-m text-center text-white rounded-lg" href={'#'}>View details</Link>
      </div>
    </div>
  )
}

export default ProductCard;
