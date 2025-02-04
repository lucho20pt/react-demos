import { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [profile, setProfile] = useState({ name: 'Daniel', age: 18 })

  const updateProfile = (newProfile) => {
    setProfile(newProfile)
  }

  return (
    <UserContext.Provider value={{ profile, updateProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider } // export both the context and the provider
