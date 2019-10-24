import React, { createContext, useReducer, useContext } from 'react'

export const UserContext = createContext({})
// creates user context object with provider and
// a consumer

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
export const useUserValue = () => {
  console.log(
    'function that will call use context and because we use a reducer this will return our state and dispatch function'
  )
  return useContext(UserContext)
}
