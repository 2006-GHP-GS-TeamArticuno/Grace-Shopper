const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://www.partiesbymartins.com/image/cache/data/Floral/Balloons-600x600.jpg'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Item
