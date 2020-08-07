import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
class Navbar extends React.Component {
  constructor({handleClick, isLoggedIn}) {
    super({handleClick, isLoggedIn})
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
        <div className="navbar-item">
          {' '}
          <img src="../public/PARTYBOX.png" />{' '}
        </div>
        <nav>
          {this.isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/welcome">Home</Link>
              <a href="#" onClick={this.handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/products">Products</Link>
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
    handleClick() {
      dispatch(logout())
    }
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
