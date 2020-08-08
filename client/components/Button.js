import React from 'react'
import {
  addProductThunk,
  deleteProductThunk,
  decreaseProductThunk
} from '../store/cart'
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
      <div className=" has-text-centered">
        <button
          className="button is-primary"
          type="submit"
          onClick={() => {
            if (this.props.text === 'delete') {
              this.props.deleteProduct(productId)
            } else if (this.props.text === 'increase') {
              this.props.addProduct(productId, productPrice)
            } else if (this.props.text === 'Add to Cart') {
              this.props.addProduct(productId, productPrice)
            } else if (this.props.text === 'decrease') {
              this.props.decreaseProduct(productId)
            } else {
              return undefined
            }
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
    deleteProduct: productId => dispatch(deleteProductThunk(productId)),
    decreaseProduct: productId => dispatch(decreaseProductThunk(productId))
  }
}

export default connect(null, mapDispatchToProps)(Button)
