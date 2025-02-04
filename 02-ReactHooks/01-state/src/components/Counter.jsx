import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount((prevState) => prevState + 1)
  const handleDecrement = () => setCount((prevState) => prevState - 1)

  return (
    <section>
      <h1>Counter - {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </section>
  )
}

export default Counter
