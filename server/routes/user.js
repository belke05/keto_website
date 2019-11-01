const express = require('express')
const router = express.Router()
const User = require('../models/User')
const chalk = require('chalk')

router.post(`/favourites/:productId`, (req, res, next) => {
  console.log(chalk.blue(req.user))
  console.log(req.params)
})

module.exports = router
