import React, { useState } from 'react'
import clsx from 'clsx'
import Input from '@material-ui/core/Input'
import makeStyles from '@material-ui/core/styles/makeStyles'
import user_management from '../../api/user-management'
import { NONAME } from 'dns'

export default function Signup(props) {
  const [state, setState] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    message: null,
  })

  // const styles = theme => ({
  //   underline: {
  //     color: 'green',
  //   },
  // })

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
      .then(user => {
        console.log('signup success!')
        props.passedHistory.push('/home') // Redirect to the home page
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="signup">
      <h2>Welcome to keto_shop!</h2>
      <form>
        <Input
          type="text"
          value={state.username}
          name="username"
          onChange={handleInputChange}
          placeholder="username"
          required
          classes={{ root: 'signup-input', underline: 'signup-underline' }}
        ></Input>
        <br />
        <Input
          type="email"
          value={state.email}
          name="email"
          onChange={handleInputChange}
          placeholder="email"
          required
          classes={{ root: 'signup-input', underline: 'signup-underline' }}
        ></Input>
        <br />
        <Input
          type="text"
          value={state.first_name}
          name="first_name"
          onChange={handleInputChange}
          placeholder="first name"
          classes={{ root: 'signup-input', underline: 'signup-underline' }}
          required
        ></Input>
        <br />
        <Input
          onChange={handleInputChange}
          type="text"
          value={state.last_name}
          name="last_name"
          placeholder="last name"
          classes={{ root: 'signup-input', underline: 'signup-underline' }}
          required
        ></Input>
        <br />
        <Input
          onChange={handleInputChange}
          type="password"
          value={state.password}
          name="password"
          placeholder="password"
          classes="signup-input"
          classes={{ root: 'signup-input', underline: 'signup-underline' }}
          required
        ></Input>
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
