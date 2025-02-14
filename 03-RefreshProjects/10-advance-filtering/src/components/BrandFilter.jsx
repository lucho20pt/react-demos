const BrandFilter = () => {
  return (
    <div
      className="flex flex-row items-center gap-2 sm:gap-5
    *:hover:opacity-80 *:cursor-pointer"
    >
      <button className="px-2 py-1 border text-xs">All</button>
      <button className="px-2 py-1 border text-xs">Nike</button>
      <button className="px-2 py-1 border text-xs">Adidas</button>
      <button className="px-2 py-1 border text-xs">Puma</button>
      <button className="px-2 py-1 border text-xs">Vans</button>
    </div>
  )
}

export default BrandFilter
