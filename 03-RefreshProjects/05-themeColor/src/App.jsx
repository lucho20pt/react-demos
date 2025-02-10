import { useState } from 'react'
import ThemeButton from './components/ThemeButton'

const App = () => {
  const title = '<Theme />'
  const [theme, setTheme] = useState('dark')
  return (
    <div
      className={`${theme} position-relative h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white`}
    >
      <header>
        <h1 className="p-10 py-30 text-5xl text-black dark:text-indigo-500 font-bold text-center">
          {title}
        </h1>
      </header>
      <ThemeButton setTheme={setTheme} theme={theme} />
      <section
        className="intro flex flex-col items-center justify-center 
        text-black dark:text-indigo-500 text-center font-bold gap-4 p-10"
      >
        <h1 className="text-4xl">Hello fellow user.</h1>
        <h2 className="text-3xl">Wellcome to our website</h2>
      </section>
    </div>
  )
}

export default App
