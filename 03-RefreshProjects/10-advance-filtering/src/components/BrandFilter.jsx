const BrandFilter = () => {
  return (
    <div
      className="flex flex-row items-center justify-between gap-2
    *:hover:opacity-80 *:cursor-pointer"
    >
      <button className="px-2 py-1 border text-sm">All</button>
      <button className="px-2 py-1 border text-sm">Nike</button>
      <button className="px-2 py-1 border text-sm">Adidas</button>
      <button className="px-2 py-1 border text-sm">Puma</button>
      <button className="px-2 py-1 border text-sm">Vans</button>
    </div>
  )
}

export default BrandFilter
