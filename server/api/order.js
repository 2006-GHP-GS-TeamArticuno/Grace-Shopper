const router = require('express').Router()
const {Order,orderDetail} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const findOrder = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        isPurchased: false
      }
    })

    if (findOrder) res.json(findOrder)

  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
      const findOrder = await Order.findOne({
        where:{
          userId: req.user.id,
          isPurchased: false
        }
      })

        if(req.body.productId){
          const {productId, orderId, productPrice} = req.body
          const updatedOrder = findOrder.increase(productPrice)
          orderDetail.addProduct(productId, orderId, productPrice)
          res.json(updatedOrder)
        }

      }
   catch (error) {
    next(error)
  }
})

router.delete('/', async (req, res, next)=>{
  try {
     await orderDetail.destroy({
      where: {
        productId: req.body.productId
      }
    })
    res.send('deleted')
  } catch (error) {
    console.error(error)
  }
})

