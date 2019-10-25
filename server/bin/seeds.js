const path = require('path')
const axios = require('axios')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
const mongoose = require('mongoose')
const Product = require('../models/Product')

require('../configs/database')

let products = [
  {
    name: 'Nocco Miami',
    description:
      'High power energy drink with strawberry flavor. Ideal as a pre-workout.',
    ingredients: [
      'Carbonated Water',
      'Branched Chain Amino Acids BCAA (L-Leucine, L-Valine, L-Isoleucine)',
      'Vitamins (Niacin, B6, Folic Acid, Biotin, D, B12)',
      'Acidity Regulators (Citric Acid)',
      'Flavouring (Lychee, Apple)',
      'Sweetener (Sucralose)',
      'Colouring (Betacarotene)',
    ],
    nutritional_value: {
      cal: 25,
      fat: 0,
      carbs: 0,
      protein: 1.5,
      sugar: 0,
      fiber: 0,
      salt: 0,
    },
    category: 'drink',
    tags: ['drink', 'energy', 'amino'],
    picture_url:
      'https://res.cloudinary.com/dri8yyakb/image/upload/v1571987632/keto_shop_products/miami_grande_iuodvx.png',
    price: 2,
    rating: 5,
    sales: 0,
  },
  {
    name: 'Vanilla Cake Mix And Frosting',
    description:
      'This Keto Cake Mix makes sweet, light cakes and cupcakes you’ll want to serve on every birthday, anniversary, Flag Day — you’ll start inventing holidays just so you can make this cake! It’s naturally sweetened with Wondrose, the healthy alternative to sugar with a pure, clean flavor!',
    ingredients: [
      "Farine d'amande",
      'oeuf',
      'farine de noix de coco',
      ' farine de noix de coco biologique',
      'amidon de manioc',
      'babeurre',
      'levain phosphate monocalcique',
      'bicarbonate de sodium',
      'sel',
      'épice',
    ],
    nutritional_value: {
      cal: 800,
      fat: 11,
      carbs: 10,
      protein: 20,
      sugar: 3,
      fiber: 5,
      salt: 1,
    },
    category: 'food',
    tags: ['mix', 'cake'],
    picture_url:
      'https://res.cloudinary.com/dri8yyakb/image/upload/v1571987629/keto_shop_products/006647_A_720x_grogui.png',
    price: 3.2,
    rating: 4,
    sales: 1,
  },
  {
    name: 'Nocco Red Berry',
    description:
      'High power energy drink with strawberry flavor. Ideal as a pre-workout.',
    ingredients: [
      'Carbonated Water',
      'Branched Chain Amino Acids BCAA (L-Leucine, L-Valine, L-Isoleucine)',
      'Vitamins (Niacin, B6, Folic Acid, Biotin, D, B12)',
      'Acidity Regulators (Citric Acid)',
      'Flavouring (Lychee, Apple)',
      'Sweetener (Sucralose)',
      'Colouring (Betacarotene)',
    ],
    nutritional_value: {
      cal: 25,
      fat: 0,
      carbs: 0,
      protein: 1.5,
      sugar: 0,
      fiber: 0,
      salt: 0,
    },
    category: 'drink',
    tags: ['drink', 'energy', 'amino'],
    picture_url:
      'https://res.cloudinary.com/dri8yyakb/image/upload/v1571987616/keto_shop_products/nocco_bcaa_red_berries_1_1_yrdcbn.jpg',
    price: 2,
    rating: 5,
    sales: 0,
  },
  {
    name: 'Nocco Orange',
    description:
      'High power energy drink with strawberry flavor. Ideal as a pre-workout.',
    ingredients: [
      'Carbonated Water',
      'Branched Chain Amino Acids BCAA (L-Leucine, L-Valine, L-Isoleucine)',
      'Vitamins (Niacin, B6, Folic Acid, Biotin, D, B12)',
      'Acidity Regulators (Citric Acid)',
      'Flavouring (Lychee, Apple)',
      'Sweetener (Sucralose)',
      'Colouring (Betacarotene)',
    ],
    nutritional_value: {
      cal: 25,
      fat: 0,
      carbs: 0,
      protein: 1.5,
      sugar: 0,
      fiber: 0,
      salt: 0,
    },
    category: 'drink',
    tags: ['drink', 'energy', 'amino'],
    picture_url:
      'https://res.cloudinary.com/dri8yyakb/image/upload/v1571987618/keto_shop_products/nocco_bcaa_orange_1_ehemtu.jpg',
    price: 2,
    rating: 5,
    sales: 0,
  },
  {
    name: 'Hazelnut Flour',
    description:
      'High power energy drink with strawberry flavor. Ideal as a pre-workout.',
    ingredients: [
      'Carbonated Water',
      'Branched Chain Amino Acids BCAA (L-Leucine, L-Valine, L-Isoleucine)',
      'Vitamins (Niacin, B6, Folic Acid, Biotin, D, B12)',
      'Acidity Regulators (Citric Acid)',
      'Flavouring (Lychee, Apple)',
      'Sweetener (Sucralose)',
      'Colouring (Betacarotene)',
    ],
    nutritional_value: {
      cal: 25,
      fat: 0,
      carbs: 0,
      protein: 1.5,
      sugar: 0,
      fiber: 0,
      salt: 0,
    },
    category: 'drink',
    tags: ['drink', 'energy', 'amino'],
    picture_url:
      'https://res.cloudinary.com/dri8yyakb/image/upload/v1571987618/keto_shop_products/nocco_bcaa_orange_1_ehemtu.jpg',
    price: 2,
    rating: 5,
    sales: 0,
  },
]

// const typesOfProducts = [
//   'avocado',
//   'coconut',
//   'egg',
//   'bacon',
//   'nuts',
//   'cheese',
//   'jerky',
// ]

// let food = []
// let i
// let foodSpecifics = []

// typesOfProducts.forEach(product => {
//   axios
//     .get(
//       `https://api.spoonacular.com/food/products/search?query=${product}&maxCarbs=10&apiKey=51026ee59aa0402f977feb9578175477`
//     )
//     .then(res => {
//       i++
//       console.log(res.data.products)
//       food.concat(res.data.products)
//       if (i == typesOfProducts.length) {
//         getspecificinfo
//       }
//     })
// })

// const getspecificinfo = () => {
//   food.forEach(item => {
//     axios
//       .get(`https://api.spoonacular.com/food/products/${item.id}`)
//       .then(res => {
//         console.log(res.data)
//       })
//   })
// }

// axios
//   .get(
//     'https://api.spoonacular.com/food/products/search?query=avocado&maxCarbs=10&apiKey=51026ee59aa0402f977feb9578175477'
//   )
//   .then(res => {
//     console.log(res.data)
//   })

async function deleteAllThenInsertAll() {
  await Product.deleteMany()
  await Product.insertMany(products)
  mongoose.disconnect()
  return 'good seeds'
}
deleteAllThenInsertAll()
