// const router = require('express').Router()
// const {Cart, orderDetail, Product} = require('../db/models')
// module.exports = router

// // router.get('/', async (req, res, next) => {
// //   try {
// //     const findCart = await Cart.findAll({
// //       where: {
// //         userId: req.user.id,
// //         include: {model: orderDetail, where: {isPurchased: false}}
// //       }
// //     })
// //     if (findCart) res.json(findCart)
// //     else {
// //       //will this redirect to cart/:id?
// //       const newCart = await Cart.create()
// //       res.json(newCart)
// //     }
// //   } catch (error) {
// //     next(error)
// //   }
// // })
// //////MY THOUGHTS///////

// // routes here will be considered /cart/:productId ...
// //so it shouldn't change the database model ONLY the view
// //for specific ordered product
// router.get('/:productId',async(req,res,next)=>{
//   //we need to update the user's order history to show the order he's just purchased
//   const orderedProduct = await Product.findOne({where:{
//     id:req.params.id
//   }})
//   req.send(orderedProduct)
// })
// // router.get('/:id/checkout',async(req,res,next)=>{
// //   //we need to update the user's order history to show the order he's just purchased
// //   const updatedInfo = await req.session.user.update()
// // })
// router.post('/:productId',async(req,res,next)=>{
//   //we need to update the user's order history to show the order he's just purchased
//   const orderedProduct = await Product.create({where:{
//     id:req.params.id
//   }})
//   req.send(orderedProduct)
// })
// router.put('/:id', async (req, res, next) => {})
// //belongs to --
// //we can't delete the cart
// //we need the ability to create a new cart that the user can have
// //cart belongs to User
// //User has many cart
// //frontend only show cart that is not purchased
// //user can have many carts
// //some of them are purchased and 1 of them is not

// //only quantity of product  will be updated??
// router.put('/:productId',async(req,res,next)=>{
//   try {
//       //we need to update the user's order history to show the order he's just purchased
//   const addedToCartProduct = await Product.findOne(req.body.quantity);
//   //!!!need a class method to change the selected quantity of product
//   //!! need a class method to change the totalprice of all addedtocart products

//   if(!addedToCartProduct) res.sendStatus(404);
//   else{
//       const updatedProduct = await addedToCartProduct.update(req.body.quantity,{where:{
//     id:req.params.id
//   }})
//   req.send(updatedProduct)
//   }

//   } catch (error) {
//     next(error)
//   }

// })
// //i think it will not be delete from database
// //because the rote is /cart/:productId
// //need this route for a remove addedtocartproduct ONLY from cart view

// //we might need another one to
// router.delete("/:productId", async (req, res, next) => {
//   try {
//     const deletedAddedToCartProduct = await Product.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!deletedAddedToCartProduct) res.sendStatus(404);
//     else res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// });
