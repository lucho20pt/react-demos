import { useState, useEffect } from 'react'
import BrandFilter from './components/BrandFilter'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'
import DATA from './db/data'
import ProductsList from './layout/products/ProductsList'

const App = () => {
  const [products, setProducts] = useState([])
  const [filteredBrands, setFilteredBrands] = useState([])
  const [brands, setBrands] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setProducts(DATA)
    }
    fetchData()
  }, [])

  // Derive unique brands and set filtered brands
  useEffect(() => {
    const brandsArray = [
      ...new Set(products.map((item) => item.company.toLowerCase())),
    ]
    setBrands(brandsArray)
    setFilteredBrands(products)
  }, [products])

  // Filter products based on search query
  useEffect(() => {
    let filtered = filteredBrands

    if (searchQuery.category) {
      filtered = filtered.filter(
        (item) =>
          item.category.toLowerCase() === searchQuery.category.toLowerCase()
      )
    }

    setFilteredProducts(filtered)
  }, [searchQuery, filteredBrands])

  return (
    <div
      className="flex flex-col items-center h-screen 
      text-center bg-gray-800 text-white"
    >
      <Header />
      <div className="container flex flex-row text-left">
        <Sidebar setSearchQuery={setSearchQuery} />
        <main className="p-3 sm:p-5 md:p-10 flex flex-col text-left gap-5 border-l-2 border-indigo-500">
          <h2 className="text-lg font-bold text-indigo-200">Recommended</h2>
          <BrandFilter
            brands={brands}
            products={products}
            setFilteredBrands={setFilteredBrands}
          />
          <ProductsList products={filteredProducts} />
        </main>
      </div>
    </div>
  )
}

export default App
