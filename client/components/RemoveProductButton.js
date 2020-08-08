import React from 'react'
import {deleteProductThunk} from '../store/allProducts'
class RemoveProductButton extends React.Component {
  render() {
    const cart = document.getElementById('cart')
    return (
      <div className=" has-text-centered">
        <button
          className="button is-primary"
          type="submit"
          onClick={() => {
            this.increment()
            cart.innerHTML = this.state.count
          }}
        >
          Add to Cart
        </button>
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

export default RemoveProductButton
