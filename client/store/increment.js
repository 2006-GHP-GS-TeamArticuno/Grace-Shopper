import axios from 'axios'

const INCREMENT_COUNT = 'INCREMENT_COUNT'
const incrementCount = count => {
  return {
    type: INCREMENT_COUNT,
    count
  }
}
export const getTotalCount = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cart/')
      console.log('this is data', data)
      dispatch(incrementCount(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return action.count
    default:
      return state
  }
}
