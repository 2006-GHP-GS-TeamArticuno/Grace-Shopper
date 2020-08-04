const Sequelize = require('sequelize')
const db = require('../db')

const orderDetail = db.define('orderDetail', {
  orderProductTotal:{
    type: Sequelize.INTEGER
  },

  isPurchased:{
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }

})


module.exports = orderDetail
