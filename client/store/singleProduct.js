import axios from 'axios'
const initialState = {}

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

const getSingleProduct = product => {
  return {
    type: GET_SINGLE_PRODUCT,
    product
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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
