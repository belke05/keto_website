import React, { useEffect } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
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
      <div className="jumbotron-wrapper">
        <Jumbotron>
          <h1>Deliciously healthy food and drinks!</h1>
          <p>
            We at Keto-Shop believe that the ketogenic diet is your way to a
            healthier and balanced life. <br /> Without having to sacrifice
            bacon.
          </p>
          <p>
            <Button variant="primary" id="learn-more">
              Learn more
            </Button>
          </p>
        </Jumbotron>
      </div>
      <BottomNavBar />
    </div>
  )
}
