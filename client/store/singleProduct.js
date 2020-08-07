import axios from 'axios'
const initialState = {}

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const getSingleProduct = product => {
  return {
    type: GET_SINGLE_PRODUCT,
    product
  }
}
const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    name: product.name,
    quantity: product.quantity,
    price: product.price,
    description: product.description
  }
}
export const getSingleProductThunk = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      console.log('this is single product  data', data)
      dispatch(getSingleProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateSingleProductThunk = (
  id,
  name,
  price,
  quantity,
  description
) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(
        `/api/products/${id}`,
        name,
        price,
        quantity,
        description
      )
      console.log('the update prod data', data)
      dispatch(updateProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product
    case UPDATE_PRODUCT:
      return {
        ...state,
        name: action.name,
        quantity: action.quantity,
        price: action.price,
        description: action.description
      }
    default:
      return state
  }
}
