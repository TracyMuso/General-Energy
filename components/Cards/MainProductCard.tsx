import Image from "next/image";

const MainProductCard = () => {
  return (
    <div>
      <div>
        <Image src={'/this.png'} alt="img" width={400} height={550} />
      </div>
      <div>
        <h3>Solar Inverter</h3>
        <span>$12</span>
        <span>Out of stock</span>
        <span>Free delivery within Kinshasa</span>
        <ul>
          <li>3kva</li>
          <li>Hybrid Inverter</li>
          <li>Lithium battery</li>
        </ul>
        <hr />
        <ul>
          <li>
            When mains power is on this inverter will automatically kick in and start charging your batteries.
          </li>
          <li>
            During loadshedding this inverter will automatically switch over to run off battery power and your appliances will continue to have power.
          </li>
          <li>
            Includes battery cables to connect battery and inverter.
          </li>
        </ul>
        <span>In store only</span>
      </div>
    </div>
  )
}

export default MainProductCard;
