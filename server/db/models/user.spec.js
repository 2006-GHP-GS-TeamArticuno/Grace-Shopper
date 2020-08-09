/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
  describe('column definitions and validations', () => {
    it('has a `firstName`, `lastName`, `email` and `isAdmin`', async () => {
      const user = await User.create({
        firstName: 'Cody',
        lastName: 'Pug',
        email: 'cody@email.com',
        isAdmin: false
      })

      expect(user.firstName).to.equal('Cody')
      expect(user.lastName).to.equal('Pug')
      expect(user.email).to.equal('cody@email.com')
      expect(user.isAdmin).to.equal(false)
    })

    it('`fistName` is required', () => {
      const user = User.build()
      return user.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })

    it('`lastName` is required', () => {
      const user = User.build()
      return user.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })
    it('`isAdmin` has a default value of false', async () => {
      const user = await User.create({firstName: 'Cody'})
      expect(user.isAdmin).to.equal(false)
    })
  })
}) // end describe('User model')
