const passport = require('passport')
const User = require('../models/User')

// user id is serialized in the session
passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id)
})

passport.deserializeUser((userIdFromSession, cb) => {
  // in later reqs the id that was given to
  // the ses before will be used to find the user
  // now and attach the user to req.user
  User.findById(userIdFromSession)
    .then(userDocument => {
      userDocument.password = null
      cb(null, userDocument)
    })
    .catch(err => {
      cb(err)
    })
})
