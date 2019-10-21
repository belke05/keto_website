const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')
const { createUser } = require('../passport/authenticationFunctions')
const { putUserInfoInRequest } = require('../middlewares')

router.post('/user', (req, res, next) => {
  const {
    username,
    password,
    first_name,
    last_name,
    email,
    avatar_url,
  } = req.body
  if (!username || !password || !first_name || !last_name || !email) {
    res.status(400).json({ message: 'Indicate username,password and name' })
    return
  }
  User.findOne({ username })
    .then(userDoc => {
      if (userDoc !== null) {
        res.status(409).json({ message: 'Username taken' })
        return
      }
      createUser(req.body) //NOTE registration info
        .then(createdUser => {
          req.logIn(createdUser, () => {
            createdUser.password = undefined
            res.json(createdUser)
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => next(err))
})

//NOTE local strategy explainer
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' })
      return
    }

    if (!theUser) {
      res.status(401).json(failureDetails)
      return
    }
    // with req.login we establish a session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' })
        return
      }
      // We are now logged in (notice req.user)
      // hide sensitive info
      req.user.password = null
      req.user._id = null
      res.json(req.user)
    })
  })(req, res, next)
})

router.get('/login-google', (req, res, next) => {})
router.get(
  '/login-google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res, next) => {
    // req.login() to establish a session
    res.redirect('/')
  }
)

router.get('/login-facebook', (req, res, next) => {})
router.get(
  '/login-facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res, next) => {
    res.redirect('/')
  }
)

router.get('/logout', (req, res) => {
  console.log(req.sessionID, req.session)
  req.logout()
  res.json({ message: 'You are out!' })
})

//NOTE way of getting user info via sessionId (safer)
router.get('/users', (req, res, next) => {
  req.user._id = null
  res.json({ user: req.user })
})

module.exports = router
