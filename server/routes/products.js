const express = require('express')
const router = express.Router()
const uploader = require('../configs/cloudinary')
const Product = require('../models/Product')
// this gives us the multer middleware we
// can then use to create a req.file

// get all the products
router.get('/products/:category', (req, res, next) => {
  console.log('here')
  const category = req.params.category.replace('s', '')
  Product.find({ category })
    .then(foundProducts => res.json(foundProducts))
    .catch(err => console.log(err))
})

// get all favourite products
router.get('/favourite_products/:productids', (req, res, next) => {
  const ids_to_find = req.params.productids.split('_')
  console.log(ids_to_find, 'fhfhfh')
  Product.find({
    _id: { $in: ids_to_find },
  })
    .then(favouriteProducts => {
      console.log('found products', res)
      res.send(favouriteProducts)
    })
    .catch(err => {
      console.log('error getting favourites', err)
    })
})

// get a single product
router.get('/products/:productId', (req, res, next) => {
  console.log('here')
  res.json({ msg: 'helloooooo' })
})

// delete a single product
router.delete('/products/:productId', (req, res, next) => {
  if (
    req.user.username === 'admin' &&
    req.user.email === 'admin@keto-shop.com'
  ) {
    // allowed to delete
  } else {
    // forbidden status if not the admin
    res.status(403)
  }
})

// add a single product
router.post(
  '/products/:productId',
  uploader.single('picture'),
  // this specifies fieldname multer should find file in
  (req, res, next) => {
    if (
      req.user.username === 'admin' &&
      req.user.email === 'admin@keto-shop.com'
    ) {
      let productInfo = req.body
      req.file.url
        ? (productInfo.picture_url = req.file.url)
        : (productInfo.picture_url =
            'https://res.cloudinary.com/dri8yyakb/image/upload/v1571918378/keto_shop_products/default_product_kjqes7.jpg')
      addProduct(productInfo)
        .then(createdProduct => {
          res.json(createdProduct)
        })
        .catch(err => {
          console.log(err, 'error creating product')
        })
    } else {
      res.status(403).json({ message: 'access forbidden admin only' })
    }
  }
)

// modify a single product
router.put(
  '/products/:productId',
  uploader.single('picture'),
  (req, res, next) => {
    if (
      req.user.username === 'admin' &&
      req.user.email === 'admin@keto-shop.com'
    ) {
      // allowed to add
      let changes = req.body
      req.file.url ? (changes.picture_url = req.file.url) : null
      editProduct(req.params.productId, changes)
        .then(updatedProduct => {
          res.json(createdProduct)
        })
        .catch(err => console.log(err))
    } else {
      res.status(403).json({ message: 'access forbidden admin only' })
    }
  }
)

module.exports = router

async function editProduct(productId, changes) {
  console.log('product', id, 'will be modified')
  const updatedProduct = await Product.findByIdAndUpdate(productId, changes, {
    new: true,
  })
  return updatedProduct
}

async function addProduct(productInfo) {
  const createdProduct = await Product.create(productInfo)
  return createdProduct
}
