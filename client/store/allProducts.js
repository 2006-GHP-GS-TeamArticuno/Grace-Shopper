import axios from 'axios'
const initialState = []

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

const getAllProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
  }
}

export const getAllProductsThunk = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/products')
    dispatch(getAllProducts(data))
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
