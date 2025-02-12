const Sidebar = () => {
  return (
    <section className="flex flex-col gap-2 w-[150px] p-5
    text-left text-gray-200 border-r-2 border-indigo-500">
      <h3 className="text-lg font-bold text-indigo-200">Category</h3>
      <ul className="flex flex-col mb-5 text-sm gap-1">
        <li>All</li>
        <li>Sneakers</li>
        <li>Flats</li>
        <li>Sandals</li>
        <li>Heels</li>
      </ul>

      <h3 className="text-xl font-bold text-indigo-200">Price</h3>
      <ul className="flex flex-col mb-5 text-sm gap-1">
        <li>All</li>
        <li>0-50€</li>
        <li>50€ - 100€</li>
        <li>100€ - 150€</li>
        <li>Over 150€</li>
      </ul>

      <h3 className="text-xl font-bold text-indigo-200">Colors</h3>
      <ul className="flex flex-col mb-5 text-sm gap-1">
        <li>All</li>
        <li>Black</li>
        <li>Blue</li>
        <li>Red</li>
        <li>Green</li>
        <li>white</li>
      </ul>
    </section>
  )
}

export default Sidebar
