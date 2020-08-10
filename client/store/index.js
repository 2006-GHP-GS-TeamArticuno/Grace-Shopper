import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './allProducts'
import product from './singleProduct'
import cart from './increment'
import users from './users'
import order from './cart'
import {loadState, saveState} from './localstorage'

const reducer = combineReducers({user, products, product, cart, order, users})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const persistedState = loadState()
const store = createStore(reducer, persistedState, middleware)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
export * from './user'
