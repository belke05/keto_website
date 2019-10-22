import React, { useEffect, useState } from 'react'
import Login from '../sub-components/Login'
import Signup from '../sub-components/Signup'
// import user_management from '../../api/user-management'
// import { Link } from 'react-router-dom'
import GoogleIcon from '../../assets/images/google.png'
import FacebookIcon from '../../assets/images/facebook.png'

export default function RegisterLogin(props) {
  const [user, setUser] = useState({})
  return (
    <div>
      <Login passedHistory={props.history} />
      <Signup passedHistory={props.history} />
      <div className="social-login-buttons">
        <a
          href="http://localhost:5000/user-management/login-google"
          className="btn login-btn"
          style={{ backgroundColor: '#CB4024', margin: 5, display: 'block' }}
          title="login with google"
        >
          <img src={GoogleIcon} alt="google-icon" className="btn-icon" />
          <span className="btn-txt">Login</span>
        </a>
        <a
          // onClick={e => {
          //   window.open(
          //     'http://localhost:5000/user-management/login-facebook',
          //     '_self'
          //   )
          // }}
          className="btn login-btn"
          style={{ backgroundColor: '#3B5899', margin: 5, display: 'block' }}
          title="login with facebook"
          href="http://localhost:5000/user-management/login-facebook"
        >
          <img src={FacebookIcon} alt="facebook-icon" className="btn-icon" />
          <span className="btn-txt">Login</span>
        </a>
      </div>
    </div>
  )
}
