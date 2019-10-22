const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/User')

// user id is serialized in the session
// so with each new req we can use it to
// attach user to the req object
passport.serializeUser((loggedInUser, cb) => {
  console.log('logged in user', loggedInUser)
  cb(null, loggedInUser._id)
})

passport.deserializeUser((userIdFromSession, cb) => {
  // in later reqs the id that was given to
  // the ses before will be used to find the user
  // now and attach the user to req.user
  User.findById(userIdFromSession)
    .then(userDocument => {
      console.log(userDocument, '--------------------')
      userDocument.password = null
      cb(null, userDocument)
    })
    .catch(err => {
      cb(err)
    })
})
