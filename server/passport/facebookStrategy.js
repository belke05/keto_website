const FacebookStrategy = require('passport-facebook')
const passport = require('passport')
const User = require('../models/User')
const chalk = require('chalk')
const { FACEBOOK } = require('../../config')

passport.use(
  new FacebookStrategy(
    // options
    {
      clientID: FACEBOOK.clientID,
      clientSecret: FACEBOOK.clientSecret,
      callbackURL: '/user-management/login-facebook/callback',
    },
    // this gets send to callback url
    async (accessToken, refreshToken, profile, done) => {
      console.log('here')
      console.log(chalk.blue(JSON.stringify(profile)))
      const foundUser = await User.findOne({ facebook_id: profile.id })
      if (!foundUser) {
        const newUser = await new User({
          username: profile.displayName,
          facebook_id: profile.id,
        }).save()
        console.log('new facebook user created', newUser)
      } else {
        console.log('user already exists', foundUser)
      }
    }
  )
)
