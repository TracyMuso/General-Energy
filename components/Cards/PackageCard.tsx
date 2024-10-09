import type { PackagesType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PackageCard = ({ link, title, icon, text, point1, point2, point3 }: PackagesType) => {

  return (
    <Link href={link}>
      <div className="rounded-xl py-4 px-7 m-0 border border-yellow-300 shadow flex flex-col gap-6">
        <div className="flex gap-2 items-center mx-auto">
          <Image className="" src={icon} width={40} height={40} alt="icon" />
          <h4 className="font-Inter text-3xl font-bold">{title}</h4>
        </div>
        <span className="text-xl">{text}</span>
        <ul className="list-disc pl-6 space-y-6 pb-6">
          <li>{point1}</li>
          <li>{point2}</li>
          <li className="">
          {point3}</li>
        </ul>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Learn more</button>
      </div>
    </Link>

  )
}

export default PackageCard;
