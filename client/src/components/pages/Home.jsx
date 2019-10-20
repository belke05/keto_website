import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="Home">
      <Link to="/register-login">
        <i class="fa fa-user" aria-hidden="true"></i>
      </Link>
    </div>
  )
}
