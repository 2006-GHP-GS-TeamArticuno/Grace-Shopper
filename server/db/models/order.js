const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATEONLY
  },
  orderNumber: {
    type: Sequelize.INTEGER
  },
  totalQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  orderTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

//increase qty
Order.increase = function(productPrice) {
  totalQuantity++
  orderTotal += productPrice
}

module.exports = Order
