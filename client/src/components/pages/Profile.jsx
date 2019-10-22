import React, { useEffect, useState } from 'react'
import user_management from '../../api/user-management'

export default function Profile(props) {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    // if it is a local login then it is already in the session
    // otherwise a a user session needs to still be created based upon
    // user id
    if (props.match.params) {
      user_management.setSessionStorageUser().then(returnedUser => {
        setUserData(returnedUser)
      })
    } else {
      const storedUser = user_management.getSessionStorageUser()
      setUserData(storedUser)
    }
    return () => {}
  }, [])
  console.log(userData)
  return (
    <div>
      <div>profile page</div>
      {userData && (
        <div>
          <h1>hi there {userData.username}</h1>
        </div>
      )}
    </div>
  )
}
