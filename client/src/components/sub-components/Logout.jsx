import React, { useEffect, useState } from 'react'
import authentication from '../../api/authentication'
import { useUserValue } from '../contexts/UserContext'

export default function Logout() {
  const [{ user }, dispatch] = useUserValue()
  return (
    <div>
      <button
        className="btn-logout"
        onClick={e => {
          authentication.logout()
          dispatch({
            type: 'userLogout',
            noUser: null,
          })
        }}
      >
        logout
      </button>
    </div>
  )
}
