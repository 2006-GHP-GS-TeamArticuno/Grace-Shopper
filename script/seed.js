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
      lastName: 'Pug'
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
      price: 110,
      description:
        'Birthdays are not cancelled. Stay safe, and still celebrate with all your friends! Our Birthday package includes drinks, food, virtual backgrounds, decor, and games to enjoy with friends and family',
      imageUrl:
        'https://www.sgvtribune.com/wp-content/uploads/2019/03/iStock-999985068-1.jpg',
      quantity: 1000
    },
    {
      name: 'Remote Baby Shower',
      price: 110,
      description:
        'The world may be changing, but babies are still being born and we are here for it! But, maybe without the baby food guessing game. Our Baby Shower package includes non-alcoholic drinks, snacks, virtual backgrounds, cute gender (or gender neutral!) decor so all you have to do is receive the gifts on your registry!',
      imageUrl:
        'https://i.pinimg.com/originals/4e/aa/0c/4eaa0cb5ffd0ca26fa938493c264a1d8.jpg',
      quantity: 1000
    },
    {
      name: 'Cyber Graduation Celebration',
      price: 76,
      description:
        'The class of 2020 has been through a lot. Celebrate their accomplishments with our Graduation package. Includes themed cap and gown, a cake with their face on it, and all the tools you need to make an embarrassing virtual slideshow to celebrate how far your new grad has come',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAE3SURBVDjLY/j//z8DJZhh6BgQMuWBQumq5xdaNr/84Nt1t4FkA5LnPd4A1Kjg1XaroWH98/9keyFx1sMLKfMePcAwoLy8/EBxcfGB3NzcA2lpaQfi4+MVwsPDD/j5+R1wdXU9AFJjX3GtIWzSvQvmOZcMMAwAag4Aav6QkpLyH6h5AkgMqLkBqHmBjY2NgnXRlQCn6msLTDIuCBgmX3DQiz+rgOEFoM0OQM3/IyMj/wM1F8BsBmHv1psH0uc+/J8868H/sIl3P+AMA6CzJwQGBv53c3P7D7RZgORoBNosANLs4uLy38jIaALJBoCcDbS5wNra+r+BgcF/BQUFB6IMANkMDbACEF9TU3MC0AX/JSQkPggKChoQNABq8wGQs4GaDYA2HwBqPgDUfICLi+sACwuLweDMTAA2jKFj5WHetwAAAABJRU5ErkJggg==',
      quantity: 56,
      inStock: true
    },
    {
      name: 'Distanced Wedding',
      price: 150,
      description:
        'A Wedding package so cute, it makes not getting your deposits back *almost* bearable. Your guests can have a customized video background, a favor, and some confetti, while you celebrate with your loved one, a mini cake for two, and personalized decor',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKjSURBVDjLlZNbSJNhGMfnTZddJHS4iFJzdhFSRAc6WClJNmbMZrA+0x0+dQesXGpTnDo3aylmSToSgqiMqNTmFC1aOVMHuSG6DS22SK8aMQPZwanj375vMPuoC3vhz3P1/Pi9z/u8LACsqampc6MtJD6ocvBOtBcsFuvwBrObak632Wz+z9Yx2K0WDBelYW1tbUOhISqVapPRaBS+vV2K8a5SDBemIRQKMRIIBOD3++NZWlrC6upqDMA0GMEQwWY0+3w+tKvL0MLZCm3ONqiILHyZm8PKygrTYEhbirGHJRgSsLG8vEynpnselZUN0HN3QHM+EdpoLTu5GdcLL6wD4gYTMYPBS2yEw2E6qqfzqMo7gTtkBh5X5qI8exeq+ftBZiYjGAwwDQYbS/CpsxgD+ak0nUrVk++olpHwOYwIzprw09KBXy4TepoKooBg5J8G/Xmp9IAoAHWNtvudGDdIEXC+QGj2DTwmHWqUCiwuLvqjgIPrBvXFGH1Aop+3J95M1j8HJzcPdTo9tEoh2m4Kobh6A8VSOe62tiIhIeEI02BiBMbcFBpgNpuh092CRCIBn38Rhq5HGBh+Dy6XC5FIBJlcgaPHjhviBqZaEpZ2Cfo4KfQAv907A8szHdSNeiiV5cjn88Hj8VBQQKBILEW3oQme1tMRhoEtatCbk0wbeAfq8bKWi8tiBfR6PTQaDQiCQHNzMwiRFGpxNjwdXM+6QbUEH9tE6M2OAcIhP34sfIW6oQlyuYy+ikAgoGuJ4hoW3C5kpO88+5fB66wkRCIR+iWoQVKrS22jy+WC1+vFnye+BxUVFUndnH3ou3IIrzKT4Ha7MRddV6fTiZmZGUxPT8PhcNB1cnISdrsdVqs1BqBAVISpW07VHdiukbATyf/5zr8BNamLpjmUSloAAAAASUVORK5CYII=',
      quantity: 23,
      inStock: false
    },
    {
      name: 'Bachelorette From Afar',
      price: 242,
      description:
        'Drink and be merry with your friends, from the comfort and safety of your respective living rooms. These are weird times. But you can still make the most of them with our fun, slightly inappropriate, slightly embarrassing games, backgrounds, and decor for your virtual Bachelorette party',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFuSURBVBgZBcG/S1RxAADwz3teyp3XFUUWNVSoRGQR3dLQIESBbUZt9gekm9XW2lRbNDv0gxbJWoJoCcT+ABskTgcDDwLpOD19d+/73rfPJ4kAANaejUx03t5eBZIIgKe34r3JB7OTVVvZuzf9lderiKIoip7MLba+xY24H4v4N36PC635uSgFIJ2/Pz7ppH19w66aHk/nqQCfk8LU1BWJAyMyo3Y1bV2nwpeh8nxxthg+Vm+ZUFVKHDjhK1UqlJeK52E61LOkasOhRDAic8EWKp/qxaupmdOO6Fi3bVyiEAQdA6Th7tjMGYcyDTcdtWlUoqYtypHmjy/atadrX6JpU5QaMhDlSPNTFX9kMj0H6rr+gYFCjnSw3XNZ2y9dPfT1lUq5UkA6+Phb3TU3NJArHFeKhtTkSBc+rC//0NBQVbNmwphzGu5oCztUGDz8udydbSrlVmI9eSkIirzYKZokESw+yl+EdtgL75eWAID/yIWfXhcZhKEAAAAASUVORK5CYII=',
      quantity: 83,
      inStock: true
    },
    {
      name: 'Romantic Distanced Date',
      price: 194,
      description:
        'Met someone on Tinder during quarantine? You can still go on a date! Our Date package has everything you need to de-awkward-ify the video call, from a playlist of music to cover any weird silences, to games and conversation starters, to snacks and activities you can do or make together remotely',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKISURBVDjLjZPLTxNRFMb5B/gDkJ0rNy5cYWLcsNNoWLjQlaLxkcjCmLBzYVgVY6WGQBvEhYqaSIsJ1VSYVhBLQIitM20h9oW09jV0SjsttJ3Szue500eKxMRJfnNn5nznu+fec6cDQEc7V3RzZ4gxwk2kiSzhJ0ws9re+PbGTMBKVeVcEvqiMX5KCeOEAscwe7O4oWKyh6Txk0Eiee7PoR7WmIiYD79fzmPHk8S2joESiGsFiTMO0TZOmgZEFchVoV4HUU0s5vFjZhZCrQaVvNECu1eMNE6NmQA+niVokU8HUqoSAVBfZXCWYPksI7UGrIEW3Ao0KQ1WZQY3larNztD6bR8bkUhoTi2l4Y0AwBawGCrScMjJlQCQDmUrJVoE8wdX3xMgMeCGSw8vlHTIQYfoiwuqWMe0MMUGSYVkOo0BJcaomsAsI8SqEiMziPDOQNmL7NLOICUp+RiZr4QILJojuBgl/qgwrbar5e07DGysyjdQyMC2IMDpSGHMksb511MD7uwizS8brtSyRgafNgOe3szAuJLXkd+QekFSwsptLmHaGMcmZcd/Uj9sjfbg6fA4jM6OtJWibuLJVgiAC0SIQzhM5wL9Thi9RhunTWwyZr+Ojbxx8goPBfheXDSfRO3iRb7WxQq0RqUc/s4ArCXyNAPZQFR82FFx7dB6z3qeY3RzVWqx33ILBcQc9A8eUQwcpTe0S0oCTkrmgCuvmASxCCRcenILN9xztl9UzTgZdOHKUY3kVP6gCe7AKq1eBhS/i7L3jeMzdgI7r15J18/2NCrpK//yZ3NsyNpOKtgcPXw3hkv4EnnA3tZnZyN7JQN/xH78zw9072OfqGejeZ2UTeWKY6f8AEAIH5OE7cHsAAAAASUVORK5CYII=',
      quantity: 6,
      inStock: false
    },
    {
      name: 'Family Reunion From Home',
      price: 175,
      description:
        "Hang out with your grandma virtually! Host a family get-together via video chat. We've got all the supplies you need to make it a memorable party with fun and memories. Plus, a virtual talking feature is provided to mute all other attendees when someone is speaking, so your aunties might stop interrupting everyone else!",
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC3SURBVCjPvdCxDYMwEAVQSxQ0CImKKldE19FRITeu3LihiGQGYYKbIBtkgtuACdiACW4NcgEnpKJE11j6T98+m9Wcj7kERIqsM6ymHwJ7dvQJmhvSryFK5N1rLFtc4gT8Bx4JOO42gC+Y6wM8pJ/D6Ec3dnOrAJ9ga64O0EtIDS3fBS0sGi/FklMCQXwCjQIoa1vZYsqnrEnAi0sAGWQ/5Zx9r/CkT+NW18QBWMu39TIydN1Xn88bUK7xEQPM95QAAAAASUVORK5CYII=',
      quantity: 73,
      inStock: false
    },
    {
      name: 'DIY Distanced Olympics',
      price: 174,
      description:
        'We were bummed the Olympics were called off: they make election years a little less stressful. But you can still have your own "Olympic" competition in your apartment or backyard. Our Olympics package includes sporty and non-sporty games, medals, and trivia to keep your team spirit alive in 2020.',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH2SURBVDjLldPLSxtRFAbwm7ooUheuSn2iQqHtLkZTFGsXShA3LYUi2FJR8VWhuhC6iFAfiEZRE0jUUNDGNKVVxIJUSnGj4APFQhf9D0pCXs1z8tav9wyJjI9ovfAxA3PPb+4Z5jAAjK98HgWP8ooU8dygmlRYElBEIhFvPB4/SiQSuCj8OfR6ve4skgKUVBwMBiEIwkl8Ph88Hg/sdruI2Gw2GAyGUwgtGQG0IRwOIxqNildKIBCA1+uFw+EQgVAoBHqJ0WgUkXMAFadCABX4/X44nc5zLSW/iewUwNs42UD31HeqFZfLJZ7EarWmB85GitBJ6Hu43e7/B6RI76dqtC3I4fY4rwdQYrEYuswVGFxrRMPcPYQiwauBHssjvPlYgc7FcrTMy9G/+hxLBzr0LT+BSpuDrLyMx5cC3eaH+PpzBiuHerHw84EW2o0+mHbH0WlRoXz05tEDtSw7LdDK+6XiqR890Hzvxsh6OwbWmjH0rQNzW8N4+aEKd9+xRFrgxfv7+LKvhWVvEqadccxvj3HkNWa3htBuqUORmv3NfcvkUuBYCjybLUG9Lh+107dRNZGNVwuVmNkcQItZhTLNHWRVsgbpLJTxv0/ghWmHSTF2C02mGig1efj955dAAygFCgi5bJSL+1m4UJ2BzFL2NDn6BVT7D+X3feV2c5mYAAAAAElFTkSuQmCC',
      quantity: 81,
      inStock: false
    },
    {
      name: 'Stay At Home Italian Vacation',
      price: 49,
      description:
        "Maybe you cancelled your Italian vacation this year, but you can still enjoy la bella vita at home. Package includes ingredients for Aperol Spritz, instructions and ingredients to make your own pasta, an Italian music playlist, and some cute kitchen accessories. Throw a coin in your bathtub and maybe you'll end up in Rome next year?",
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH+SURBVBgZBcE9i11VGAbQtc/sO0OCkqhghEREAwpWAWUg8aMVf4KFaJEqQtAipTZWViKiCGOh2Ap2gmJhlSIWFsFOxUK0EsUM3pl79n4f12qHb3z3Fh7D83gC95GOJsDe0ixLk5Qq/+xv/Lw9Xd+78/HLX3Y8fXTr2nWapy4eCFKxG7Fby97SnDlYtMbxthyfzHO//nl85fNvfvnk8MbX5xa8IHx1518Vkrj54Q+qQms2vVmWZjdiu5ZR2rT01166/NCZg/2PFjwSVMU6yjoC1oq+x6Y3VbHdlXWExPd379nf7Nmejv2Os6OC2O4KLK0RNn3RNCdr2Z5GJSpU4o+/TkhaJ30mEk5HwNuvX7Hpi76wzvjvtIwqVUSkyjqmpHS0mki8+9mPWmuWxqYvGkbFGCUAOH/+QevYI9GFSqmaHr5wkUYTAlGhqiRRiaqiNes6SOkwJwnQEqBRRRJEgkRLJGVdm6R0GLMQENE0EkmkSkQSVVMqopyuIaUTs0J455VLAAAAAODW0U/GiKT0pTWziEj44PZ1AAAAcPPqkTmH3QiJrlEVDXDt0qsAAAAAapa5BqUnyaw0Am7//gUAAAB49tEXzTmtM5KkV/y2G/X4M5fPao03n/sUAAAAwIX7y5yBv9vhjW/fT/IkuSp5gJKElKRISYoUiSRIyD1tufs/IXxui20QsKIAAAAASUVORK5CYII=',
      quantity: 21,
      inStock: false
    },
    {
      name: 'Properly Distanced Picnic',
      price: 197,
      description:
        "Enjoy our picnic package with 2 blankets so you can sit 6 feet apart and keep partying with your friends responsibly outdoors. We'll provide the materials, the decor, and activities, you provide the food and friends!",
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJpSURBVDjLfVLPTxNREP52C+mvbSKE2FYkkIiJioo9KMT0QKImnAwHPXjk1IPoxUsPaoiaSDw0MTEe/Cs4mWhVLGCDlWgwFCMJiYeCSGstu9ttt/vLeS9dLBCc5MvMezvzzcz3VnAcB8ys2xMOTp2GmU7DMU04lgXbMGA3ffvoKJw37xF8+0pAi7W5QWuR01Jos3vXNwzstX8EhslJbF3nyZyI+WbcdgCBuENAHx0qRm8vLEZCYN6q1yH098PWapTT+M8EDeNBvV6/X752HWpIQt3jgcFGVxT4Sr8RnplFiHIOJFi7d7fgaJra2d0t+ehs2zZcgYkYnz0eVbs8Urixh0BgSSsrK0OmaU6Hw+GIQh1rtRonYBBFEV6vlyOTyWzquj6WSCQ+7tKARk12dXVFZFmGpmmw6AUYGAFbQ1VVfh+LxSI0TXKfiJQUZ5OwziZTvdmdwSWrVqsIBoOgCeL7Vshms1ZPT49YLBZ5EVo0cM/5nzl8L36BrFWgaNtKRS0/efl46REXsUHP4ya3ejdeWs+iJH7DSPwCjnYex0x+OrSwPPdweOLIIb4CjVXe+aWbu7vjM//pxzucOzEIS7QwGL0CSzAwfOYiS7/pEsyz/ZnSbtdWlORfaBckXD15ize5c+kFjh0+y0Kf2HznqcXFxU2fz4dAILBLA0EQIKsV5DeymEqP829Tr8extvWVl3omJycxMDCwnsvl5NXV1fPRaFTq6OiAJElcdb/fj4r8h3SYRV+4DyWtgO3qFj4szUGu6E8Fd3dmqVRqiNZJkqhxQicTl564TJhfRlrRBXWM0kIEhfB84dlG8i8v6tBqmkd4owAAAABJRU5ErkJggg==',
      quantity: 49,
      inStock: false
    },
    {
      name: 'Yoga Remote Retreat',
      price: 183,
      description:
        "Now is the perfect time to focus on your wellness! Even if you're taking a staycation and not going anywhere besides your living room, we'll help you focus on your wellness with our Yoga pack. Our pack includes a new mat, soothing candles, healthy recipes, bubble bath, and a few books on meditation to calm pandemic-induced anxiety",
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAInSURBVDjLpZNBSJRBFMd/37papinFUgZmYESIFiGRYdQhynueig4eomNE0NmDidc8du7arUNFKJSpIKQHAwlNKkUzTVdd3W++mTfzOuxK2RoEzeENPHi//3/mvRepKv9z0gD65aVK7geqFhWHeoeKRSVBfQLO4MWgEoMz1HY+jXYDvFDecrOErgoRFAOgkH12q9RBsr5ApSoa4kI2AtUARCi/CFFqH+riPZ4gQrBLSG4MQoKqLdzBQjBoMGiIqcjcILj8HgCfAIIGA+qKRb8XGzTkQQW1eziQrdWC5V3KMSGYIiSGEBdEZLsUELzBzLxDkk/gLajgzSb7TxwpKAdDz8QUWfOAR3/8QQrAx6vI5gLVTbepbuniwOlrEBzq8xDyqM9jxFKfaeJ+ZXmpg0gVtzxJdmCYmva7RFFEz/c5WJrFBsGKcOzQKZrq2siZbTr665wRWzH0cE3TO/0+2NbF2kA360OPqb1yDwmW681deA344AkoixvznKm/xJaN0+Nzb+3Z3lRFGgAxRGUpqlrvEE+9IDf6HCMWr4GvqzO4IEhwOO/YTHKcO36ZLZdPj30eNsU5MGRf9aNiUBdj4w+Y2irEC0drGpDg8Rr4tjHH4eo6JuZHGJkd/miF1uhvy9T5pNEba7HBYsRyMtOcutjYwfu5UQanX09a4cJinybRv25jS29q5XzD1cyb6cFxG2hf7FNbbMC/ARq7oxUfyjJx8OXLfSo7+Z9JyXr5I2wfSAAAAABJRU5ErkJggg==',
      quantity: 52,
      inStock: false
    },
    {
      name: 'Cheese Tasting Without Contact',
      price: 94,
      description:
        'If you are running out of ideas for how to keep virtual friend meetups interesting, consider our Cheese Tasting package. Read about different cheeses, sample, pair with wine, and watch our cheesemaster videos so you eat tasty things and learn something new!',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALJSURBVDjLpZBrTJJhFMdfxUzazHQzp5aK84IgysULmNc5SXMFloVp09CJqDOXt+XMiViKlnkpxVZG5ijLlZZmZpeZpjVdfelrwqsfa3nJlAB5T680kNba2vzwe852nvP/PWcPAgDIdjAeIRXTkCGfS92WIKZ6WsRrn7tnebmUlt6Egy4JTn7Cyfy3oHwK2A0oK6ZRZYi7rCJu9lYO8ye/847qcGaWU47N4ehxFnC8/xaUvQU/yQIhsAbV0mvRkbXouIYfsfHYajw30jS4yk3yXklMXlk8xF9PvopK/hCwSifB+6Bkv3vFfFPe6QHdGpOtWQ/jdFi+xKpBm8Nr1QaOVK2PrFdro2VqzCxglk6AafArhYPNMxK0lmGvYrTPp0Sl9y9VKTTMUN91VhjczZDJtwQl40aBfq+bUuu6Tx91ZEyzS4i222fPE/Zkq0cdhaqf+XcidLkKBmR104haCm1cQw1aNgvoZ19DFZ0fbLB3xDZ2O9UjaegFRICCtQA1EAQoZntCLchRMNZqh9JB0EUGXocnUUvy0W0Jil8BWO3ggbXtZ9PaxcooKOplY3k9LEzYHQznB47Dg9k2KOvnQUKLi2HR023YLAg+8wK0iE2qHrFxMQkKe8Nh8GMnPPxwzRjsm22F1pdl0POuCcRKLoQ27DTQ6qwcjMNBRc/hpjM51hSOkzE78ZWN4StjxdA4WggXR0QgGRKC9GkedE3UwanbkeBbg2wYA7TCZ8ApC3Rll1Ovh5fTFvD6LeNGANyfaQXl+2bomW6CW1MyXFIA8gkpiJSJQKpGvrhXIvTfgoIRYIoDeAyxP9efz0nAKzFFTsKS2tyx+BZn7MAlByxTEQGdbySQ3csFzyrrFY9zdiHmP6DmDwNVPAQU8ROcx0ARDeIMQMAmuY+AjEOV2kFWTzx4VTqBn6gNyDn9YBb8D/jKax5VBHCuREiW/V/ef2+t0gzxSwAAAABJRU5ErkJggg==',
      quantity: 77,
      inStock: false
    },
    {
      name: 'Movie Night Together, While Apart',
      price: 140,
      description:
        "Instead of staring at your friend or parent's face for hours on a video chat, why not watch a movie together? This box includes everything you need to make a virtual movie night a cinematic success, with snacks, movie trivia, movie drinking (or snacking) game ideas, and a timer to help you synchronize your scenes",
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADzSURBVDjLY/z//z8DJYCJgUJAsQEsMEZ5efn/f//+Mfz58weOf//+Dce/fv2C0yC8d+9eRpA+RkrDAO6Czi3vrpT7COnA+LGxsdeRbUTHZ86c0UQx4MfvvwyZi55cvXX7a8jeZvXrQEWKuDSDMAyAvdCy+cV/EW42hk/ffzOcvvP1zMNbX+JOTdW7TowX4GGQs/jFlVfvvzPdvfop+OxM/euenp5XYLb9/PkTbjPMWw8fPtRB8cK3n/8YVuUpasG99OOHCrqzkWMDwwUUx4K3t/d/fIGGnCZA+PPnz1ROB7a2tv+xBRayrR8+fGDEGQsDlpkACSYJhTJIjokAAAAASUVORK5CYII=',
      quantity: 59,
      inStock: true
    },
    {
      name: 'Virtual Vegas',
      price: 94,
      description:
        'What do casinos, the Backstreet Boys, and giant alcoholic slushies all have in common? Your living room! Bringing Vegas to you with a game of virtual poker, a recorded live Backstreet Boys concert and a tshirt (you can pick a different band or show, but why would you?), and ingredients for the famous giant slushies from the Strip.',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGdSURBVDjLpVMxa8JAFL6rAQUHXQoZpLU/oUOnDtKtW/MDBFHHThUKTgrqICgOEtd2EVxb2qFkKTgVChbSCnZTiVBEMBRLiEmafleCDaWxDX3w8e7dve+7l3cv1LZt8h/jvA56vV7DNM20YRgE/jyRSOR+ytvwEgAxvVwui/BF+LTvCtjNwKvj/X8CbgXPOHMEZl559HsTu93uPQi7jBiNRgMEx8PR0GIxRB+y2eze2gqQeAXoSCaqqu5bpsWIdyzGvvRrBW7rdDo2I6ZSKeq7B8x0XV/bwJWAJEnHSMwBDUEQWq5GfsJthUJhlVuv11uckyiGgiH2RWK73RYRb2cymbG7gnK5vIX9USwWI1yAI/KjLGK7teEI8HN1TizrnZWdRxxsNps8vI3YLpVKbB2EWB6XkMHzgAlvriYRSW+app1Mpy/jSCRSRSyDUON5nuJGytaAHI/vVPv9p/FischivL96gEP2bGxorhVFqYXDYQFCScwBYa9EKU1OlAkB+QLEU2AGaJ7PWKlUDiF2BBw4P9Mt/KUoije+5uAv9gGcjD6Kg4wu3AAAAABJRU5ErkJggg==',
      quantity: 20,
      inStock: true
    },
    {
      name: 'The Quarantine Cooking Show',
      price: 173,
      description:
        'File this under: things to do with your sourdough starter. If you picked up a few cooking skills over the last couple months, share your skills with your friends! Box includes chefs hat, virtual recipe cards and shopping lists, and also a recipe and ingredients you can cook together with your friends if you are still a little shy about your own skills',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGeSURBVDjLxVNNS0JRED3qA0MRoqCFouBGN9Yia9HGRa3b9x/6M62jf9CuTS0EV0arXASG0gcUYWIgmvi6792P7sz1WUI7Fw0Mc70z59wz88aYMQbLWBxL2tIEXrN5+mcPWkvrBsZQVNYDSKmglLTZ0J4lwjCER8XZ7OYcSDMxRs/cEdCZSKKoNeUU7u/rjoBMiE8GuKQrcCA1A0XuFK2sZKwC3xE4Zo1UahX5/Dam0yH6/Q4KhV17H+Lu7gKVyiESCQ/dbgPD4QvfSykQlzKcMxP4+fnGJr4seAdPT01MJh8oFve4uNOp20fWQBilQqvAEtBQqE+6IBuPe3h8bML3hyiX95FOr6HXayOT2UCpdIDR6I1r6VF6KK61z5N1ROAkvdBuX+H6+oznksttodE4wevrLbdC8h1GwCMZJF+pgIdSrR6xtCCYWLnrnBuP31GrHfN5MHhgcDRUj3pzbAFarfOFSUf++4tEA3dRwhNCsKRkMv2r+Oe7R7+jvbArNotu/6wC3/Z7yX3TdhkjbDS8eUTi5EoGuLhosX//N34Dm6aVPfzbYjIAAAAASUVORK5CYII=',
      quantity: 90,
      inStock: true
    },
    {
      name: 'Quarantine Care Package',
      price: 106,
      description:
        'If you know someone that could use a pick-me-up - aka, basically everyone - this is the right box for them. Customize your box with items to make your friend, your family, or your loved one smile.',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK7SURBVDjLbZFNaJxlEICfeb+vu5tYCApd3CgsdLdpu9pWEKEUEaEUb4o5iBQpePCkHqwQqlKLB6sUDyLoQbBC0IoI4g8iKv5SSlpj2qYmWtgapCaSiGY3m9399nt33vGwydaoAwNzmOcZZkbMjENPn8rsGhm+EseSOz87Xx4/frDO/8Q9Dzw7tOPWrdVGo5XMTk+WJj47mYqZAWyQfD/9a/nUiUMbJPtHjwyN3FKqNlutZPbCudLkl2+nAH0BwENPvZWpbN1yBbPc2bOz5Q/fOFwHuPu+J4bKO7dVW8128tOlc6Xz37ybrjMbBAD3P/JKZvtIoaqhO/DDxFQ5TVuMVLZXm6vt9s8zk+WL372X/rNfzIyxsbHngGfWZWZGPp+PAFSVEAKLi4tqZpgZqkqz2Xx+fHz8WLwGHC0/+IL8+2hmoAYhGKGt0fyKp61gwPLJg0eBYw5gcHBQ8tcJTv4Ld9VYqHuu1j3dIEQCDvDeC/RqzIxcDDduFmJ3DU5S5WotpZEGIhEi1wOcCKpKX+C9x2sPvD4niPTgP1a7WGANFhyCE8EZfUEMkKYpaQDWJmfEqCcKCCKGA6z2CdHKpyTJMu0kxRWa1wSqilcIBhoCDR8YzDi8Gs5BZ+l9tgx8xe133cHNN2zj65kPmBj4jb2PDb/kALrdLh010q6xmhoaentuisBMWFl4h9t27EGdsqdwABXP3l37AB516ys0O0a9Y9QTY7UDLW+oCSbwV+N3Nslm7t35OABP7n+dUn43QC4GyGaz1L44wdzcHMcvX+ZwsYj3nkqlwo9TUywX/2Rm4QwXF05z5MCbvPj5w+SiLEAS97/gPYVCgZfzeW5SRVWp1WoUi0VcWGFi+gz7dt/Jx5deIyMxpy98C/CqmBmjo6O2tLRECKGfZrahjooN4uEEiQxTwc9nmfroF/kb8GeNaWNAJ70AAAAASUVORK5CYII=',
      quantity: 89,
      inStock: false
    },
    {
      name: 'Dogs Are the Real Winners',
      price: 247,
      description:
        'We all know dogs are the real winners right now. Need to distract your pup while you take meetings from home? Check out this box with fun toys, puzzles, and treats to keep your furry friend occupied.',
      imageUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAImSURBVDjLjZLda9JRGMf3b3TTdTcFXXXRTbeDIijo5W7GmtWqCysIF1JM9DfffvMN+fk284UpKqRIMCfIDCO7kNSRooJvOBUvgkFEKPv2O8+WsWmtB77n4TznPJ/z5eHMAZiTyWQat9vdCQaDCIfDiEQiiEajlNme1f1+PxwOx1ChUJhYz2/RYrPZCmL+htPjpyAIe1MAr9c7EvPBNdkm/iUWolNMAZg9FrdW3mFRu4Ml/QdI+Swern/EsukTHls+0xkLj8czDfD5fBOAVGx+cKL5qfUPYMPzdjZgPB6jWq2iXC6jWCwin88jl8shm80ik8kgnU7/3cFRkSZvMBhQqVQQCASg0WgI1H/+DLU7NzAajWbPwOWiIjqdDlqtFur1Omq1GrkplUqkQqFAd5yuGQDBbqfDWCwGo9GIdrtNbnieJ1goFIJerycHgmCfBlitVgL0+330ej10u11yw0DNZhONRgObW068ECRYMlzHXeWV/fmXF15NAEajiQCJRAIWi4Ug8XgcZrOZQLqN13gTliCxa8WXvST47Ue4zZ/HpeUzOgJodToCDIdD0mAwmLhhkmjmESutI/b18CFd6j74lJQBfhBApVKNdjKZg1QqBabtE7q6chHvd53H/nS8aGWAw0HI5fLS6qryu0qlhlotiuPAra2B45g4XH5yFtrkPaiTC9Ss3lo47uA0iReVN3XnoE8u0ssss/1kBv8J4UTtM9tHmWP1X8ma/9q6R1ZmAAAAAElFTkSuQmCC',
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
