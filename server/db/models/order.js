const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  sessionId: {
    type: Sequelize.TEXT
  }
})

module.exports = Order
