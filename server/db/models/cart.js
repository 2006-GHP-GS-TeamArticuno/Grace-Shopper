const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
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
    type: Sequelize.INTEGER
  }
})

module.exports = Cart
