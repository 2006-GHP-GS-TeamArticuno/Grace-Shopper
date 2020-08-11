const router = require('express').Router()
const {Order, orderDetail, Product} = require('../db/models')
module.exports = router

//this get route gets the cart
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
      console.log(req.session.id)
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

//this put route is updating 'isPurchased' and is run when you click the checkout button
router.put('/', async (req, res, next) => {
  try {
    if (req.user) {
      const findOrder = await Order.findOne({
        where: {
          userId: req.user.id,
          isPurchased: false
        }
      })
      findOrder.update(req.body)
      res.send('thanks for your purchase!')
    } else if (!req.user) {
      const findOrder = await Order.findOne({
        where: {
          sessionId: req.session.id,
          isPurchased: false
        }
      })
      findOrder.update(req.body)
      res.send('thanks for your purchase!')
    }
  } catch (error) {
    next(error)
  }
})

//this get route gets the quantity of a certain product
router.get('/quantity/:productId', async (req, res, next) => {
  try {
    const findOrders = await orderDetail.findAll({
      where: {
        productId: req.params.productId
      }
    })
    //we are sending up a number in the database
    if (findOrders) res.json(findOrders.length)
    else res.send('You have not added any items to your cart yet!')
  } catch (error) {
    next(error)
  }
})

///ROUTE to ADD a product to the cart
router.post('/', async (req, res, next) => {
  try {
    if (!req.user) {
      const [findOrder, created] = await Order.findOrCreate({
        where: {
          sessionId: req.session.id,
          userId: null,
          isPurchased: false
        },
        include: {model: Product}
      })
      const orderId = findOrder.id
      const productId = req.body.productId
      const productPrice = req.body.productPrice
      await orderDetail.create({productId, productPrice, orderId})
      res.json(findOrder)
    } else {
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
      await orderDetail.create({productId, productPrice, orderId})
      res.json(findOrder)
    }
  } catch (error) {
    next(error)
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
