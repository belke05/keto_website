const bcrypt = require('bcrypt')
const bcryptSalt = 10
const User = require('../models/User')

async function createUser(user) {
  console.log('here')
  const { username, email, password, first_name, last_name } = user
  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)
  const newUser = new User({
    username,
    email,
    password: hashPass,
    first_name,
    last_name,
  })
  const createdUser = await newUser.save()
  return createdUser
}

// module is plain js object with exports prop
// it will return module.exports to require func
module.exports = { createUser }
