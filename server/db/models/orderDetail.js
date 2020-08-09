const Sequelize = require('sequelize')
const db = require('../db')

const orderDetail = db.define('orderDetail', {
  //why do we need define id like that?
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productPrice: {
    type: Sequelize.INTEGER
  }
})

orderDetail.addProduct = async function(productId, orderId, productPrice) {
  await orderDetail.create(productId, orderId, productPrice)
}

module.exports = orderDetail
