import { useContext } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {
  const { updateProfile } = useContext(UserContext)

  // update user
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const age = e.target.age.value
    if (name.trim() !== '' && age.trim() !== '') {
      updateProfile({ name, age })
    }
  }
  return (
    <div>
      <h3>UpdateUser</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input type="text" name="name" id="name" placeholder="Username" />
        </div>
        <div className="row">
          <input type="number" name="age" id="age" placeholder='Age' />
        </div>
        <div className="row">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser
