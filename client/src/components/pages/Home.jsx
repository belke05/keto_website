import React, { useEffect } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import authentication from '../../api/authentication'
import keto_background from '../../assets/images/keto_background.jpg'
import { useUserValue } from '../contexts/UserContext'
import BottomNavBar from '../sub-components/BottomNavBar'

export default function Home(props) {
  const [{ user }, dispatch] = useUserValue()
  useEffect(() => {
    document.querySelector('#nav').classList.add('bg-transparent')
    if (props.match.url === '/users' || props.match.url === '/home') {
      authentication
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
    // as the user of the context and in case of signup we use home url meaning we will have to do the same
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
        <Jumbotron className="jumbo">
          <h1>Deliciously healthy food and drinks!</h1>
          <p>
            We at Keto-Shop believe that the ketogenic diet is your way to a
            healthier and balanced life. <br /> Without having to sacrifice
            bacon &#x1F953;
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
