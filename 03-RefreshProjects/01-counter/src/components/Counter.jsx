import { useState } from 'react'

const Counter = () => {
  const title = '<Counter />'
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <header className="p-10 text-center">
        <h2 className="text-indigo-500 text-5xl font-bold">
          {title.toString()}
        </h2>
      </header>
      <main>
        <p className="text-9xl text-white">{counter}</p>
      </main>
      <footer className="flex items-center justify-center text-center gap-20">
        <button
          onClick={handleDecrement}
          className="bg-indigo-500 border-4 text-red-400 w-25 h-25 rounded-full text-5xl cursor-pointer"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className="bg-indigo-500 border-4 text-green-400 w-25 h-25 rounded-full text-5xl cursor-pointer"
        >
          +
        </button>
      </footer>
    </div>
  )
}

export default Counter
