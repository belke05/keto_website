import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../sub-components/Login'
import Signup from '../sub-components/Signup'
import user_management from '../../api/user-management'

export default function RegisterLogin(props) {
  const [user, setUser] = useState({})
  useEffect(() => {
    user_management.getUserInfo().then(res => {
      console.log('response', res)
    })
  }, [])
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
