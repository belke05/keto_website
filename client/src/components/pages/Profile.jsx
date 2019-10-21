import React, { useEffect, useState } from 'react'
import user_management from '../../api/user-management'

export default function Profile() {
  const [userData, setUserData] = useState()
  useEffect(() => {
    const storedUser = user_management.getSessionStorageUser()
    console.log(storedUser)
    setUserData(storedUser)
    return () => {}
  }, [])
  console.log(userData)
  return (
    <div>
      <div>profile page</div>
    </div>
  )
}
