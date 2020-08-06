import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_USERS = 'GET_ALL_USERS'
// const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUsers = []

/**
 * ACTION CREATORS
 */
const getAllUsers = users => ({type: GET_ALL_USERS, users})
// const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const getAllUsersThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    console.log('all users data', data)
    dispatch(getAllUsers(data))
  } catch (err) {
    console.error(err)
  }
}

// export const auth = (email, password, method) => async dispatch => {
//   let res
//   try {
//     res = await axios.post(`/auth/${method}`, {email, password})
//   } catch (authError) {
//     return dispatch(getUser({error: authError}))
//   }

//   try {
//     dispatch(getUser(res.data))
//     history.push('/welcome')
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr)
//   }
// }

// export const logout = () => async dispatch => {
//   try {
//     await axios.post('/auth/logout')
//     dispatch(removeUser())
//     history.push('/login')
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = defaultUsers, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    // case REMOVE_USER:
    //   return defaultUser
    default:
      return state
  }
}
