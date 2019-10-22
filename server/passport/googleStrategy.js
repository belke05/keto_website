// const GoogleStrategy = require('passport-google-oauth2').Strategy
// const passport = require('passport')
// const User = require('../models/User')

// passport.use(
//   new GoogleStrategy(
//     // options
//     { clientID: '', clientSecret: '', callbackURL: '' },
//     // this gets send to callback url
//     (accessToken, refreshToken, profile, cb) => {
//       User.findOne({})
// new User({
//   username: profile.displayName,
//   facebook_id: profile.id,
// })
//   .save()
//   .then(newUser => {
//     console.log('new facebook user created', newUser)
//     // done(null, profile)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//     }
//   )
// )
