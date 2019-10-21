import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../sub-components/Logout'

export default function Home() {
  return (
    <div className="Home">
      <Link to="/register-login">
        <i class="fa fa-user" aria-hidden="true"></i>
      </Link>
      <Logout />
    </div>
  )
}
