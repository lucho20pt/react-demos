import { useState, useEffect } from 'react'
import BrandFilter from './components/BrandFilter'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'
import DATA from './db/data'
import ProductsList from './layout/products/ProductsList'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setProducts(DATA)
    }
    fetchData()
  }, [])

  return (
    <div
      className="flex flex-col items-center h-screen 
      text-center bg-gray-800 text-white"
    >
      <Header />
      <div className="container flex flex-row text-left">
        <Sidebar />
        <main className="flex flex-col text-left p-4 gap-4 border-l-2 border-indigo-500">
          <h2 className="text-lg font-bold text-indigo-200">Recomended</h2>
          <BrandFilter />
          <ProductsList products={products} />
        </main>
      </div>
    </div>
  )
}

export default App
