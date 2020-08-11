const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const orderDetail = require('./orderDetail')

User.hasMany(Order)
Order.belongsTo(User)

Product.belongsToMany(Order, {
  through: {
    model: 'orderDetail',
    as: 'productId',
    unique: false
  }
})
Order.belongsToMany(Product, {
  through: {
    model: 'orderDetail',
    as: 'orderId',
    unique: false
  }
})

module.exports = {
  User,
  Product,
  Order,
  orderDetail
}
