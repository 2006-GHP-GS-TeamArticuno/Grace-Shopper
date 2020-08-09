const router = require('express').Router()
// const {Order, orderDetail, Product} = require('../db/models')
module.exports = router
router.get('/checkout', async (req, res, next) => {
  try {
    res.send('Checked out')
  } catch (error) {
    next(error)
  }
})
