const path = require('path')
const axios = require('axios')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
const mongoose = require('mongoose')
const Product = require('../models/Product')

require('../configs/database')

const queryWords = [
  'low carb',
  'no sugar drink',
  'nuts',
  'avocado',
  'keto mix',
  'paleo',
  'low carb snack',
  'paleo snack',
  'protein snack',
  'kombucha',
  'protein chips',
  'superfood protein',
  'protein bar',
  'hemp seeds',
  'protein based',
  'supplements',
  'muscle',
  'organic protein',
  'vegan drink',
  'organic drink',
  'healthy snack',
]

queryOnWords(queryWords)

function queryOnWords(queryInputs) {
  const max_carbs = 10
  let i = 0
  let allProducts = []
  queryInputs.forEach(query => {
    axios
      .get(
        `https://api.spoonacular.com/food/products/search?query=${query}&maxCarbs=${max_carbs}&apiKey=${process.env.SPOON_KEY}`
      )
      .then(res => {
        console.log('first word queried', res.data.products)
        i++
        allProducts.push(...res.data.products)
        // if we have all query responses
        if (i == queryInputs.length) {
          console.log('start query by id for all products', allProducts)
          queryById(allProducts)
        }
      })
  })
}

function queryById(foundProducts) {
  let productsToSeed = []
  foundProducts.forEach(product => {
    console.log(product)
    axios
      .get(
        `https://api.spoonacular.com/food/products/${product.id}?apiKey=${process.env.SPOON_KEY}`
      )
      .then(res => {
        const foundProduct = res.data
        productsToSeed.push(foundProduct)
        console.log('queried one product')
        if (productsToSeed.length === foundProducts.length) {
          console.log('start formatting', productsToSeed)
          formatResults(productsToSeed)
        }
      })
      .catch(err => {
        console.log(err, productsToSeed)
        throw new Error('stop this madness')
      })
  })
}

function formatResults(foundProducts) {
  let products_to_seed = []
  let non_empty_seeds
  foundProducts.forEach(product => {
    let seed_product = {
      name: product.title,
      description: product.generatedText,
      ingredients: product.ingredientList.split(';'),
      nutritional_value: {
        calories: product.nutrition.calories,
        fat: product.nutrition.fat,
        protein: product.nutrition.protein,
        carbs: product.nutrition.carbs,
      },
      category: product.breadcrumbs.includes('drink') ? 'drink' : 'food',
      tags: product.badges,
      picture_url: product.images[1] ? product.images[1] : product.images[0],
      price: product.price == 0 ? Math.floor(Math.random() * 6) : product.price,
      rating: Math.floor(Math.random() * 5),
      sales: Math.floor(Math.random() * 5),
    }
    products_to_seed.push(seed_product)
  })
  non_empty_seeds = products_to_seed.filter(
    value => JSON.stringify(value) !== '{}'
  )
  deleteAllThenInsertAll(non_empty_seeds)
}

async function deleteAllThenInsertAll(seeds) {
  await Product.deleteMany()
  await Product.insertMany(seeds)
  mongoose.disconnect()
  return console.log('database was fed')
}

function randomizeprice() {
  Product.find({}).then(products => {
    console.log(products)
    products.forEach(function(product) {
      Product.updateOne(
        { _id: product._id },
        { price: Math.floor(Math.random() * 6) }
      ).then(updt => {
        console.log(updt)
      })
    })
  })
}

randomizeprice()

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
