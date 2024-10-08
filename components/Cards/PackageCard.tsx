import Image from "next/image";
const PackageCard = () => {
  return (
    <div>
      <Image src={'Images/smn.png'} width={300} height={250} alt="img" />
      <div>
        <span>Icon</span>
        <h4>Residential Packages</h4>
      </div>
      <span>Get your home powered up with packages starting from k5000</span>
      <p>Get your loadshedding alternative
      Get access to a cost savings calculator</p>
      <button>Learn more</button>
    </div>
  )
}

export default PackageCard;
