import PropTypes from 'prop-types'
import { useState } from 'react'

const BrandFilter = ({ brands, products, setFilteredBrands }) => {
  const [activeBrand, setActiveBrand] = useState('all')

  // Filter products by brand
  const handleBrandsFilter = (event) => {
    event.preventDefault()
    const brand = event.target.innerText.toLowerCase()
    setActiveBrand(brand)

    // Show all products
    if (brand === 'all') return setFilteredBrands(products)

    // Show products === brand
    setFilteredBrands(
      products.filter((product) => product.company.toLowerCase() === brand)
    )
  }

  return (
    <div
      className="flex flex-row items-center gap-2 sm:gap-5
    *:hover:opacity-80 *:cursor-pointer"
    >
      {brands.length > 0 && (
        <button
          onClick={handleBrandsFilter}
          className={`${
            activeBrand === 'all' ? 'border-pink-500' : ''
          } px-2 py-1 border text-xs`}
        >
          All
        </button>
      )}
      {brands.length > 0 &&
        brands.map((brand, index) => (
          <button
            onClick={handleBrandsFilter}
            key={index}
            className={`${
              activeBrand === brand ? 'border-pink-500' : ''
            } px-2 py-1 border text-xs`}
          >
            {brand}
          </button>
        ))}
    </div>
  )
}

const brandFilterPropTypes = {
  brands: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  setFilteredBrands: PropTypes.func.isRequired,
}

BrandFilter.propTypes = brandFilterPropTypes

export default BrandFilter
