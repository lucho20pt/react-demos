import PropTypes from 'prop-types'

const ProductCard = ({ id, img, title, reviews, prevPrice, newPrice }) => {
  return (
    <div id={id} className="flex flex-col gap-2 px-2">
      <img className="w-auto h-[160px] rounded-2xl" src={img} alt={title} />
      <div className="p-2">
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
