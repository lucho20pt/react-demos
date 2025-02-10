import { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const [toggleSearch, setToggleSearch] = useState(false)
  const inputRef = useRef(null)

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setToggleSearch(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <section className="w-full p-10">
      <div
        ref={inputRef}
        className="flex flex-row items-center justify-center mx-auto"
      >
        {toggleSearch && (
          <input
            type="text"
            className="w-[250px] h-15 px-5 border border-gray-300 rounded-lg"
            placeholder="Search..."
            aria-label="Search"
          />
        )}
        <button
          onClick={() => setToggleSearch(!toggleSearch)}
          className="w-[50px] h-15 bg-indigo-500 text-white rounded-lg cursor-pointer"
        >
          <FaSearch className="mx-auto text-2xl" />
        </button>
      </div>
    </section>
  )
}

export default SearchBar
