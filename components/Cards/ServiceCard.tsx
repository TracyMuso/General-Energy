import Image from "next/image";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <div className="flex flex-col items-center border rounded-xl border-brown-400 shadow w-[300px] px-4 py-5 gap-3">
      <h5 className="text-xl font-bold">Solar installation</h5>
      <p className="text-center">Power up your home with solar energy</p>
      <Link className="rounded-md bg-yellow-400 p-4" href={'/services'}>Read more</Link>
    </div>
  )
}

export default ServiceCard;
