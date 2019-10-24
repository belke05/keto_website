import React from 'react'
import GoogleIcon from '../../assets/images/google.png'
import FacebookIcon from '../../assets/images/facebook.png'

export default function SocialLogin(props) {
  return (
    <div className="social-login-buttons">
      <a
        href={
          process.env.NODE_ENV === 'production'
            ? '/user-management/login-google'
            : `http://${window.location.hostname}:5000/user-management/login-google`
        }
        className="btn-one login-btn"
        style={{ backgroundColor: '#CB4024', margin: 5 }}
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
        className="btn-one login-btn"
        style={{ backgroundColor: '#3B5899', margin: 5 }}
        title="login with facebook"
        href={
          process.env.NODE_ENV === 'production'
            ? '/user-management/login-facebook'
            : `http://${window.location.hostname}:5000/user-management/login-facebook`
        }
      >
        <img src={FacebookIcon} alt="facebook-icon" className="btn-icon" />
        <span className="btn-txt">Login</span>
      </a>
    </div>
  )
}
