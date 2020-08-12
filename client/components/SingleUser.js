import React from 'react'
import {connect} from 'react-redux'
import {getSingleUserThunk, makeAdminThunk} from '../store/user'

class SingleUser extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleUser(id)
  }
  render() {
    const user = this.props.user
    return (
      <div className="has-text-centered">
        <br />
        <h1 className="title is-5">User Info</h1>

        <div>
          {' '}
          <strong>First Name:</strong> {user.firstName}
        </div>
        <div>
          {' '}
          <strong>Last Name:</strong> {user.lastName}
        </div>
        <div>
          {' '}
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          {!user.isAdmin ? (
            <button
              type="submit"
              onClick={() => {
                this.props.makeAdmin(user.id, user.isAdmin)
              }}
            >
              Make an admin
            </button>
          ) : null}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleUser: id => dispatch(getSingleUserThunk(id)),
    makeAdmin: (id, isAdmin) => dispatch(makeAdminThunk(id, isAdmin))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
