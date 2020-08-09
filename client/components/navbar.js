import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
// import {user} from '../store/user'
class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }
  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  render() {
    return (
      <div className="navbar-brand">
        <div>
          <Link to="/home">
            {' '}
            <img id="logo" src="logo_transparent.png" />{' '}
          </Link>
        </div>
        <nav>
          {this.props.isLoggedIn ? (
            <div>
              {/* The navbar will show these links AFTER you log in */}
              <Link to="/home">Home</Link>
              <Link to="/products">Products</Link>
              <a href="#" onClick={this.props.handleClick}>
                Logout
              </a>

              <Link to="/cart">
                <img
                  src="https://www.pngmart.com/files/7/Cart-PNG-Clipart.png"
                  className="cartImage"
                />
              </Link>
              {/* <Link to ="/login" onClick={this.handleClick}>Logout</Link> */}
            </div>
          ) : (
            <div>
              {/* The navbar will show these links BEFORE you log in */}
              <Link to="/home">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/cart">
                <img
                  src="https://www.pngmart.com/files/7/Cart-PNG-Clipart.png"
                  className="cartImage"
                />
              </Link>
              <div id="cart">0</div>
            </div>
          )}
        </nav>
        <hr />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => dispatch(logout())
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
