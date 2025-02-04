import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)
  const handleFocusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.style.backgroundColor = 'yellow'
    }
  }
  return (
    <div>
      <input type="text" ref={inputRef} name="" id="" />
      <button onClick={handleFocusOnInput}>Focus on Input</button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default FocusInput
