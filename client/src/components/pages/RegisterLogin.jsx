import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../sub-components/Login'
import Signup from '../sub-components/Signup'

export default function RegisterLogin() {
  return (
    <div>
      <Login />
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
