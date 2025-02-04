import React from 'react'
import BasicEffect from './components/BasicEffect'
import CounterEffect from './components/CounterEffect'
import FetchDataEffect from './components/FetchDataEffect'

const App = () => {
  return (
    <div>
      <h1>Use Effect</h1>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </div>
  )
}

export default App
