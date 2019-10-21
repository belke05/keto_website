import React, { useContext, useState } from 'react'
import UserProvider from '../../contexts/UserProvider'

export default function Profile() {
  const [userData, setUserData] = useContext(UserProvider.context)
  console.log(userData)
  return (
    <div>
      <div>profile page</div>
    </div>
  )
}
