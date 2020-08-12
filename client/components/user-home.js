import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import user from '../store/users'
import {Link} from 'react-router-dom'

export const UserHome = props => {
  const {email} = props

  return (
    <div className="has-text-centered">
      <br />
      <h3 className="title" id="singleTitle">
        Welcome, {email} !
      </h3>
      {props.user.isAdmin && <Link to="/users"> View all Users</Link>}
      <img
        id="welcomeIMG"
        src="https://media3.giphy.com/media/3o6fJ0mUt4WWF1qox2/giphy.gif?cid=ecf05e47iq8ohvy8ghhvlb3e9tvum6rw76172vxpac1rw8dp&rid=giphy.gif"
      />
    </div>
  )
}

const mapState = state => {
  return {
    email: state.user.email,
    user: state.user
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
