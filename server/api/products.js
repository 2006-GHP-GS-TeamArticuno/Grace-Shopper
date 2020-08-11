const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

const isAdminMiddleware = (req, res, next) => {
  if (!req.user.isAdmin) {
    const error = new Error('You are not an admin')
    error.status = 401
    next(error)
  } else {
    next()
  }
}

//get all Products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    if (allProducts) res.json(allProducts)
    else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

//get single Product by id include items
router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findOne({
      where: {id: req.params.id}
    })
    res.json(singleProduct)
  } catch (error) {
    next(error)
  }
})

//delete single Product -- admin view only
router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    if (req.user) await Product.destroy({where: {id: req.params.id}})
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

//put/update single Product -- admin view only
router.put('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const selectedProduct = await Product.findOne({
      where: {id: req.params.id}
    })
    if (selectedProduct) {
      const updated = await selectedProduct.update(req.body)
      res.json(updated)
    } else {
      res.status(404).send('Product not found')
    }
  } catch (error) {
    next(error)
  }
})

//post/add single Product -- admin view only

router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
})
