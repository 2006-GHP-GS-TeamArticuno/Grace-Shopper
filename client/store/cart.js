import axios from 'axios'

//ACTION TYPES
// const DELETE_PRODUCT = 'DELETE_PRODUCT'
// const ADD_PRODUCT = 'ADD_PRODUCT'
// const UPDATE_PRICE = 'UPDATE_PRICE'
const GET_CART = 'GET_CART'

//INITIAL STATE
const initialState = []

//ACTION CREATOR
export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

// const addProduct = (updatedOrder) => {
//   return {
//     type:ADD_PRODUCT,
//     updatedOrder
//   }
// }

// const deleteProduct = deletedProduct =>{
//   return{
//     type: DELETE_PRODUCT,
//     deletedProduct
//   }
// }

//THUNK CREATOR
export const getCartThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cart')
      console.log('data in thunk', data)
      dispatch(getCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}

// export const addProductThunk = (productId, productPrice) => {
//   return async dispatch => {
//     try {
//       const{data} = await axios.put('/api/cart', (productId, productPrice))
//       dispatch(addProduct(data))

//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// export const deleteProductThunk = (productId) =>{
//   return async dispatch => {
//     try {
//       await axios.delete('/api/cart', productId)
//       dispatch(deletedProduct(productId))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart

    default:
      return state
  }
}

// case ADD_PRODUCT:
//   return [...state, action.updatedOrder]
// case DELETE_PRODUCT:
//   return
