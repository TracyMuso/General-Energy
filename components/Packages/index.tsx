import { PackagesData } from "@/constants/data/LandingPage";
import PackageCard from "../Cards/PackageCard";

const Packages = () => {
  return (
    <section className="h-[100vh] px-24 py-12 ">
      <h1 className="text-5xl font-extrabold text-center font-Inter pb-6">Packages</h1>
      <div className="py-5">
        <div className="flex items-center justify-between gap-10">
          {PackagesData.map((item, idx) => (
            <PackageCard {...item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages;
