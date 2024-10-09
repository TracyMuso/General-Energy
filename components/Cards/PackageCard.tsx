import Image from "next/image";

const PackageCard = () => {
  return (
    <div className="rounded-xl py-4 px-7 m-0 border border-yellow-300 shadow w-full flex flex-col gap-6">
      <div className="flex gap-2 items-center mx-auto">
        <Image className="" src='/icons/home-svgrepo-com.svg' width={40} height={40} alt="icon" />   
        <h4 className="font-Inter text-3xl font-bold">Residential Packages</h4>
      </div>
      <span className="text-xl">Power up your home with packages starting from k5000</span>
      <ul className="list-disc pl-6 space-y-6">
        <li>24/7 support</li>
        <li>Free consultation</li>
        <li className="">
        Get access to a cost savings calculator</li>
      </ul>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Learn more</button>
    </div>
  )
}

export default PackageCard;
