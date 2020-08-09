import axios from 'axios'

//ACTION TYPES
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const GET_CART = 'GET_CART'
const DECREASE_PRODUCT = 'DECREASE_PRODUCT'

//INITIAL STATE
const initialState = []

//ACTION CREATOR
const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

const addProduct = updatedOrder => {
  return {
    type: ADD_PRODUCT,
    updatedOrder
  }
}
// const addProduct = updatedOrder => {
//   return {
//     type: ADD_PRODUCT,
//     productId: updatedOrder.productId,
//     productPrice: updatedOrder.productPrice
//   }
// }

const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

const decreaseProduct = id => {
  return {
    type: DECREASE_PRODUCT,
    id
  }
}

//THUNK CREATOR
export const getCartThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cart')
      dispatch(getCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addProductThunk = (productId, productPrice) => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/cart', {productId, productPrice})
      dispatch(addProduct(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const deleteProductThunk = productId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/delete/${productId}`)
      dispatch(deleteProduct(productId))
    } catch (error) {
      console.error(error)
    }
  }
}

export const decreaseProductThunk = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/decrease/${id}`)
      dispatch(decreaseProduct(id))
    } catch (error) {
      console.error(error)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart

    case ADD_PRODUCT:
      return {
        ...state,
        ...action.updatedOrder
      }
    case DELETE_PRODUCT:
    // return [...state].filter(product => product.id !== action.id)
    case DECREASE_PRODUCT:
    // return [...state].filter(product => product.id !== action.id)
    default:
      return state
  }
}
