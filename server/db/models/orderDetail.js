const Sequelize = require('sequelize')
const db = require('../db')

const orderDetail = db.define('orderDetail', {
  productPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = orderDetail
