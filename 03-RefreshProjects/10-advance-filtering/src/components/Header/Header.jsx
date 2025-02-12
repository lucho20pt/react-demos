import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-around items-center p-4 text-indigo-500">
      <input
        type="text"
        placeholder="Enter your search shoes"
        className="w-[200px] p-2 w-1/2 bg-gray-200 placeholder:text-sm text-lg text-gray-500"
      />
      <Navigation />
    </header>
  )
}

export default Header
