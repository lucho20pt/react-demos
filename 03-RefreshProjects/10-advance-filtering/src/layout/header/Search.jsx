import PropTypes from 'prop-types'
import { useState } from 'react'

const Search = ({ setSearchInput }) => {
  const [search, setSearch] = useState('')

  const handleSearchInput = (event) => {
    setSearch(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    if (search !== '') {
      setSearchInput(search)
    }
    setSearch('')
  }

  return (
    <form onSubmit={handleSearchSubmit} className="w-100">
      <input
        onChange={handleSearchInput}
        value={search}
        type="text"
        placeholder="Enter your search shoes"
        className="p-2 w-1/2 max-w-md bg-gray-200 placeholder:text-sm text-lg text-gray-500"
      />
    </form>
  )
}

Search.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
}

export default Search
