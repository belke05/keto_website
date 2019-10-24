//NOTE createcontext and useReduce to have a globaly managable state 
**in our context component**
export const UserContext = createContext({}) ==> creates user usercontext obj with provider and consumer
export default function UserContextProvider({  ==> will be our providing wrapper
  reducer,
  initialState,
  children,
}) {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}> ==> reducer is a function we define when using this component 
      {children}
    </UserContext.Provider>
  )
}
export const useUserValue = () => { ==> if we need to change the user value or destroy the user value somewhere we use this function
  return useContext(UserContext)
}
**we provide our context by using it ass wrapper for other components**
const initialState = { user: null }
const reducer = (state, action) => {
    switch (action.type) {
    case 'userLogin':
      return {
        ...state,
        user: action.newUser,
      }
    default:
      return state
  }
} ==> we pass this through to the provider 
**we can use our useUservalue in other components it will return the dispatch and the state which we will then be able to modify**
dispatch({
          type: 'userLogin',
          newUser: logedInUser,
        })

//NOTE sessionstorage or route 
we have 2 options to get user info 
in this instance we will use the sessionstorage where we saved
the user to to set up our context so that 
we can access user info anywhere in the app 