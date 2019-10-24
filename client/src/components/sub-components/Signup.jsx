import React, { useState } from 'react'
import user_management from '../../api/user-management'
import { useUserValue } from '../contexts/UserContext'

export default function Signup(props) {
  const [state, setState] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    message: null,
  })

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      username: state.username,
      email: state.email,
      password: state.password,
      first_name: state.first_name,
      last_name: state.last_name,
    }
    user_management
      .register(data)
      .then(result => {
        console.log('signup success!')
        props.passedHistory.push('/home') // Redirect to the home page
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="Signup">
      <h2>Signup</h2>
      <form>
        Username:{' '}
        <input
          type="text"
          value={state.username}
          name="username"
          onChange={handleInputChange}
        />{' '}
        <br />
        email:{' '}
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={handleInputChange}
        />{' '}
        <br />
        First Name:{' '}
        <input
          type="text"
          value={state.first_name}
          name="first_name"
          onChange={handleInputChange}
        />{' '}
        <br />
        Last Name:{' '}
        <input
          type="text"
          value={state.last_name}
          name="last_name"
          onChange={handleInputChange}
        />{' '}
        <br />
        Password:{' '}
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={handleInputChange}
        />{' '}
        <br />
        <button
          className="login-btn btn-one"
          style={{ backgroundColor: '#1A8FDD' }}
          onClick={e => handleClick(e)}
        >
          Signup
        </button>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {state.message && <div className="info info-danger">{state.message}</div>}
    </div>
  )
}
