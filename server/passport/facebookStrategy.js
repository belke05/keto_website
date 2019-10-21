const FacebookStrategy = require('passport-facebook')
const passport = require('passport')
const User = require('../models/User')
const chalk = require('chalk')
let user = {}

passport.use(
  new FacebookStrategy(
    // options
    {
      clientID: process.env.FACEBOOK_CLIENTID,
      clientSecret: process.env.FACEBOOK_CLIENTSECRET,
      callbackURL: '/user-management/login-facebook/callback',
    },
    // this gets send to callback url
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)))
      // User.findOne({})
      user = { ...profile }
      return cb(null, profile)
    }
  )
)
