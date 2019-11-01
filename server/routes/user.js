const express = require('express')
const router = express.Router()
const User = require('../models/User')
const chalk = require('chalk')

router.post(`/favourites/:productId`, (req, res, next) => {
  // console.log(chalk.blue(req.user))
  const productId = req.params.productId
  const userId = req.user._id
  User.findByIdAndUpdate(
    userId,
    { $addToSet: { _favourites: productId } }, // adds a value to an array unless the value is already present
    { new: true }
  )
    .then(updatedUser => {
      console.log(chalk.green('product added'))
      const newFavourites = updatedUser._favourites
      res.send(newFavourites)
    })
    .catch(err => {
      console.log(chalk.red(err, 'error while adding a favourite'))
    })
})

router.delete(`/favourites/:productId`, (req, res, next) => {
  const productId = req.params.productId
  const userId = req.user._id
  User.findByIdAndUpdate(
    userId,
    { $pull: { _favourites: productId } },
    { new: true }
  )
    .then(updatedUser => {
      console.log(chalk.green('product deleted'))
      const newFavourites = updatedUser._favourites
      res.send(newFavourites)
    })
    .catch(err => {
      console.log(chalk.red(err, 'error deleting a favourite'))
    })
})

module.exports = router
