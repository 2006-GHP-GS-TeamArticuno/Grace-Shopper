const Sequelize = require('sequelize')
const db = require('../db')

const orderDetail = db.define('orderDetail', {
  productPrice: {
    type: Sequelize.INTEGER
  }
})

orderDetail.addProduct = async function(productId, orderId, productPrice) {
  await orderDetail.create(productId, orderId, productPrice)
}

module.exports = orderDetail
