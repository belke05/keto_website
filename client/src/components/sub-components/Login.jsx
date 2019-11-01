import React, { useState } from 'react'
import authentication from '../../api/authentication'
import { useForm } from '../../hooks'
import { useUserValue } from '../contexts/UserContext'
import chalk from 'chalk'

export default function Login(props) {
  const { formValues, getInputProps } = useForm({
    username: '',
    password: '',
  })
  const [{ user }, dispatch] = useUserValue()
  // we will use dispatch in this to set our user in the global state
  function handleSubmit(e) {
    e.preventDefault()
    authentication
      .login(formValues.username, formValues.password)
      .then(logedInUser => {
        console.log(chalk.green('SUCCESS LOGIN!'))
        dispatch({
          type: 'userLogin',
          newUser: logedInUser,
        })
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
