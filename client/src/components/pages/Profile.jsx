import React, { useEffect, useState } from 'react'
import authentication from '../../api/authentication'

export default function Profile() {
  const [userData, setUserData] = useState()
  useEffect(() => {
    const storedUser = authentication.getSessionStorageUser()
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
