import React, { useEffect, useState } from 'react'
import user_management from '../../api/user-management'

export default function Logout() {
  const [loginCheck, setLoginCheck] = useState(false)
  useEffect(() => {
    setLoginCheck(user_management.isLoggedIn())
  })
  return (
    <div>
      {loginCheck && (
        <button
          onClick={e => {
            user_management.logout().then(res => {
              setLoginCheck(false)
            })
          }}
        >
          logout
        </button>
      )}
    </div>
  )
}
