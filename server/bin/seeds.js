const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
const mongoose = require('mongoose')
const Product = require('../models/Product')

require('../configs/database')

let products = [
  {
    name: 'avocado',
    description: 'new avocado',
    ingredients: '',
    nutritional_value: {
      cal: 100,
      fat: 10,
      carbs: 20,
      protein: 30,
      sugar: 30,
      fiber: 30,
      salt: 30,
    },
    category: 'food',
    tags: ['cheap'],
    picture_url: '',
    price: 200.1,
    rating: 5,
    sales: 1,
  },
  {
    name: 'avocado',
    description: 'new avocado',
    ingredients: '',
    nutritional_value: {
      cal: 100,
      fat: 10,
      carbs: 20,
      protein: 30,
      sugar: 30,
      fiber: 30,
      salt: 30,
    },
    category: 'food',
    tags: ['cheap'],
    picture_url: '',
    price: 200.1,
    rating: 5,
    sales: 1,
  },
  {
    name: 'avocado',
    description: 'new avocado',
    ingredients: '',
    nutritional_value: {
      cal: 100,
      fat: 10,
      carbs: 20,
      protein: 30,
      sugar: 30,
      fiber: 30,
      salt: 30,
    },
    category: 'food',
    tags: ['cheap'],
    picture_url: '',
    price: 200.1,
    rating: 5,
    sales: 1,
  },
]

deleteAllThenInsertAll()

async function deleteAllThenInsertAll() {
  await Product.deleteMany()
  await Product.insertMany(products)
  mongoose.disconnect()
  return 'good seeds'
}
