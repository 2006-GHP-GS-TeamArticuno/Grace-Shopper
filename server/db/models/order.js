const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order',{
  date: {
    type: Sequelize.DATEONLY
  },
  orderNumber: {
    type: Sequelize.INTEGER
  },
  totalQuantity: {
    type: Sequelize.INTEGER
  },
  orderTotal: {
    type: Sequelize.INTEGER
  },
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }

})

module.exports = Order
