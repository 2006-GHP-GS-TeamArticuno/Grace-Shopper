const router = require('express').Router()
const {Order, orderDetail, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const findOrder = await Order.findAll({
        where: {
          userId: req.user.id,
          isPurchased: false
        },
        include: {
          model: Product
        }
      })
      if (findOrder) res.json(findOrder)
    } else if (!req.user) {
      const findOrder = await Order.findAll({
        where: {
          sessionId: req.session.id,
          isPurchased: false
        },
        include: {
          model: Product
        }
      })
      if (findOrder) res.json(findOrder)
    } else res.send('You have not added any items to your cart yet!')
  } catch (error) {
    next(error)
  }
})

router.get('/quantity/:productId', async (req, res, next) => {
  try {
    const findOrderRow = await Order.findOne({
      where: {
        userId: req.user.id,
        isPurchased: false
      }
    })
    const findOrders = await orderDetail.findAll({
      where: {
        productId: req.params.productId,
        orderId: findOrderRow.id
      }
    })

    if (findOrders) res.json(findOrders.length)
    else res.send('You have not added any items to your cart yet!')
  } catch (error) {
    next(error)
  }
})

///ROUTE to ADD a product to the cart
// router.post('/', async (req, res, next) => {
//   try {
//     if (!req.user) {
//       const [findOrder, created] = await Order.findOrCreate({
//         where: {
//           sessionId: req.session.id,
//           userId: null,
//           isPurchased: false
//         },
//         include: {model: Product}
//       })
//       const orderId = findOrder.id
//       const productId = req.body.productId
//       const productPrice = req.body.productPrice
//       await orderDetail.create({productId, productPrice, orderId})
//       res.json(findOrder)
//     } else {
//       const [findOrder, created] = await Order.findOrCreate({
//         where: {
//           userId: req.user.id,
//           isPurchased: false
//         },
//         include: {model: Product}
//       })
//       const orderId = findOrder.id
//       const productId = req.body.productId
//       const productPrice = req.body.productPrice
//       await orderDetail.create({productId, productPrice, orderId})
//       res.json(findOrder)
//     }
//   } catch (error) {
//     next(error)
//   }
// })
router.put('/:productId', async (req, res, next) => {
  try {
    // const allOrderDetails = await orderDetail.findAll({where:{productId:req.params.productId})

    const [findOrder, created] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        isPurchased: false
      },
      include: {model: Product}
    })
    const orderId = findOrder.id
    const productId = req.body.productId
    const productPrice = req.body.productPrice
    const neededOrder = await orderDetail.findOne({
      where: {
        orderId: orderId,
        productId: req.params.productId
        // productPrice: productPrice
      }
    })
    if (!neededOrder) {
      const orderId = findOrder.id
      const productId = req.body.productId
      const productPrice = req.body.productPrice

      const newOrderDetail = await orderDetail.create({
        productId,
        productPrice,
        orderId
      })
      res.json(newOrderDetail)
    } else {
      const quantity = req.body.quantity
      const updatedOrder = await neededOrder.update(quantity)
      res.json(updatedOrder)
    }
  } catch (error) {
    console.error(error)
  }
})
//this delete route deletes all of a certain product inside the cart
router.delete('/delete/:productId', async (req, res, next) => {
  try {
    await orderDetail.destroy({
      where: {
        productId: req.params.productId
      }
    })
    res.send('deleted')
  } catch (error) {
    console.error(error)
  }
})

//this delete route decreases the amount of a product inside the cart
router.delete('/decrease/:productId', async (req, res, next) => {
  try {
    const oneProduct = await orderDetail.findOne({
      where: {
        productId: req.params.productId
      }
    })
    await oneProduct.destroy()

    res.send('deleted')
  } catch (error) {
    console.error(error)
  }
})
