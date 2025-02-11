import Testamonials from './components/Testamonials'

const App = () => {
  const title = '<Testimonials/>'

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="p-10 text-5xl text-indigo-500 font-bold text-center">
        {title}
      </h1>

      <Testamonials />
    </div>
  )
}

export default App
