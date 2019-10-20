import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import RegisterLogin from './pages/RegisterLogin'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register-login" component={RegisterLogin} />
      </Switch>
    </div>
  )
}
