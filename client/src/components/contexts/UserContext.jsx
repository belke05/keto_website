import React, { useEffect, useState, createContext } from 'react'
import user_management from '../../api/user-management'

export const UserContext = createContext({})
// creates user context object with provider and
// a consumer

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(user_management.getSessionStorageUser())
  }, [])
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
