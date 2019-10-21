import React, { createContext, useState, useEffect } from 'react'
import user_management from '../api/user-management'
//NOTE createcontext
const UserContext = createContext(null)

// will be wrapper we can put around our component
// so that we can access user data
function UserProvider({ children }) {
  const [user, setUser] = useState({})
  useEffect(() => {
    const savedUser = user_management.getSessionStorageUser()
    console.log(savedUser)
    setUser(savedUser)
  }, [])
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

UserProvider.context = UserContext

export default UserProvider

//NOTE sessionstorage or route
