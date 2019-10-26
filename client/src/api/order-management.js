import axios from 'axios'

console.log(process.env.NODE_ENV)

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/order-management'
      : `http://${window.location.hostname}:5000/order-management`,

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

  getOrder(type) {
    return service
      .get(`/orders/${type}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  getOneOrder(orderId) {
    return service
      .get(`/orders/${orderId}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  addOrder(body) {
    return service
      .post('/orders', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  editOrder(body) {
    return service
      .put(`/orders/${orderId}`, body)
      .then(res => res.data)
      .catch(errHandler)
  },

  deleteOrder(body) {
    return service
      .delete(`/orders/${orderId}`, body)
      .then(res => res.data)
      .catch(errHandler)
  },
}
