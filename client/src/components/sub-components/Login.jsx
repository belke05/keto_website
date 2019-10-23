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
        // props.passedHistory.push('/profile') // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()))
  }

  const [message, setMessage] = useState(null)

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          placeholder="username"
          type="text"
          {...getInputProps('username')}
        />{' '}
        <br />
        <input
          placeholder="password"
          type="password"
          {...getInputProps('password')}
        />
        <br />
        <button
          className="login-btn btn-one"
          style={{ backgroundColor: '#1A8FDD' }}
        >
          Login
        </button>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  )
}
