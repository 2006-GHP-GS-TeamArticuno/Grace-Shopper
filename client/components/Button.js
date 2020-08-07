import React from 'react'
import {addProductThunk} from '../store/cart'
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
            this.increment()
            this.props.addProduct(productId, productPrice)
            cart.innerHTML = this.state.count
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
      dispatch(addProductThunk(productId, productPrice))
  }
}

export default connect(null, mapDispatchToProps)(Button)
