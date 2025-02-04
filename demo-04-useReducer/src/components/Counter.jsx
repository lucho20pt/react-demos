import { useEffect, useReducer, useState } from 'react'
import { counterReducer, initialState } from '../counterReducer'

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  const [amount, setAmount] = useState(0)

  useEffect(() => console.log(amount), [amount])

  const handleIncrement = () => dispatch({ type: 'increment' })
  const handleDecrement = () => dispatch({ type: 'decrement' })
  const handleReset = () => dispatch({ type: 'reset' })

  const handleIncrementByAmount = () => {
    dispatch({ type: 'incrementByAmount', payload: Number(amount) })
    setAmount(0)
  }

  const handleDecrementByAmount = () => {
    dispatch({ type: 'decrementByAmount', payload: Number(amount) })
    setAmount(0)
  }

  return (
    <div>
      <h1>Counting : {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <input
        onChange={(event) => setAmount(Number(event.target.value))}
        type="number"
        placeholder="place amount"
        value={amount}
      />
      <button onClick={handleIncrementByAmount}>Increment by amount</button>
      <button onClick={handleDecrementByAmount}>Decrement by amount</button>
    </div>
  )
}

export default Counter
