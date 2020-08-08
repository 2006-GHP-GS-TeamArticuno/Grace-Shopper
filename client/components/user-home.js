import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className="has-text-centered">
      <br />
      <h3 className="title" id="singleTitle">
        Welcome, {email} !
      </h3>
      <img
        id="welcomeIMG"
        src="https://media3.giphy.com/media/3o6fJ0mUt4WWF1qox2/giphy.gif?cid=ecf05e47iq8ohvy8ghhvlb3e9tvum6rw76172vxpac1rw8dp&rid=giphy.gif"
      />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
