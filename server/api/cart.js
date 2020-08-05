const router = require('express').Router()
const {Cart, orderDetail} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const findCart = await Cart.findAll({
      where: {
        userId: req.user.id,
        include: {model: orderDetail, where: {isPurchased: false}}
      }
    })
    if (findCart) res.json(findCart)
    else {
      //will this redirect to cart/:id?
      const newCart = Cart.create()
      res.json(newCart)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {})
//belongs to --
//we can't delete the cart
//we need the ability to create a new cart that the user can have
//cart belongs to User
//User has many cart
//frontend only show cart that is not purchased
//user can have many carts
//some of them are purchased and 1 of them is not
