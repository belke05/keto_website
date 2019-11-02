const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')
// node does not know how to process data
// multer will allow us to process form data
// multer allows form data to be available and creates
// a req.file object

cloudinary.({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'keto_shop_products',
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, cb) => {
    cb(null, file.originalname) // The file on cloudinary would have the same name as the original file name
  },
})

const uploader = multer({ storage })
// this is a middleware we will be able to use
// on routes that will receive an image
module.exports = uploader
