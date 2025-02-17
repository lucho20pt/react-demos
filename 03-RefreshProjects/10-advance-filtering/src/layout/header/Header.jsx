import PropTypes from 'prop-types'

import Navigation from './Navigation'
import Search from './Search'

const Header = ({ setSearchInput }) => {
  const logo = '<Filter/>'
  return (
    <header
      className="w-full flex flex-row justify-around items-center p-4 gap-5 
    text-indigo-500 border-b-2"
    >
      <h1 className="text-xl font-bold">{logo}</h1>
      <Search setSearchInput={setSearchInput} />
      <Navigation />
    </header>
  )
}

Header.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
}

export default Header
