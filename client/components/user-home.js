import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import user from '../store/users'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      {props.user.isAdmin ? (
        <div>
          <h3>Welcome, {email}</h3>
          <Link to="/users"> View all Users</Link>
        </div>
      ) : (
        <h3>Welcome, {email}</h3>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
