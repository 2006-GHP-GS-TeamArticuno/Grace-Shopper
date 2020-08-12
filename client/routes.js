import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  SignUp,
  UserHome,
  Home,
  AllProducts,
  SingleProduct,
  CheckoutConfirmation,
  AllUsers,
  SingleUser,
  Cart,
  NotFoundPage
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/checkout" component={CheckoutConfirmation} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={AllUsers} />
        <Route exact path="/users/:id" component={SingleUser} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/welcome" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
        <Switch>
          <Route to="/404" component={NotFoundPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
