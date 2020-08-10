// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const Product = db.model('product')

// describe('Product routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/products', () => {
//     beforeEach(() => {
//       return Product.create({
//         name: 'Baby Shower',
//         price: 150,
//         description: 'Everything you need to have unforgettable BS',
//         imageUrl:
//           'https://i.etsystatic.com/17991337/r/il/0a7d82/2092056744/il_570xN.2092056744_sesr.jpg',
//         quantity: 100,
//         inStock: true
//       })
//     })

//     it('GET /api/products', async () => {
//       const res = await request(app)
//         .get('/api/products')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].name).to.be.equal('Baby Shower')
//     })
//   })
// })
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
    it('GET /api/products responds with all products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)
      expect(res.body).to.be.an('array')
      expect(res.body.name).to.be.equal('Baby Shower')
      expect(res.body.price).to.be.equal(150)
    })
    it('GET /api/products/:id responds with specific product', async () => {
      const res = await request(app)
        .get('/api/products/1')
        .expect(200)
      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal('Baby Shower')
      expect(res.body.price).to.be.equal(150)
    })
    it('POST /api/products creates a new product and sends back the new product', async () => {
      const res = await request(app)
        .post('/api/products')
        .send({
          name: 'Remote Baby Shower',
          price: 110,
          description:
            'The world may be changing, but babies are still being born and we are here for it!',
          imageUrl:
            'https://image.freepik.com/free-photo/flat-lay-essentials-baby-shower_23-2148430452.jpg',
          quantity: 1000
        })
        .expect(201)
      const createdProduct = await Product.findByPk(res.body.id)
      expect(createdProduct.name).to.be.equal('Remote Baby Shower')
      expect(createdProduct.price).to.be.equal(110)
      expect(createdProduct.description).to.be.equal(
        'The world may be changing, but babies are still being born and we are here for it!'
      )
    })
    it('PUT /api/products/:id updates an existing product', async () => {
      const res = await request(app)
        .put(`/api/products/1`)
        .send({
          quantity: 100
        })
        .expect(200)
      expect(res.body).to.be.an('object')
      expect(res.body.quantity).to.equal(100)
      const productFromDatabase = await Product.findByPk(res.body.id)
      expect(productFromDatabase.quantity).to.equal(100)
    })
    it('DELETE /api/products/:id removes a product from the database', async () => {
      const res = await request(app)
        .delete('/api/products/1')
        .expect(204)
      const isBabyShowerInDB = await Product.findByPk(res.body.id)
      expect(isBabyShowerInDB).to.equal(null)
    })
    it('sends a 404 if not found', () => {
      return request(app)
        .delete(`/api/products/1`)
        .expect(404)
    })
  })
})
