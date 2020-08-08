const router = require('express').Router()
const {Order, orderDetail, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
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
    else res.send('You have not added any items to your cart yet!')
  } catch (error) {
    next(error)
  }
})

///ROUTE to ADD a product to the cart
router.post('/', async (req, res, next) => {
  try {
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

    orderDetail.create({productId, productPrice, orderId})
    res.json(findOrder)
  } catch (error) {
    next(error)
  }
})

//this delete route deletes all of a certain product inside the cart
router.delete('/:productId', async (req, res, next) => {
  console.log('WHAT IS REQ.BODY', req.body)
  console.log('WHAT IS REQ.PARAMS', req.params)
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
