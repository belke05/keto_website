import React, { useEffect, useState } from 'react'
import user_management from '../../api/user-management'

export default function Logout() {
  return (
    <div>
      <button
        onClick={e => {
          user_management.logout()
        }}
      >
        logout
      </button>
    </div>
  )
}
