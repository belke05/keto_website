import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import MainNavBar from './sub-components/MainNavBar'
import UserContextProvider from './contexts/UserContext'

export default function App() {
  const initialState = { user: null }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'userLogin':
        return {
          ...state,
          user: action.newUser,
        }
      case 'userLogout':
        return {
          ...state,
          user: action.noUser,
        }
      default:
        return state
    }
  }

  return (
    <div className="App">
      <UserContextProvider initialState={initialState} reducer={reducer}>
        <MainNavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/users" component={Home} />
          <Route path="/register-login" exact component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </UserContextProvider>
    </div>
  )
}
