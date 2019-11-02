const FacebookStrategy = require('passport-facebook')
const passport = require('passport')
const User = require('../models/User')
const chalk = require('chalk')

passport.use(
  new FacebookStrategy(
    // options
    {
      clientID: process.env.FACEBOOK_CLIENTID,
      clientSecret: process.env.FACEBOOK_CLIENTSECRET,
      callbackURL: '/authentication/login-facebook/callback',
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
        done(null, newUser)
        console.log('new facebook user created', newUser)
      } else {
        console.log('user already exists', foundUser)
        done(null, foundUser)
      }
    }
  )
)
