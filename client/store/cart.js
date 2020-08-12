import axios from 'axios'

//ACTION TYPES
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const GET_CART = 'GET_CART'
const DECREASE_PRODUCT = 'DECREASE_PRODUCT'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'

//INITIAL STATE
const initialState = []

//ACTION CREATOR
const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}
const changeQuantity = quantity => {
  return {
    type: CHANGE_QUANTITY,
    quantity
  }
}
const addProduct = updatedOrder => {
  return {
    type: ADD_PRODUCT,
    updatedOrder
  }
}

const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

const decreaseProduct = cart => {
  return {
    type: DECREASE_PRODUCT,
    cart
  }
}

//THUNK CREATOR
export const getCartThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cart')
      //IDEA: send up the session Id -- if data includes the session id - set it as a key
      //on local storage
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
export const increaseProductThunk = (id, quantity) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/cart/${id}`, {
        quantity
      })
      console.log('the updated order', data)
      dispatch(changeQuantity(data))
    } catch (error) {
      console.error(error)
    }
  }
}
export const deleteProductThunk = productId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/delete/${productId}`)
      const {data} = await axios.get('/api/cart')
      dispatch(deleteProduct(productId))
      dispatch(getCart(data))
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
    // case CHANGE_QUANTITY:
    //   return [...state, action.cart]
    case CHANGE_QUANTITY:
      return {
        ...state,
        ...action.quantity
      }
    default:
      return state
  }
}
