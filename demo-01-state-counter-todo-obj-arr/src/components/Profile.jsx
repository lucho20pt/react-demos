import { useState } from 'react'

const Profile = () => {
  const [profile, setProfile] = useState({ name: 'Daniel', age: "24" })
  const [name, setName] = useState(profile.name)
  const [age, setAge] = useState(profile.age)

  const updateUserProfile = (event) => {
    event.preventDefault()
    setProfile({ name: name, age: age })
  }

  const handleNameChange = (event) => setName(event.target.value)
  const handleAgeChange = (event) => setAge(event.target.value)

  return (
    <section>
      <h1>User Profile</h1>

      <form onSubmit={updateUserProfile}>
        <div className="row">
          <input
            type="text"
            onChange={handleNameChange}
            value={name}
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="row">
          <input
            type="number"
            onChange={handleAgeChange}
            value={age}
            name="age"
            id="age"
            placeholder="Age"
          />
        </div>
        <div className="row">
          <button type="submit">Edit User</button>
        </div>
      </form>
      <ul>
        <li>Name: {profile.name}</li>
        <li>Age: {profile.age}</li>
      </ul>
    </section>
  )
}

export default Profile
