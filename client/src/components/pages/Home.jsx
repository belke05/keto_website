import React, { useEffect } from 'react'
import user_management from '../../api/user-management'
import keto_background from '../../assets/images/keto_background.jpg'
import { useUserValue } from '../contexts/UserContext'
import BottomNavBar from '../sub-components/BottomNavBar'

export default function Home(props) {
  const [{ user }, dispatch] = useUserValue()
  useEffect(() => {
    if (props.match.url === '/users') {
      user_management
        .setSessionStorageUser()
        .then(savedUser => {
          dispatch({
            type: 'userLogin',
            newUser: savedUser,
          })
        })
        .catch(err => {
          console.log('error after social login', err)
        })
    } // in case there is a social login we need to save the user in the session  and put him
    // as the user of the context
    return () => {}
  }, [])

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${keto_background})`,
      }}
    >
      <BottomNavBar />
    </div>
  )
}
