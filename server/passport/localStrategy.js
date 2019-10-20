const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const bcrypt = require('bcrypt')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    // this is our verify callback to check provided
    // credentials, if the credentials are good we invoke done
    (username, password, done) => {
      User.findOne({ username })
        .then(foundUser => {
          if (!foundUser) {
            // we invoke the done with fals instead of user
            // if credentials dont suffice
            done(null, false, { message: 'Incorrect username or password' })
            return
          }

          if (!bcrypt.compareSync(password, foundUser.password)) {
            done(null, false, { message: 'Incorrect username or password' })
            return
          }
          done(null, foundUser)
        })
        .catch(err => done(err))
    }
  )
)
