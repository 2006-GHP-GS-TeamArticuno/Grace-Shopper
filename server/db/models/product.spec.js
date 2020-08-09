const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('column definitions and validations', () => {
    let babyShower

    beforeEach(async () => {
      babyShower = await Product.create({
        name: 'Baby Shower',
        price: 150,
        description: 'Everything you need to have unforgettable BS',
        imageUrl:
          'https://i.etsystatic.com/17991337/r/il/0a7d82/2092056744/il_570xN.2092056744_sesr.jpg',
        quantity: 100,
        inStock: true
      })
    })

    it('has a `name`, `price`, `description`, `imageUrl`, `quantity`, `inStock`', () => {
      expect(babyShower.name).to.equal('Puppaccino')
      expect(babyShower.price).to.equal(150)
      expect(babyShower.description).to.equal(
        'Everything you need to have unforgettable BS'
      )
      expect(babyShower.imageUrl).to.equal(
        'https://i.etsystatic.com/17991337/r/il/0a7d82/2092056744/il_570xN.2092056744_sesr.jpg'
      )
      expect(babyShower.quantity).to.equal(100)
      expect(babyShower.inStock).to.equal(true)
    })

    it('`name` is required', async () => {
      const birthdayParty = Product.build()
      try {
        await birthdayParty.validate()
        throw new Error('Validation should have failed!')
      } catch (err) {
        expect(err).to.be.an('error')
      }
    })
    it('`price` is required', async () => {
      const birthdayParty = Product.build()
      try {
        await birthdayParty.validate()
        throw new Error('Validation should have failed!')
      } catch (err) {
        expect(err).to.be.an('error')
      }
    })
    it('`description` is required', async () => {
      const birthdayParty = Product.build()
      try {
        await birthdayParty.validate()
        throw new Error('Validation should have failed!')
      } catch (err) {
        expect(err).to.be.an('error')
      }
    })
    it('`quantity` is required', async () => {
      const birthdayParty = Product.build()
      try {
        await birthdayParty.validate()
        throw new Error('Validation should have failed!')
      } catch (err) {
        expect(err).to.be.an('error')
      }
    })
  })
  describe('inStock', () => {
    let babyShower

    beforeEach(async () => {
      babyShower = await Product.create({
        name: 'Baby Shower',
        price: 150,
        description: 'Everything you need to have unforgettable BS',
        imageUrl:
          'https://i.etsystatic.com/17991337/r/il/0a7d82/2092056744/il_570xN.2092056744_sesr.jpg',
        quantity: 100,
        inStock: true
      })
    })
    // is it right?
    it('returns true if the product is in stock', () => {
      expect(babyShower.inStock()).to.be.equal(true)
    })
  })
})
