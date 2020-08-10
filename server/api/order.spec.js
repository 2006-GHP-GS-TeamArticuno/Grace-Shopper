const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Order = db.model('Order')
const orderDetail = db.model('orderDetail')
const Product = db.model('productDetail')

describe('Order routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/cart', () => {
    beforeEach(() => {
      return Order.create(
        {
          userId: 1,
          isPurchased: 'false'
        },
        {
          userId: 1,
          isPurchased: 'true'
        },
        {
          userId: 1,
          isPurchased: 'false'
        },
        {
          userId: 2,
          isPurchased: 'false'
        },
        {
          userId: 2,
          isPurchased: 'true'
        },
        {
          userId: 3,
          isPurchased: 'false'
        }
      )
    })

    it('GET /api/cart', async () => {
      const res = await request(app)
      req.user.id = (1).get('/api/cart').expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(2)

      const newOrderDetail = {
        productId: 10,
        orderId: 5,
        productPrice: 110
      }
      it('POST /api/cart', async () => {
        const res = await request(app)
          .post('/api/cart', newOrderDetail)
          .expect(200)

        expect(res.body).to.be.an('object')
        expect(res.body.orderId).to.be.equal(5)
        expect(res.body.productId).to.be.equal(10)
      })
    })
  })
})

describe(`/api/cart/delete/${id}`, () => {
  beforeEach(() => {
    return orderDetail.create(
      {
        id: 2,
        productId: 8,
        productPrice: 115,
        orderId: 2
      },
      {
        id: 3,
        productId: 8,
        productPrice: 115,
        orderId: 2
      },
      {
        id: 4,
        productId: 8,
        productPrice: 115,
        orderId: 2
      },
      {
        id: 5,
        productId: 7,
        productPrice: 888,
        orderId: 2
      },
      {
        id: 6,
        productId: 9,
        productPrice: 346,
        orderId: 2
      }
    )
  })

  it('deletes all of one product inside of a certain order', async () => {
    const res = await request(app)
      .delete(`/api/cart/delete/${8}`)
      .expect(201)
    expect(orderDetail.length).to.be.equal(2)
  })
})
describe(`/api/cart/decrease/${id}`, () => {
  beforeEach(() => {
    return orderDetail.create(
      {
        id: 2,
        productId: 8,
        productPrice: 115,
        orderId: 2
      },
      {
        id: 3,
        productId: 8,
        productPrice: 115,
        orderId: 2
      },
      {
        id: 4,
        productId: 8,
        productPrice: 115,
        orderId: 2
      },
      {
        id: 5,
        productId: 7,
        productPrice: 888,
        orderId: 2
      },
      {
        id: 6,
        productId: 9,
        productPrice: 346,
        orderId: 2
      }
    )
  })

  it('decreases the amount of a certian product inside of a certain order', async () => {
    const res = await request(app)
      .delete(`/api/cart/decrease/${8}`)
      .expect(201)
    expect(orderDetail.length).to.be.equal(4)
  })
})
