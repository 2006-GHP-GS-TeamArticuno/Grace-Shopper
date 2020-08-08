import React from 'react'
import {addProductThunk, deleteProductThunk} from '../store/cart'
import {connect} from 'react-redux'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.increment = this.increment.bind(this)
  }
  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  render() {
    const cart = document.getElementById('cart')
    const {productId, productPrice} = this.props
    return (
      <div>
        <button
          type="submit"
          onClick={() => {
            this.props.text === 'delete'
              ? this.props.deleteProduct(productId)
              : this.props.addProduct(productId, productPrice)
            cart.innerHTML = this.state.count
            this.increment()
          }}
        >
          {this.props.text}
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (productId, productPrice) =>
      dispatch(addProductThunk(productId, productPrice)),
    deleteProduct: productId => dispatch(deleteProductThunk(productId))
  }
}

export default connect(null, mapDispatchToProps)(Button)
