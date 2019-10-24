import axios from 'axios'

console.log(process.env.NODE_ENV)

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/product-management'
      : `http://${window.location.hostname}:5000/product-management`,

  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  getProducts() {
    return service
      .get('/products')
      .then(res => res.data)
      .catch(errHandler)
  },

  getOneProduct(productId) {
    return service
      .get(`/products/${productId}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  addProduct(body) {
    return service
      .post('/products', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  editProduct(body) {
    return service
      .put('/products', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  addPicture(file) {
    const formData = new FormData()
    formData.append('picture', file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },
}
