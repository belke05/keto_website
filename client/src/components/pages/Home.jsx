import React, { useEffect } from 'react'
import user_management from '../../api/user-management'
import { Link } from 'react-router-dom'
import Logout from '../sub-components/Logout'

export default function Home() {
  useEffect(() => {
    const user = user_management.getSessionStorageUser()
  }, [])
  return (
    <div className="Home">
      <Link to="/register-login">
        <i className="fa fa-user" aria-hidden="true"></i>
      </Link>
      <Logout />
    </div>
  )
}
