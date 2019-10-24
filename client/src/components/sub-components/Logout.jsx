import React, { useEffect, useState } from 'react'
import user_management from '../../api/user-management'
import { useUserValue } from '../contexts/UserContext'

export default function Logout() {
  const [{ user }, dispatch] = useUserValue()
  return (
    <div>
      <button
        onClick={e => {
          user_management.logout()
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
