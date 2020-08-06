import axios from 'axios'
const initialState = []

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const getAllProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
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
    default:
      return state
  }
}
