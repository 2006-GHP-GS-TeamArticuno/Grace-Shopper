import React from 'react'
import {connect} from 'react-redux'
import {getAllUsersThunk} from '../store/users'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    const users = this.props.users

    console.log('the all users ', this.props)
    return (
      <div>
        <h1>Hello users</h1>
        {users &&
          users.map(user => {
            return (
              <div key={user.id}>
                <div>
                  {user.firstName} {user.lastName}
                  <br />
                </div>
                <div>{user.email}</div>
              </div>
            )
          })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsersThunk())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
