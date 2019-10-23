import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import MainNavBar from './sub-components/MainNavBar'
// this is a context so that we can access the user his info everywhere

export default function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register-login" exact component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  )
}
