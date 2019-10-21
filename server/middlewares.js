const User = require('./models/User')

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) next()
  else next({ status: 403, message: 'Unauthorized' })
}
// this is a passport middleware to check
// for a request if a user
// is logged in

module.exports = {
  isLoggedIn,
}

/*
function putUserInfoInRequest(req, res, next) {
  console.log(req.user, 'nice')
  if (req.isAuthenticated()) {
    User.findById(req.session.cookie.passport.user).then(foundUser => {
      foundUser._id = null
      foundUser.password = null
      req.foundUser = foundUser
      next()
    })
  }
}
*/
