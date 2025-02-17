import PropTypes from 'prop-types'

const Sidebar = ({ setSearchQuery }) => {
  //
  const handleCategoryChange = (event) => {
    setSearchQuery((prev) => ({ ...prev, category: event.target.value }))
  }

  const handlePriceChange = (event) => {
    setSearchQuery((prev) => ({ ...prev, price: event.target.value }))
  }

  const handleColorChange = (event) => {
    setSearchQuery((prev) => ({ ...prev, color: event.target.value }))
  }

  return (
    <section
      className="p-3 sm:p-5 md:p-10 flex flex-col gap-2 w-[150px] 
    text-left text-gray-200"
    >
      <form>
        <fieldset>
          <legend className="text-lg font-bold text-indigo-200">
            Category
          </legend>

          <ul className="flex flex-col mb-5 text-xs gap-1">
            <li>
              <label
                className="flex gap-2 cursor-pointer"
                htmlFor="all-category"
              >
                <input
                  onChange={handleCategoryChange}
                  className="accent-pink-500"
                  type="radio"
                  name="category"
                  value=""
                  id="all-category"
                  defaultChecked
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
                  onChange={handleCategoryChange}
                  className="accent-pink-500"
                  type="radio"
                  name="category"
                  value="sneakers"
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
                  onChange={handleCategoryChange}
                  className="accent-pink-500"
                  type="radio"
                  name="category"
                  value="flats"
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
                  onChange={handleCategoryChange}
                  className="accent-pink-500"
                  type="radio"
                  name="category"
                  value="sandals"
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
                  onChange={handleCategoryChange}
                  className="accent-pink-500"
                  type="radio"
                  name="category"
                  value="heels"
                  id="heels-category"
                />
                <span>Heels</span>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>

      <fieldset>
        <legend className="text-xl font-bold text-indigo-200">Price</legend>

        <ul className="flex flex-col mb-5 text-xs gap-1">
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="all-price">
              <input
                onChange={handlePriceChange}
                className="accent-pink-500"
                type="radio"
                name="price"
                value=""
                id="all-price"
                defaultChecked
              />
              <span>All</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="price-0-50">
              <input
                onChange={handlePriceChange}
                className="accent-pink-500"
                type="radio"
                name="price"
                value="0-50"
                id="price-0-50"
              />
              <span>0-50</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="price-50-100">
              <input
                onChange={handlePriceChange}
                className="accent-pink-500"
                type="radio"
                name="price"
                value="50-100"
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
                onChange={handlePriceChange}
                className="accent-pink-500"
                type="radio"
                name="price"
                value="100-150"
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
                onChange={handlePriceChange}
                className="accent-pink-500"
                type="radio"
                name="price"
                value="150-"
                id="price-over-150"
              />
              <span>Over 150</span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset>
        <legend className="text-xl font-bold text-indigo-200">Colors</legend>

        <ul className="flex flex-col mb-5 text-xs gap-1">
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="all-color">
              <input
                onChange={handleColorChange}
                className="accent-pink-500"
                type="radio"
                name="color"
                value=""
                id="all-color"
                defaultChecked
              />
              <span>All</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="black-color">
              <input
                onChange={handleColorChange}
                className="accent-black"
                type="radio"
                name="color"
                value="black"
                id="black-color"
              />
              <span>Black</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="blue-color">
              <input
                onChange={handleColorChange}
                className="accent-blue-500"
                type="radio"
                name="color"
                value="blue"
                id="blue-color"
              />
              <span>Blue</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="red-color">
              <input
                onChange={handleColorChange}
                className="accent-red-500"
                type="radio"
                name="color"
                value="red"
                id="red-color"
              />
              <span>Red</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="green-color">
              <input
                onChange={handleColorChange}
                className="accent-green-500"
                type="radio"
                name="color"
                value="green"
                id="green-color"
              />
              <span>Green</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2 cursor-pointer" htmlFor="white-color">
              <input
                onChange={handleColorChange}
                className="accent-white"
                type="radio"
                name="color"
                value="white"
                id="white-color"
              />
              <span>White</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </section>
  )
}

Sidebar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
}

export default Sidebar
