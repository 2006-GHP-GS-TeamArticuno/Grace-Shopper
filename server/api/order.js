const router = require('express').Router()
const {Order} = require('../db/models')
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

      const updatedOrder = await findOrder.update(req.body)

      res.json(updatedOrder)

  } catch (error) {
    next(error)
  }
})

