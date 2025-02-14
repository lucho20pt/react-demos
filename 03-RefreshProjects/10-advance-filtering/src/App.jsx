import BrandFilter from './components/BrandFilter'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'

const App = () => {
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
          <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            products
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
