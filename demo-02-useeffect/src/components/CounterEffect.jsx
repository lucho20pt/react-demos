import React, { useState, useEffect } from 'react'

const CounterEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <section>
        <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>increment</button>
    </section>
  )
}

export default CounterEffect
