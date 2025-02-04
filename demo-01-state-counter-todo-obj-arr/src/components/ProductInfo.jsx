export const ProductInfo = () => {
  const product = {
    name: 'Laptop',
    price: 10.99,
    availability: 'In Stock',
  }
  return (
    <section>
      <ul>
        <li>name: {product.name}</li>
        <li>price: {product.price}</li>
        <li>availability: {product.availability}</li>
      </ul>
    </section>
  )
}

export default ProductInfo
