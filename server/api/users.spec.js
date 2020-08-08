/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
    it('GET /api/users/:id', async () => {
      const res = await request(app)
        .get('/api/users/1')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.firstName).to.be.equal('Cody')
      expect(res.body.lastName).to.be.equal('Pug')
    })
    it('POST /api/users/', async () => {
      const res = await request(app)
        .post('/api/users/')
        .send({
          firstName: 'Dean',
          lastName: 'Winchester',
          email: 'dean.win@mail.ru'
        })
        .expect(201)
      const createdUser = await User.findByPk(res.body.id)
      expect(createdUser.firstName).to.be.equal('Dean')
      expect(createdUser.lastName).to.be.equal('Winchester')
      expect(createdUser.email).to.be.equal('dean.win@mail.ru')
    })

    it('PUT /users/:id', async () => {
      const res = await request(app)
        .put(`/api/users/1`)
        .send({
          firstName: 'Sam',
          lastName: 'Winchester',
          email: 'sam.erf@namd.com'
        })
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.equal('Sam')
          expect(res.body.lastName).to.equal('Winchester')
          expect(res.body.email).to.equal('sam.erf@namd.com')
        })

      const codyFromDatabase = await User.findByPk(res.body.id)
      expect(codyFromDatabase.email).to.equal('sam.erf@namd.com')
    })
    it('DELETE /users/:id', async () => {
      const res = await request(app)
        .delete('/api/users/1') // Oh noes! Bye, Sam!
        .expect(204)

      const isSamStillThere = await User.findByPk(res.body.id)
      expect(isSamStillThere).to.equal(null)
    })
    it('sends a 404 if not found', () => {
      return request(app)
        .delete(`/api/users/1`)
        .expect(404)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
