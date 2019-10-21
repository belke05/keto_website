import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../sub-components/Login'
import Signup from '../sub-components/Signup'

export default function RegisterLogin(props) {
  console.log(sessionStorage)
  console.log(sessionStorage.getItem('user'))
  console.log(localStorage)
  console.log(localStorage.user)
  return (
    <div>
      <Login passedHistory={props.history} />
      <Signup />
      <button
        type="button"
        className="btn btn-primary"
        style={{ color: 'white' }}
      >
        Facebook
      </button>
      <button type="button" className="btn btn-danger">
        Google
      </button>
    </div>
  )
}
