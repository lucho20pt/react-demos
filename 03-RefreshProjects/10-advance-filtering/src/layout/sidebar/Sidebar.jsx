const Sidebar = () => {
  return (
    <section
      className="flex flex-col gap-2 w-[150px] p-3
    text-left text-gray-200"
    >
      <h3 className="text-lg font-bold text-indigo-200">Category</h3>
      <form>
        <ul className="flex flex-col mb-5 text-xs gap-1">
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="all-category">
              <input
                className="accent-pink-500"
                type="radio"
                name="category"
                id="all-category"
              />
              <span>All</span>
            </label>
          </li>
          <li>
            <label
              className="flex gap-2 cursor-pointer"
              htmlFor="sneakers-category"
            >
              <input
                className="accent-pink-500"
                type="radio"
                name="category"
                id="sneakers-category"
              />
              <span>Sneakers</span>
            </label>
          </li>
          <li>
            <label
              className="flex gap-2 cursor-pointer"
              htmlFor="flats-category"
            >
              <input
                className="accent-pink-500"
                type="radio"
                name="category"
                id="flats-category"
              />
              <span>Flats</span>
            </label>
          </li>
          <li>
            <label
              className="flex gap-2 cursor-pointer"
              htmlFor="sandals-category"
            >
              <input
                className="accent-pink-500"
                type="radio"
                name="category"
                id="sandals-category"
              />
              <span>Sandals</span>
            </label>
          </li>
          <li>
            <label
              className="flex gap-2 cursor-pointer"
              htmlFor="heels-category"
            >
              <input
                className="accent-pink-500"
                type="radio"
                name="category"
                id="heels-category"
              />
              <span>Heels</span>
            </label>
          </li>
        </ul>
      </form>

      <h3 className="text-xl font-bold text-indigo-200">Price</h3>
      <form>
        <ul className="flex flex-col mb-5 text-xs gap-1">
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="all-price">
              <input
                className="accent-pink-500"
                type="radio"
                name="price"
                id="all-price"
              />
              <span>All</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="price-0-50">
              <input
                className="accent-pink-500"
                type="radio"
                name="price"
                id="price-0-50"
              />
              <span>0-50</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="price-50-100">
              <input
                className="accent-pink-500"
                type="radio"
                name="price"
                id="price-50-100"
              />
              <span>50 - 100</span>
            </label>
          </li>
          <li>
            <label
              className="flex gap-2 cursor-pointer"
              htmlFor="price-100-150"
            >
              <input
                className="accent-pink-500"
                type="radio"
                name="price"
                id="price-100-150"
              />
              <span>100 - 150</span>
            </label>
          </li>
          <li>
            <label
              className="flex gap-2 cursor-pointer"
              htmlFor="price-over-150"
            >
              <input
                className="accent-pink-500"
                type="radio"
                name="price"
                id="price-over-150"
              />
              <span>Over 150</span>
            </label>
          </li>
        </ul>
      </form>

      <h3 className="text-xl font-bold text-indigo-200">Colors</h3>
      <form>
        <ul className="flex flex-col mb-5 text-xs gap-1">
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="all-color">
              <input
                className="accent-pink-500"
                type="radio"
                name="color"
                id="all-color"
              />
              <span>All</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="black-color">
              <input
                className="accent-black"
                type="radio"
                name="color"
                id="black-color"
              />
              <span>Black</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="blue-color">
              <input
                className="accent-blue-500"
                type="radio"
                name="color"
                id="blue-color"
              />
              <span>Blue</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="red-color">
              <input
                className="accent-red-500"
                type="radio"
                name="color"
                id="red-color"
              />
              <span>Red</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="green-color">
              <input
                className="accent-green-500"
                type="radio"
                name="color"
                id="green-color"
              />
              <span>Green</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="white-color">
              <input
                className="accent-white"
                type="radio"
                name="color"
                id="white-color"
              />
              <span>White</span>
            </label>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default Sidebar
