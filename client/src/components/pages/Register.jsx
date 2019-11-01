import React from 'react'
import Signup from '../sub-components/Signup'
// import { Link } from 'react-router-dom'

export default function Register(props) {
  return (
    <div className="register-page">
      <Signup passedHistory={props.history} />
    </div>
  )
}
