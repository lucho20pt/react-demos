import { useRef, useEffect, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  // effect
  useEffect(() => {
    handlePlay()
    return () => clearInterval(intervalRef.current)
  }, [])

  // stop
  const handleStop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
  // reset
  const handleReset = () => {
    handleStop() // stop
    setCount(0) // reset
    handlePlay() // start
  }
  // play
  const handlePlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={handleStop}>Stop Time</button>
      <button onClick={handleReset}>Reset Time</button>
      <button onClick={handlePlay}>Play Time</button>
    </div>
  )
}

export default Timer
