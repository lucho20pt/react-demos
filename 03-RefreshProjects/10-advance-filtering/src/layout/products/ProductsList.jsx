import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductsList = ({ products }) => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 ">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  )
}
ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ProductsList
