import PackageCard from "../Cards/PackageCard";

const Packages = () => {
  return (
    <section className="h-[100vh] px-16">
      <div>
        <div className="w-[540px]">
          <PackageCard />
        </div>
        <div>right card</div>
      </div>
    </section>
  )
}

export default Packages;
