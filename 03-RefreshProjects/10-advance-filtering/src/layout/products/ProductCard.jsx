import PropTypes from 'prop-types'

const ProductCard = ({ id, img, title, reviews, prevPrice, newPrice }) => {
  return (
    <div
      id={id}
      className="m-4 flex flex-col gap-4 rounded-2xl bg-indigo-600 
    hover:opacity-100 opacity-90 cursor-pointer"
    >
      <img className="rounded-t-2xl h-35" src={img} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="">
          <span>⭐⭐⭐⭐</span>({reviews} reviews)
        </p>
        <p className="text-2xl">
          <span className="line-through">€{prevPrice}</span>{' '}
          <span className="font-bold">€{newPrice}</span>
        </p>
      </div>
    </div>
  )
}

const productPropTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  prevPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

ProductCard.propTypes = productPropTypes

export default ProductCard
