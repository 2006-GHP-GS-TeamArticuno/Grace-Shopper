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
    // const decrease1 = this.state.count
    this.state = {
      count: 1,
      decrease: 1
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  decrement() {
    this.setState(prevState => ({
      decrease: prevState.count - 1
    }))
  }
  render() {
    const cart = document.getElementById('cart')
    // const quantity = document.getElementById('quantity')
    // console.log('the auantuty',quantity)
    const {productId, productPrice} = this.props
    // if (text === 'delete') {
    //   return (
    //     <div className=" has-text-centered">
    //     <button
    //       className="button is-primary"
    //       type="submit"
    //       onClick={() => this.props.deleteProduct(productId)
    //       }
    //       >
    //         {text}
    //       </button>
    //     </div>
    //   )
    // } else if (text === 'increase') {
    //   return (
    //     <div className=" has-text-centered">
    //     <button
    //       className="button is-primary"
    //       type="submit"
    //       onClick={() => this.props.addProduct(productId, productPrice)
    //       }
    //       >
    //         {text}
    //       </button>
    //     </div>
    //   )
    // } else if (text === 'Add to Cart') {
    //   return (
    //     <div className=" has-text-centered">
    //     <button
    //       className="button is-primary"
    //       type="submit"
    //       onClick={() => this.props.addProduct(productId, productPrice)
    //       }
    //       >
    //         {text}
    //       </button>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className=" has-text-centered">
    //     <button
    //       className="button is-primary"
    //       type="submit"
    //       onClick={() => this.props.decreaseProduct(productId)
    //       }
    //       >
    //         {text}
    //       </button>
    //     </div>
    //   )
    // }
    console.log('button props are', this.props)
    return (
      <div className=" has-text-centered">
        <button
          className="button is-primary"
          type="submit"
          onClick={() => {
            // this.props.addProduct(productId, productPrice)
            if (this.props.text === 'delete') {
              this.props.deleteProduct(productId)
            } else if (this.props.text === 'increase') {
              // this.props.addProduct(productId, productPrice)
              quantity.innerHTML = this.state.count
              this.increment()
            } else if (this.props.text === 'Add To Cart') {
              this.props.addProduct(productId, productPrice)
            } else if (this.props.text === 'decrease') {
              // this.props.decreaseProduct(productId)
              quantity.innerHTML = this.state.decrease
              this.decrement()
            } else {
              return undefined
            }
            // cart.innerHTML = this.state.count
            // this.increment()
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
