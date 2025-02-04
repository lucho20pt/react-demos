import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {
  const { profile } = useContext(UserContext)
  const { name, age } = profile
  return (
    <h1>
      i'm {name}, {age} years old
    </h1>
  )
}

export default UserProfile
