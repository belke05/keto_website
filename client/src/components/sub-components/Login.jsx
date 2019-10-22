import React, { useState } from 'react'
import user_management from '../../api/user-management'
import { useForm } from '../../hooks'

export default function Login(props) {
  const { formValues, getInputProps } = useForm({
    username: '',
    password: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    user_management
      .login(formValues.username, formValues.password)
      .then(result => {
        console.log('SUCCESS LOGIN!')
        console.log(props, props.historypush, 'here')
        props.passedHistory.push('/profile') // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()))
  }

  const [message, setMessage] = useState(null)

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        Username: <input type="text" {...getInputProps('username')} /> <br />
        Password: <input type="password" {...getInputProps('password')} />
        <br />
        <button
          className="login-btn btn"
          style={{ backgroundColor: '#1A8FDD' }}
        >
          Login
        </button>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  )
}
