import type { ServiceCardType } from "@/types";
import Link from "next/link";

const ServiceCard = ({ title, text }: ServiceCardType) => {
  return (
    <div className="flex flex-col items-center border rounded-xl border-brown-400 shadow w-[320px] px-4 py-5 gap-[10px]">
      <h5 className="text-xl font-bold">{title}</h5>
      <p className="text-center">{text}</p>
      <Link className="rounded-xl bg-yellow-400 text-m px-4 py-2" href={'/services'}>Read more</Link>
    </div>
  )
}

export default ServiceCard;
