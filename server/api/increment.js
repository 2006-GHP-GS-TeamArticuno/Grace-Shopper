const routerIncrement = require('express').Router()
const {Order, orderDetail, Product} = require('../db/models')
module.exports = routerIncrement

// routerIncrement.get('/quantity/:productId', async (req, res, next) => {
//   try {
//     const findOrders = await orderDetail.findAll({
//       where: {
//         productId: req.params.productId
//       }
//     })

//     if (findOrders) res.json(findOrders.length)
//     else res.send('You have not added any items to your cart yet!')
//   } catch (error) {
//     next(error)
//   }
// })
