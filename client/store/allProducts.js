import axios from 'axios'
const initialState = []

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

const getAllProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
  }
}
const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  }
}
const deleteProduct = id => {
  return {
    type: REMOVE_PRODUCT,
    id
  }
}
export const addProductThunk = product => {
  return async dispatch => {
    try {
      let {data} = await axios.post('/api/products', product)
      dispatch(addProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export const deleteProductThunk = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${id}`)
      dispatch(deleteProduct(id))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAllProductsThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      console.log('this is data', data)
      dispatch(getAllProducts(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.id)
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
