import axios from 'axios'

console.log(process.env.NODE_ENV)

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/user-management'
      : `http://${window.location.hostname}:5000/user-management`,
  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  // register a user with his avatar
  register(userInfo) {
    const formData = new FormData()
    const userInfoKeys = Object.keys(userInfo)
    userInfoKeys.forEach(key => {
      formData.append(`${key}`, userInfo[`${key}`])
    })
    return service
      .post('/user', formData)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        sessionStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return sessionStorage.getItem('user') != null
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getSessionStorageUser() {
    return JSON.parse(sessionStorage.getItem('user'))
  },

  login(username, password) {
    return service
      .post('/login', {
        username,
        password,
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        sessionStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  loginFacebook() {
    return service
      .get('/login-facebook')
      .then(res => {
        console.log(res)
      })
      .catch(errHandler)
  },

  logout() {
    sessionStorage.removeItem('user')
    return service.get('/logout')
  },

  getUserInfo() {
    return service
      .get('/users')
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err, 'error getting user info')
      })
  },
}
