import BrandFilter from './components/BrandFilter'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div
      className="flex flex-col items-center h-screen 
      text-center bg-gray-800 text-white"
    >
      <Header />
      <div className="container flex flex-row text-left">
        <Sidebar />
        <main className="flex flex-col text-left p-5 gap-4">
          <h2 className="text-lg font-bold text-indigo-200">Recomended</h2>
          <BrandFilter />
          <section>products list</section>
        </main>
      </div>
    </div>
  )
}

export default App
