import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { MainProductCardType } from "@/types";

const MainProductCard = ({ productName, img, price, stock, points, variants }: MainProductCardType) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="flex md:flex-row flex-col md:items-start justify-between lg:gap-12 md:gap-4 lg:px-5 px-2 xl:pb-6 border-b-2 border-blue-300">
      <div className="lg:w-[500px] lg:h-[450px] md:w-[400px] h-[350px] md:h-[400px] p-4">
        <img className="w-full h-full rounded-xl" src={img} alt="img" />
      </div>
      <div className="flex flex-col xl:gap-3 gap-1 p-4 2xl:w-auto md:w-3/5">
        <h3 className="md:font-bold font-semi-bold text-xl xl:text-2xl">{productName}</h3>
        <span className="font-semibold text-base">{price}</span>
        <span className={`${stock === 'En stock' ? 'text-green-600' : 'text-red-500'} xl:text-[17px] text-sm`}>{stock}</span>
        <span className="text-blue-600 italic xl:text-[17px] text-sm">Livraison gratuite à Kinshasa
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <div className="py-2">
          <span className="underline">Variantes</span>
          <ul className="flex items-center gap-5 py-1">
            {variants.map((item, idx) => (
              <li key={idx} className="rounded-lg border border-blue-300 py-1 px-2 xl:text-sm text-[11px] hover:bg-blue-200 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        </span>
        <hr />
        <ul className="list-disc pl-3 space-y-3">
          {points.map((item, idx) => (
            <li key={idx} className="xl:text-base sm:text-m text-sm">
            {item}
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainProductCard;
