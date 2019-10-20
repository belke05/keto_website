const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')
const { createUser } = require('../passport/authenticationFunctions')
// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')

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

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' })
        return
      }

      // We are now logged in (notice req.user)
      res.json(req.user)
    })
  })(req, res, next)
})

router.post('/login-google', (req, res, next) => {})

router.post('/login-facebook', (req, res, next) => {})

router.post('/login-no-passport', (req, res, next) => {
  const { username, password } = req.body
  // first check to see if there's a document with that username
  User.findOne({ username })
    .then(userDoc => {
      // "userDoc" will be empty if the username is wrong (no document in database)
      if (!userDoc) {
        // create an error object to send to our error handler with "next()"
        next(new Error('Incorrect username '))
        return
      }

      // second check the password
      // "compareSync()" will return false if the "password" is wrong
      if (!bcrypt.compareSync(password, userDoc.password)) {
        // create an error object to send to our error handler with "next()"
        next(new Error('Password is wrong'))
        return
      }

      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userDoc, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userDoc.password = undefined
        res.json(userDoc)
      })
    })
    .catch(err => next(err))
})

router.get('/logout', (req, res) => {
  req.logout()
  res.json({ message: 'You are out!' })
})

module.exports = router
