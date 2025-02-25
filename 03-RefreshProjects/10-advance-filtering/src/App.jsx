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
  const [searchQuery, setSearchQuery] = useState({
    category: '',
    price: '',
    color: '',
  })
  const [searchInput, setSearchInput] = useState('')

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
    if (products.length > 0) {
      const brandsArray = [
        ...new Set(products.map((item) => item.company.toLowerCase())),
      ]
      setBrands(brandsArray)
      setFilteredBrands(products)
    }
  }, [products])

  // Filter products based on search query and input
  useEffect(() => {
    let filtered = filteredBrands

    // Apply search input filter
    if (searchInput !== '') {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    }

    // Apply category filter
    if (searchQuery.category) {
      filtered = filtered.filter(
        (item) =>
          item.category.toLowerCase() === searchQuery.category.toLowerCase()
      )
    }

    // Apply price filter
    if (searchQuery.price) {
      const range = searchQuery.price.split('-')
      if (range[1] !== '') {
        filtered = filtered.filter(
          (item) =>
            Number(item.newPrice) >= Number(range[0]) &&
            Number(item.newPrice) <= Number(range[1])
        )
      } else {
        filtered = filtered.filter(
          (item) => Number(item.newPrice) >= Number(range[0])
        )
      }
    }

    // Apply color filter
    if (searchQuery.color) {
      filtered = filtered.filter(
        (item) => item.color.toLowerCase() === searchQuery.color.toLowerCase()
      )
    }

    setFilteredProducts(filtered)
  }, [searchQuery, filteredBrands, searchInput])

  return (
    <div
      className="flex flex-col items-center h-screen 
      text-center bg-gray-800 text-white"
    >
      <Header setSearchInput={setSearchInput} />
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
