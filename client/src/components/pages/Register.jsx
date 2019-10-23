import React from 'react'
import Signup from '../sub-components/Signup'
// import user_management from '../../api/user-management'
// import { Link } from 'react-router-dom'

export default function Register(props) {
  return (
    <div>
      <Signup passedHistory={props.history} />
    </div>
  )
}
