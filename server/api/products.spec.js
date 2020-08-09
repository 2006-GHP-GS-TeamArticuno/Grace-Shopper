const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products', () => {
    beforeEach(() => {
      return Product.create({
        name: 'Baby Shower',
        price: 150,
        description: 'Everything you need to have unforgettable BS',
        imageUrl:
          'https://i.etsystatic.com/17991337/r/il/0a7d82/2092056744/il_570xN.2092056744_sesr.jpg',
        quantity: 100,
        inStock: true
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Baby Shower')
    })
  })
})
