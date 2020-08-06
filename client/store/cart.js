// import axios from 'axios'

// //ACTION TYPES
// const DELETE_PRODUCT = 'DELETE_PRODUCT'
// const ADD_PRODUCT = 'ADD_PRODUCT'
// const UPDATE_PRICE = 'UPDATE_PRICE'
// const GET_CART = 'GET_CART'

// //INITIAL STATE
// const initialState = {
//   //   products: [],//not sure if we need it
//   addedToCartProducts: [],
//   addedToCartProduct: {}, //will come from the thunk->from the server route
//   //including price and quantity on the product obj from db
// //   price: 0,
// //   quantity: 0,
// }
// //modified as easier to understand addedToCartProduct below
// //ACTION CREATOR
// const getCart = (cart) => {
//   return {
//     type: GET_CART,
//     cart,
//   }
// }
// //----------my thoughts------
// const GET_ADDEDTOCART_PRODUCT = 'GET_ADDEDTOCART_PRODUCT'
// const getaddedToCartProduct = (addedToCartProduct) => {
//   return {
//     type: GET_ADDEDTOCART_PRODUCT,
//     addedToCartProduct,
//   }
// }
// export const getOrderedProductThunk = (productId) => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get('/api/cart/:productId', productId)
//       dispatch(getaddedToCartProduct(data))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// //not sure we need it since we'll be always adding from allProducts/singleProduct component
// //by ckicking addToCart button
// // const addProduct = (updatedOrder) => {
// //   return {
// //     type:ADD_PRODUCT,
// //     updatedOrder
// //   }
// // }

// const deleteProduct = (deletedProduct) => {
//   return {
//     type: DELETE_PRODUCT,
//     deletedProduct,
//   }
// }

// //THUNK CREATOR
// export const getCartThunk = () => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get('/api/cart')
//       dispatch(getCart(data))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// export const addProductThunk = (productId, orderId, productPrice) => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.put(
//         '/api/cart',
//         (productId, orderId, productPrice)
//       )
//       dispatch(addProduct(updatedOrder))  //?????
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// export const deleteProductThunk = (productId) => {
//   return async (dispatch) => {
//     try {
//       await axios.delete('/api/cart', productId)
//       dispatch(deletedProduct(productId))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// //REDUCER
// export default function (state = initialState, action) {
//   switch (action.type) {
//     case GET_ADDEDTOCART_PRODUCT:
//       return action.addedToCartProduct

//     //   case ADD_PRODUCT:
//     //     return {...initialState,
//     //       action.updatedOrde
//     //       }

//     //   case DELETE_PRODUCT:
//     //     return

//     default:
//       return state
//   }
// }
