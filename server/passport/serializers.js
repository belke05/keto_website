const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/User')

// const mongoose = require('mongoose')
// user id is serialized in the session
// so with each new req we can use it to
// attach user to the req object
passport.serializeUser((loggedInUser, cb) => {
  // if (loggedInUser.id) {
  //   const id = mongoose.Types.ObjectId(loggedInUser._id)
  //   cb(null, (loggedInUser._id = id))
  // }
  console.log(loggedInUser.id, '------------')
  console.log(loggedInUser._id)
  console.log(mongoose.Types.ObjectId('578df3efb618f5141202a196'))
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
