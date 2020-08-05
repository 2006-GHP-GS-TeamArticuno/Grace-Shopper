'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Product} = require('../server/db/models')
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'Pug'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      firstName: 'Murphy',
      lastName: 'Doe'
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Baby Shower',
      price: 110,
      description: 'BS',
      imageUrl:
        'https://i.pinimg.com/originals/4e/aa/0c/4eaa0cb5ffd0ca26fa938493c264a1d8.jpg',
      quantity: 1000
    }),
    Product.create({
      name: 'Birthday Party',
      price: 110,
      description: 'BP',
      imageUrl:
        'https://www.sgvtribune.com/wp-content/uploads/2019/03/iStock-999985068-1.jpg',
      quantity: 1000
    })
    // Product.create({name: '', price: 110, description: '', imageUrl: '', quantity: 1000 }),
    // Product.create({name: '', price: 110, description: '', imageUrl: '', quantity: 1000 }),
    // Product.create({name: '', price: 110, description: '', imageUrl: '', quantity: 1000 }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
