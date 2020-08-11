'use strict'

const db = require('../server/db')
const {Order, User, Product, orderDetail} = require('../server/db/models')
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const userData = [
    {
      email: 'cody@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'Pug',
      isAdmin: true
    },
    {
      email: 'murphy@email.com',
      password: '123',
      firstName: 'Murphy',
      lastName: 'Doe'
    },
    {
      email: 'khorley4@pinterest.com',
      password: 'ghd4MhtErzZ',
      firstName: 'Karney',
      lastName: 'Horley'
    },
    {
      email: 'hborthram5@umn.edu',
      password: 'G6NW1ZcHe2K',
      firstName: 'Hilary',
      lastName: 'Borthram'
    },
    {
      email: 'jmauger6@usnews.com',
      password: 'jD1UOELG9',
      firstName: 'Jackson',
      lastName: 'Mauger'
    },
    {
      email: 'aedgehill7@cocolog-nifty.com',
      password: 'BUso8per',
      firstName: 'Atlante',
      lastName: 'Edgehill'
    },
    {
      email: 'kmotto8@chronoengine.com',
      password: '0QTZdYRFEC21',
      firstName: 'Kamilah',
      lastName: 'Motto'
    },
    {
      email: 'cradborne9@icio.us',
      password: 'RIUO3qbi',
      firstName: 'Cos',
      lastName: 'Radborne'
    },
    {
      email: 'gwilkinsona@dailymail.co.uk',
      password: 'QGCNSiihR3',
      firstName: 'Gabriel',
      lastName: 'Wilkinson'
    },
    {
      email: 'cgrealyb@google.fr',
      password: 'L5vNtg',
      firstName: 'Clayborn',
      lastName: 'Grealy'
    },
    {
      email: 'jbleasc@webs.com',
      password: 'rHpFptO',
      firstName: 'Janos',
      lastName: 'Bleas'
    },
    {
      email: 'lsciacovellid@census.gov',
      password: 'Cf3XXY8B2y',
      firstName: 'Leonore',
      lastName: 'Sciacovelli'
    },
    {
      email: 'ssamse@e-recht24.de',
      password: 'd3kns0B718',
      firstName: 'Salaidh',
      lastName: 'Sams'
    }
  ]

  const users = await Promise.all([User.bulkCreate(userData, {validate: true})])

  const orderData = [
    {
      isPurchased: false,
      userId: 1
    },
    {
      isPurchased: true,
      userId: 5
    },
    {
      isPurchased: true,
      userId: 5
    },
    {
      isPurchased: false,
      userId: 3
    },
    {
      isPurchased: true,
      userId: 11
    },
    {
      isPurchased: false,
      userId: 11
    },
    {
      isPurchased: true,
      userId: 2
    },
    {
      isPurchased: true,
      userId: 8
    },
    {
      isPurchased: false,
      userId: 7
    },
    {
      isPurchased: true,
      userId: 11
    },
    {
      isPurchased: true,
      userId: 1
    },
    {
      isPurchased: true,
      userId: 1
    },
    {
      isPurchased: false,
      userId: 5
    },
    {
      isPurchased: true,
      userId: 13
    },
    {
      isPurchased: true,
      userId: 5
    },
    {
      isPurchased: false,
      userId: 8
    },
    {
      isPurchased: true,
      userId: 8
    },
    {
      isPurchased: false,
      userId: 13
    },
    {
      isPurchased: true,
      userId: 1
    },
    {
      isPurchased: true,
      userId: 5
    },
    {
      isPurchased: false,
      userId: 2
    },
    {
      isPurchased: true,
      userId: 13
    },
    {
      isPurchased: true,
      userId: 13
    },
    {
      isPurchased: true,
      userId: 10
    },
    {
      isPurchased: true,
      userId: 12
    },
    {
      isPurchased: true,
      userId: 8
    },
    {
      isPurchased: true,
      userId: 11
    },
    {
      isPurchased: true,
      userId: 7
    },
    {
      isPurchased: true,
      userId: 2
    },
    {
      isPurchased: true,
      userId: 6
    }
  ]

  const orders = await Promise.all([
    Order.bulkCreate(orderData, {validate: true})
  ])

  const productData = [
    {
      name: 'Virtual Birthday Bash',
      price: 11000,
      description:
        'Birthdays are not cancelled. Stay safe, and still celebrate with all your friends! Our Birthday package includes drinks, food, virtual backgrounds, decor, and games to enjoy with friends and family',
      imageUrl:
        'https://i.pinimg.com/originals/04/32/a9/0432a9bb42dbf1755028db7b70c9ef97.jpg',
      quantity: 1000
    },
    {
      name: 'Remote Baby Shower',
      price: 11000,
      description:
        'The world may be changing, but babies are still being born and we are here for it! But, maybe without the baby food guessing game. Our Baby Shower package includes non-alcoholic drinks, snacks, virtual backgrounds, cute gender (or gender neutral!) decor so all you have to do is receive the gifts on your registry!',
      imageUrl:
        'https://image.freepik.com/free-photo/flat-lay-essentials-baby-shower_23-2148430452.jpg',
      quantity: 1000
    },
    {
      name: 'Cyber Graduation Celebration',
      price: 7600,
      description:
        'The class of 2020 has been through a lot. Celebrate their accomplishments with our Graduation package. Includes themed cap and gown, a cake with their face on it, and all the tools you need to make an embarrassing virtual slideshow to celebrate how far your new grad has come',
      imageUrl:
        'https://image.freepik.com/free-photo/flat-lay-festive-graduation-arrangement-with-diploma_23-2148505221.jpg',
      quantity: 56,
      inStock: true
    },
    {
      name: 'Distanced Wedding',
      price: 15000,
      description:
        'A Wedding package so cute, it makes not getting your deposits back *almost* bearable. Your guests can have a customized video background, a favor, and some confetti, while you celebrate with your loved one, a mini cake for two, and personalized decor',
      imageUrl:
        'https://cdn0.weddingwire.com/articles/images/1/2/8/3/img_3821/2-script-me-pretty-kaity-brawley-wedding-flat-lay.jpg',
      quantity: 23,
      inStock: false
    },
    {
      name: 'Bachelorette From Afar',
      price: 24200,
      description:
        'Drink and be merry with your friends, from the comfort and safety of your respective living rooms. These are weird times. But you can still make the most of them with our fun, slightly inappropriate, slightly embarrassing games, backgrounds, and decor for your virtual Bachelorette party',
      imageUrl:
        'https://www.theknotnews.com/wp-content/uploads/2019/07/LEAD-Amazon-Prime-Day-Bachelorette.jpg',
      quantity: 83,
      inStock: true
    },
    {
      name: 'Cocktail Date Night At Home',
      price: 19400,
      description:
        'Avoiding a crowded bar during a pandemic is probably a good idea. Our Cocktail Date Night package has everything you need to make delicious cocktails together, remotely.',
      imageUrl:
        'https://images.unsplash.com/photo-1530042133068-0296a09adf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      quantity: 6,
      inStock: false
    },
    {
      name: 'Family Reunion From The Couch',
      price: 17500,
      description:
        "Hang out with your grandma virtually! Host a family get-together via video chat. We've got all the supplies you need to make it a memorable party with fun and memories. Plus, a virtual talking feature is provided to mute all other attendees when someone is speaking, so your aunties might stop interrupting everyone else!",
      imageUrl:
        'https://cdn140.picsart.com/294079588036201.jpg?type=webp&to=min&r=640',
      quantity: 73,
      inStock: false
    },
    {
      name: 'DIY Distanced Olympics',
      price: 17400,
      description:
        'We were bummed the Olympics were called off: they make election years a little less stressful. But you can still have your own "Olympic" competition in your apartment or backyard. Our Olympics package includes sporty and non-sporty games, medals, and trivia to keep your team spirit alive in 2020.',
      imageUrl:
        'https://image.freepik.com/free-photo/sport-flat-lay-background-pink_1220-3743.jpg',
      quantity: 81,
      inStock: false
    },
    {
      name: 'Stay At Home Italian Vacation',
      price: 4900,
      description:
        "Maybe you cancelled your Italian vacation this year, but you can still enjoy la bella vita at home. Package includes ingredients for Aperol Spritz, instructions and ingredients to make your own pasta, an Italian music playlist, and some cute kitchen accessories. Throw a coin in your bathtub and maybe you'll end up in Rome next year?",
      imageUrl:
        'https://images.unsplash.com/photo-1492709560992-3fa75e9e887b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      quantity: 21,
      inStock: false
    },
    {
      name: 'Properly Distanced Picnic',
      price: 19700,
      description:
        "Enjoy our picnic package with 2 blankets so you can sit 6 feet apart and keep partying with your friends responsibly outdoors. We'll provide the materials, the decor, and activities, you provide the food and friends!",
      imageUrl:
        'https://picjumbo.com/wp-content/uploads/DSC07564-2210x1473.jpg',
      quantity: 49,
      inStock: false
    },
    {
      name: 'Yoga Remote Retreat',
      price: 18300,
      description:
        "Now is the perfect time to focus on your wellness! Even if you're taking a staycation and not going anywhere besides your living room, we'll help you focus on your wellness with our Yoga pack. Our pack includes a new mat, soothing candles, healthy recipes, bubble bath, and a few books on meditation to calm pandemic-induced anxiety",
      imageUrl:
        'https://i.pinimg.com/564x/3e/8d/c6/3e8dc645681186739108fbf2abbefe80.jpg',
      quantity: 52,
      inStock: false
    },
    {
      name: 'Cheese Tasting Without Contact',
      price: 9400,
      description:
        'If you are running out of ideas for how to keep virtual friend meetups interesting, consider our Cheese Tasting package. Read about different cheeses, sample, pair with wine, and watch our cheesemaster videos so you eat tasty things and learn something new!',
      imageUrl:
        'https://image.freepik.com/foto-gratis/primer-plano-surtido-quesos-gourmet-vino_23-2148376022.jpg',
      quantity: 77,
      inStock: false
    },
    {
      name: 'Movie Night Together, While Apart',
      price: 14000,
      description:
        "Instead of staring at your friend or parent's face for hours on a video chat, why not watch a movie together? This box includes everything you need to make a virtual movie night a cinematic success, with snacks, movie trivia, movie drinking (or snacking) game ideas, and a timer to help you synchronize your scenes",
      imageUrl:
        'https://img.freepik.com/free-photo/popcorn-juice-movie-night_23-2148470131.jpg?size=626&ext=jpg',
      quantity: 59,
      inStock: true
    },
    {
      name: 'Virtual Vegas',
      price: 9400,
      description:
        'What do casinos, the Backstreet Boys, and giant alcoholic slushies all have in common? Your living room! Bringing Vegas to you with a game of virtual poker, a recorded live Backstreet Boys concert and a tshirt (you can pick a different band or show, but why would you?), and ingredients for the famous giant slushies from the Strip.',
      imageUrl:
        'https://images.unsplash.com/photo-1551368998-d349c755c74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
      quantity: 20,
      inStock: true
    },
    {
      name: 'The Quarantine Cooking Show',
      price: 17300,
      description:
        'File this under: things to do with your sourdough starter. If you picked up a few cooking skills over the last couple months, share your skills with your friends! Box includes chefs hat, virtual recipe cards and shopping lists, and also a recipe and ingredients you can cook together with your friends if you are still a little shy about your own skills',
      imageUrl:
        'https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1502&q=80',
      quantity: 90,
      inStock: true
    },
    {
      name: 'Everyone Needs A Care Package',
      price: 10600,
      description:
        'If you know someone that could use a pick-me-up - aka, basically everyone - this is the right box for them. Customize your box with items to make your friend, your family, or your loved one smile.',
      imageUrl:
        'https://images.unsplash.com/photo-1491821893533-80f535044695?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      quantity: 89,
      inStock: false
    },
    {
      name: 'Dogs Are the Real Winners',
      price: 24700,
      description:
        'We all know dogs are the real winners right now. Need to distract your pup while you take meetings from home? Check out this box with fun toys, puzzles, and treats to keep your furry friend occupied.',
      imageUrl: 'https://petsuites.com/wp-content/uploads/lost-and-found.jpeg',
      quantity: 14,
      inStock: false
    }
  ]

  const products = await Promise.all([
    Product.bulkCreate(productData, {validate: true})
  ])

  const orderDetailData = [
    {productPrice: 150, orderId: 4, productId: 4},
    {productPrice: 49, orderId: 4, productId: 9},
    {productPrice: 197, orderId: 6, productId: 10},
    {productPrice: 183, orderId: 9, productId: 11},
    {productPrice: 183, orderId: 9, productId: 11},
    {productPrice: 183, orderId: 9, productId: 11},
    {productPrice: 140, orderId: 13, productId: 13},
    {productPrice: 76, orderId: 13, productId: 3},
    {productPrice: 174, orderId: 16, productId: 8},
    {productPrice: 242, orderId: 18, productId: 5},
    {productPrice: 49, orderId: 18, productId: 9},
    {productPrice: 49, orderId: 18, productId: 9},
    {productPrice: 94, orderId: 18, productId: 12},
    {productPrice: 173, orderId: 21, productId: 15},
    {productPrice: 94, orderId: 21, productId: 12},
    {productPrice: 194, orderId: 1, productId: 6},
    {productPrice: 110, orderId: 1, productId: 1},
    {productPrice: 110, orderId: 1, productId: 1},
    {productPrice: 110, orderId: 1, productId: 2},
    {productPrice: 76, orderId: 1, productId: 3},
    {productPrice: 76, orderId: 1, productId: 3},
    {productPrice: 247, orderId: 5, productId: 17},
    {productPrice: 94, orderId: 8, productId: 14},
    {productPrice: 175, orderId: 2, productId: 7},
    {productPrice: 175, orderId: 2, productId: 7}
  ]

  const orderDetails = await Promise.all([
    orderDetail.bulkCreate(orderDetailData, {validate: true})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderDetails.length} orders`)
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
