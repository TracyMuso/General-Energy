const MainProductCard = () => {
  return (
    <div className="flex items-start justify-between gap-12 px-5 border-b-2 border-blue-300">
      <div className="w-[400px] h-[450px] p-4">
        <img src={'/images/brown-building.jpg'} alt="img" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="font-bold text-xl">Hybrid Solar Inverter - 3kva + battery</h3>
        <span className="font-semibold text-base">$10</span>
        <span className="text-red-500">Out of stock</span>
        <span className="text-blue-600 italic">Free delivery within Kinshasa
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <div className="py-2">
          <span className="underline">Variants</span>
          <ul className="flex items-center gap-5 py-1">
            <li className="rounded-lg border border-blue-300 py-1 px-2 text-sm hover:bg-blue-200 cursor-pointer">5kva</li>
            <li className="rounded-lg border border-blue-300 py-1 px-2 text-sm hover:bg-blue-200 cursor-pointer">8kva</li>
            <li className="rounded-lg border border-blue-300 py-1 px-2 text-sm hover:bg-blue-200 cursor-pointer">10kva</li>
            <li className="rounded-lg border border-blue-300 py-1 px-2 text-sm hover:bg-blue-200 cursor-pointer">12kva</li>
          </ul>
        </div>
        </span>
        <hr />
        <ul className="list-disc list-inside space-y-3">
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
      </div>
    </div>
  )
}

export default MainProductCard;
