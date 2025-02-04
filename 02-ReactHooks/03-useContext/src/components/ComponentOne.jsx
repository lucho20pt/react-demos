import React, { useContext } from 'react'
import { DataContext } from '../App'

const ComponentOne = () => {
  const profile = useContext(DataContext)
  return (
    <h2>
      My name is {profile.name} and i'm {profile.age} years old
    </h2>
  )
}

export default ComponentOne
