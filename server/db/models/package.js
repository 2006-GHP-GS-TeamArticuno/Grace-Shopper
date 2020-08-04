const Sequelize = require('sequelize')
const db = require('../db')

const Package = db.define('package', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://i.etsystatic.com/17991337/r/il/0a7d82/2092056744/il_570xN.2092056744_sesr.jpg'
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

Package.prototype.inStock = () => {
  if (Package.quantity > 0) {
    return true
  } else {
    return false
  }
}

module.exports = Package
