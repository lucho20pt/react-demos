import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row text-xl gap-5">
        <li>
          <FaRegHeart />
        </li>
        <li>
          <AiOutlineShoppingCart />
        </li>
        <li>
          <FaRegUser />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
