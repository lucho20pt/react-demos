import { useState } from 'react'

const Calculator = () => {
  const title = '<Calculator/>'
  const [screen, setScreen] = useState('0')
  // const operators = ['+', '-', '*', '/', ","]

  const handleInput = (value) => {
    if (
      value === ',' ||
      value === '.' ||
      value === '+' ||
      value === '-' ||
      value === '*' ||
      value === '/'
    ) {
      return setScreen((prevValue) =>
        prevValue.includes(value) ? prevValue : `${prevValue}${value}`
      )
    }
    if (screen === '0' && value === '00') return setScreen('0')
    setScreen((prevScreen) => (prevScreen === '0' ? value : prevScreen + value))
  }

  const handleOperation = () => {
    const operation = screen
    const result = eval(operation)
    setScreen(result)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10 text-5xl text-indigo-500 font-bold">{title}</h1>

      <div className="flex flex-col items-center justify-center">
        <header
          className="screen flex flex-row items-center justify-end w-96 h-16 
        bg-gray-100 rounded-lg p-4 text-gray-700 text-3xl font-bold"
        >
          {screen}
        </header>

        <main className="keyboard grid grid-cols-4 gap-2 mt-4 text-white">
          <button
            onClick={() => handleInput('7')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            7
          </button>
          <button
            onClick={() => handleInput('8')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            8
          </button>
          <button
            onClick={() => handleInput('9')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            9
          </button>
          <button className="bg-gray-800 rounded-lg p-4 text-3xl font-bold">
            /
          </button>
          <button
            onClick={() => handleInput('4')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            4
          </button>
          <button
            onClick={() => handleInput('5')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            5
          </button>
          <button
            onClick={() => handleInput('6')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            6
          </button>
          <button className="bg-gray-800 rounded-lg p-4 text-3xl font-bold">
            *
          </button>
          <button
            onClick={() => handleInput('1')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            1
          </button>
          <button
            onClick={() => handleInput('2')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            2
          </button>
          <button
            onClick={() => handleInput('3')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            3
          </button>
          <button className="bg-gray-800 rounded-lg p-4 text-3xl font-bold">
            -
          </button>
          <button
            onClick={() => handleInput(',')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            .
          </button>

          <button
            onClick={() => handleInput('0')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            0
          </button>
          <button
            onClick={() => handleInput('00')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            00
          </button>
          <button
            onClick={() => handleInput('+')}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold"
          >
            +
          </button>
          <button
            onClick={() => setScreen('0')}
            className="bg-orange-600 rounded-lg p-4 text-3xl font-bold col-span-2"
          >
            C
          </button>
          <button
            onClick={() => handleOperation()}
            className="bg-gray-800 rounded-lg p-4 text-3xl font-bold col-span-2"
          >
            =
          </button>
        </main>
      </div>
    </div>
  )
}

export default Calculator
