import { useEffect, useState } from 'react'

const Calculator = () => {
  const title = '<Calculator/>'
  const inputClasses = 'bg-gray-800 rounded-lg p-4 text-3xl font-bold'

  const [input, setInput] = useState('0')
  const [screen, setScreen] = useState('0')
  const regexOperators = /[+\-*/]/g
  const [lastWasOperator, setLastWasOperator] = useState(false)
  const [lastWasEqual, setLastWasEqual] = useState(false)

  useEffect(() => console.log(screen), [screen])

  const handleInput = (value) => {
    // If the last input was an equal sign, the next input should clear the screen
    if (lastWasEqual) {
      setInput(value)
      setScreen(value)
      setLastWasEqual(false)
      setLastWasOperator(false)
      return
    }

    // If the input is an operator, it should replace the last operator
    if (regexOperators.test(value)) {
      if (regexOperators.test(input.slice(-1))) {
        const newInput = input.slice(0, -1) + value
        setInput(newInput)
      } else {
        setInput(input + value)
        setScreen(screen)
      }
      setLastWasOperator(true)
      return
    }

    // If the input is a number, it should be appended to the input
    if (screen === '0' && (value === '00' || value === '0'))
      return setScreen('0')
    setInput(input === '0' ? value : input + value)
    // If the last input was an operator, the next input should replace the screen
    if (lastWasOperator) {
      setScreen(value)
      setLastWasOperator(false)
    } else setScreen(screen === '0' ? value : screen + value)
  }

  // handleOperation function
  const handleOperation = (value) => {
    if (value === '=') {
      setInput(eval(input).toString())
      setScreen(eval(input).toString())
      setLastWasEqual(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10 text-5xl text-indigo-500 font-bold">{title}</h1>

      <div className="flex flex-col items-center justify-center">
        <header
          className="screen flex flex-col items-end justify-end w-96 h-16 
        bg-gray-100 rounded-lg p-4 py-2 text-gray-700 text-3xl font-bold"
        >
          <span className="text-sm font-normal">{input}</span>
          <span>{screen}</span>
        </header>

        <main className="keyboard grid grid-cols-4 gap-2 mt-4 text-white">
          <button onClick={() => handleInput('7')} className={inputClasses}>
            7
          </button>
          <button onClick={() => handleInput('8')} className={inputClasses}>
            8
          </button>
          <button onClick={() => handleInput('9')} className={inputClasses}>
            9
          </button>
          <button onClick={() => handleInput('/')} className={inputClasses}>
            /
          </button>

          <button onClick={() => handleInput('4')} className={inputClasses}>
            4
          </button>
          <button onClick={() => handleInput('5')} className={inputClasses}>
            5
          </button>
          <button onClick={() => handleInput('6')} className={inputClasses}>
            6
          </button>
          <button onClick={() => handleInput('*')} className={inputClasses}>
            *
          </button>

          <button onClick={() => handleInput('1')} className={inputClasses}>
            1
          </button>
          <button onClick={() => handleInput('2')} className={inputClasses}>
            2
          </button>
          <button onClick={() => handleInput('3')} className={inputClasses}>
            3
          </button>
          <button onClick={() => handleInput('-')} className={inputClasses}>
            -
          </button>

          <button onClick={() => handleInput('.')} className={inputClasses}>
            ,
          </button>

          <button onClick={() => handleInput('0')} className={inputClasses}>
            0
          </button>
          <button onClick={() => handleInput('00')} className={inputClasses}>
            00
          </button>
          <button onClick={() => handleInput('+')} className={inputClasses}>
            +
          </button>

          <button
            onClick={() => {
              setScreen('0'), setInput('0')
            }}
            className={`${inputClasses} col-span-2 bg-orange-600`}
          >
            C
          </button>
          <button
            onClick={() => handleOperation('=')}
            className={`${inputClasses} col-span-2`}
          >
            =
          </button>
        </main>
      </div>
    </div>
  )
}

export default Calculator
