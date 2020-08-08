import React from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/cart'
import Button from './Button'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.getProducts = this.getProducts.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
  }

  getProducts(productArray) {
    return productArray.map(product => {
      return (
        <div>
          <div key={product.id}>
            <div>{product.name}</div>
            <img src={product.imageUrl} />
            <div>Total Quantity:0</div>
            <div>Price: {product.price}</div>
            <Button productId={product.id} text="delete" />
            <Button
              productId={product.id}
              productPrice={product.price}
              text="increase"
            />
          </div>
        </div>
      )
    })
  }

  render() {
    if (this.props.order[0] === undefined) {
      return <div> You don't have any items in your cart yet! </div>
    } else {
      const products = this.props.order[0].products
      return (
        <div>
          <h1> My Cart </h1>
          <div>{this.getProducts(products)}</div>
          <button>Checkout</button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    order: state.order,
    updatedOrder: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(getCartThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
