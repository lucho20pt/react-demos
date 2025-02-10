import SearchBar from './components/SearchBar'

const App = () => {
  const title = '<HiddenSearchBar />'

  return (
    <div
      className={`dark position-relative h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white`}
    >
      <header>
        <SearchBar />
        <h1 className="p-10 py-30 text-4xl text-black dark:text-indigo-500 font-bold text-center">
          {title}
        </h1>
      </header>
      <section
        className="intro flex flex-col items-center justify-center 
        text-black dark:text-indigo-500 text-center font-bold gap-4 p-10"
      >
        <h1 className="text-4xl">Click Outside or</h1>
        <h2 className="text-3xl">Toggle Button</h2>
      </section>
    </div>
  )
}

export default App
