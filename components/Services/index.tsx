import ServiceCard from "../Cards/ServiceCard";
import { ServiceCardData } from "@/constants/data/LandingPage";

const Services = () => {
  return (
    <section className="py-16">
      <div className="w-3/4 mx-auto gap-10 flex flex-col items-center">
        <h2 className="text-5xl font-bold">Services</h2>
        <div className="flex items-center justify-between flex-wrap gap-8">
          {ServiceCardData.map((item, idx) => (
            <ServiceCard {...item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
