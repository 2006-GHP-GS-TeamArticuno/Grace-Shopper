const Sequelize = require('sequelize')
const db = require('../db')

const orderDetail = db.define('orderDetail', {
  productPrice: {
    type: Sequelize.INTEGER
  }
})

orderDetail.addProduct = function (productId, orderId, productPrice) {
  orderDetail.create(productId, orderId, productPrice)
}

module.exports = orderDetail
