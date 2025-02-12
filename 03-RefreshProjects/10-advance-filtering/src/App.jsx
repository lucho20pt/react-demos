import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div
      className="flex flex-col items-center h-screen 
      text-center bg-gray-800 text-white"
    >
      <Header />
      <div className="container flex flex-row">
        <Sidebar />
        <main className="p-5">
          <h1 className="text-3xl font-bold mb-5">Products</h1>
        </main>
      </div>
    </div>
  )
}

export default App
