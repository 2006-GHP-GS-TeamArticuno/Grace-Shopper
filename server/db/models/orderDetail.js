const Sequelize = require('sequelize')
const db = require('../db')

const orderDetail = db.define('orderDetail', {
  //we have to define id as primary key because in a through table, if you don't define a primary key, the foreign keys (all of them) become primary keys and then they MUST be unique and can't be repeated more than once in the table
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productPrice: {
    type: Sequelize.INTEGER
  },
  //this is what we need to send back up to the frontend in the cart
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

orderDetail.addProduct = async function(productId, orderId, productPrice) {
  await orderDetail.create(productId, orderId, productPrice)
}

module.exports = orderDetail
