import React, { useEffect, useContext } from 'react'
import user_management from '../../api/user-management'
import { UserContext } from '../contexts/UserContext'

export default function Profile(props) {
  useEffect(() => {
    // if it is a local login then it is already in the session
    // otherwise a a user session needs to still be created based upon
    // user id
    if (props.match.params) {
      user_management.setSessionStorageUser()
    }
  }, [])

  const user = useContext(UserContext)
  console.log(user, 'user here')

  return (
    <div>
      <div>profile page</div>
      <div>
        <h1>hi there</h1>
      </div>
    </div>
  )
}
