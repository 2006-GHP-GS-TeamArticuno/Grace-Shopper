import React from 'react'
import {connect} from 'react-redux'
import {getSingleUserThunk} from '../store/user'

class SingleUser extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleUser(id)
  }
  render() {
    const user = this.props.user
    return (
      <div className="singleUser">
        <h1>Its single user</h1>

        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.email}</div>
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
    getSingleUser: id => dispatch(getSingleUserThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
