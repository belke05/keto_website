const FacebookStrategy = require('passport-facebook')
const passport = require('passport')
const User = require('../models/User')
const chalk = require('chalk')
const { FACEBOOK } = require('../../config')
let user = {}

passport.use(
  new FacebookStrategy(
    // options
    {
      clientID: FACEBOOK.clientID,
      clientSecret: FACEBOOK.clientSecret,
      callbackURL: '/user-management/login-facebook/callback',
    },
    // this gets send to callback url
    (accessToken, refreshToken, profile, cb) => {
      console.log('here')
      console.log(chalk.blue(JSON.stringify(profile)))
      // User.findOne({})
      user = { ...profile }
      return cb(null, profile)
    }
  )
)
