import axios from 'axios'

const INCREMENT_COUNT = 'INCREMENT_COUNT'
const incrementCount = cart => {
  return {
    type: INCREMENT_COUNT,
    cart
  }
}
export const getTotalCountThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart`)
      console.log('this is data from CART', data)
      dispatch(incrementCount(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export default function(state = {}, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return action.cart
    default:
      return state
  }
}
