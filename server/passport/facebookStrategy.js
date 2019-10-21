const FacebookStrategy = require('passport-facebook').Strategy
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
    (accessToken, refreshToken, profile, done) => {
      console.log('here', accessToken, refreshToken)
      console.log(chalk.blue(JSON.stringify(profile)))
      console.log('here error')
      // done(null, false, '')

      // User.findOne({})
      // user = { ...profile }
      // done(null, profile)
    }
  )
)
