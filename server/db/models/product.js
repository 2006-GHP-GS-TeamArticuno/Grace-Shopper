const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
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
  },
  inStock: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

//is this right? Or before Validate?
Product.beforeUpdate(function({quantity, inStock}) {
  if (quantity > 0) {
    inStock = true
    //Anna: maybe this.inStock = true   ???
  } else {
    inStock = false
    //Anna: maybe this.inStock =false   ???
  }
})

// not firing, use components instead
// Product.beforeSave( product => {
//   product.price = product.price*100
// })

module.exports = Product
