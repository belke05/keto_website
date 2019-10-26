import React, { createContext, useReducer, useContext } from 'react'
import chalk from 'chalk'

export const UserContext = createContext({})
// creates user context object with provider and a consumer

// HOC we willn use in our app file so that we have access to all user info
export default function UserContextProvider({
  reducer,
  initialState,
  children,
}) {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  )
}

// normally we would just use use context every where
// this function makes so that we dont need to pass that value through
// dispatch function that will call use context and because we use a reducer this will return our state and dispatch function
export const useUserValue = () => {
  return useContext(UserContext)
}
// calls use context thanks to useReducer the context will be available and editable everywhere
