const router = require('express').Router()
const {Product, Item} = require('../db/models')
module.exports = router

//get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {inStock: true}
    })
    if (products) res.json(products)
    else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

//get single package by id include items
router.get('/:id', async (req, res, next) => {
  try {
    const singlePackage = await Product.findOne({
      where: {id: req.params.id},
      include: {model: Item}
    })
    res.json(singlePackage)
  } catch (error) {
    next(error)
  }
})

//delete single package -- admin view only
router.delete(
  '/:id', //add function here to check admin status
  async (req, res, next) => {
    try {
      await Product.destroy({where: {id: req.params.id}})
      res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  }
)

//put/update single package -- admin view only
router.put(
  '/:id', //add function here to check admin status
  async (req, res, next) => {
    try {
      const selectedPackage = await Product.findOne({
        where: {id: req.params.id}
      })
      if (selectedPackage) {
        const updated = await Product.update(req.body)
        res.json(updated)
      } else {
        res.status(404).send('package not found')
      }
    } catch (error) {
      next(error)
    }
  }
)

//post/add single package -- admin view only

router.post(
  '/', //add function here to check admin status
  async (req, res, next) => {
    try {
      const newPackage = await Product.create(req.body)
      res.json(newPackage)
    } catch (error) {
      next(error)
    }
  }
)
