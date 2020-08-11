const router = require('express').Router()
const {User} = require('../db/models')
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

router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
})
router.get('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const userById = await User.findByPk(req.params.id)
    res.json(userById)
  } catch (error) {
    next(error)
  }
})
router.put('/:id/admin', isAdminMiddleware, async (req, res, next) => {
  try {
    const userById = await User.findByPk(req.params.id)
    const updatedUser = await userById.update({isAdmin: true})
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})
router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const userById = await User.findByPk(req.params.id)
    userById.destroy()
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})
