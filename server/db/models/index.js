const User = require('./user')
const Item = require('./item')
const Product = require('./product')
// const Cart = require('./cart')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
// User.hasOne(Cart);
// Cart.belongsTo(User);

// Cart.hasMany(Package);
// Package.belongsToMany(Cart, { through: 'orderDetail' });
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Item,
  Product
}
