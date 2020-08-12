import React from 'react'
import {connect} from 'react-redux'
import Button from './Button'
import {Redirect} from 'react-router-dom'
import {
  getCartThunk,
  addProductThunk,
  deleteProductThunk,
  decreaseProductThunk,
  increaseProductThunk
} from '../store/cart'
// import {changeQuantityThunk} from '../store/cart'
class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.getProducts = this.getProducts.bind(this)
    this.state = {
      isClicked: false,
      totalQuantity: 1
    }
    this.handleClick = this.handleClick.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  async componentDidMount() {
    await this.props.getCart()
    console.log('PRops', this.props)
  }
  increment() {
    this.setState(prevState => ({
      totalQuantity: prevState.totalQuantity + 1
    }))
  }
  decrement() {
    this.setState(prevState => ({
      totalQuantity: prevState.totalQuantity - 1
    }))
  }
  handleClick = () => {
    this.setState({
      isClicked: true
    })
  }

  getProducts(productArray) {
    return productArray.map(product => {
      console.log('cart props', this.props)
      console.log('product is', product)
      // const q = this.props.changeTotalQuantity(product.id).length
      return (
        <div key={product.id}>
          <tr className="level">
            <td className="level-item">
              {' '}
              <strong>{product.name}</strong>
            </td>
            <td className="level-item">
              {' '}
              <img src={product.imageUrl} />{' '}
            </td>

            <td className="level-item">
              Total Quantity:{' '}
              <div id="quantity">{product.orderDetail.quantity}</div>{' '}
            </td>
            <td className="level-item">
              {' '}
              Price: {(product.price / 100).toFixed(2)}{' '}
            </td>

            {/* </div> */}

            {/* <div class = "level-right"> */}
            <td className="buttons are-small">
              <button
                type="submit"
                onClick={() => {
                  this.props.increaseQuantity(
                    product.id,
                    (product.orderDetail.quantity =
                      product.orderDetail.quantity + 1)
                  )
                }}
              >
                +
              </button>
              <button
                type="submit"
                onClick={() => {
                  {
                    product.orderDetail.quantity > 1
                      ? this.props.increaseQuantity(
                          product.id,
                          (product.orderDetail.quantity =
                            product.orderDetail.quantity - 1)
                        )
                      : this.props.deleteProduct(product.id)
                  }
                }}
              >
                -
              </button>
              <button
                type="submit"
                onClick={() => {
                  this.props.deleteProduct(product.id)
                }}
              >
                delete
              </button>
              {/* <Button productId={product.id} text="-" class="level-item" totalQuantity = {this.state.totalQuantity} />
              <Button
                productId={product.id}
                productPrice={product.price}
                text="+"
                class="level-item"
                totalQuantity = {this.state.totalQuantity}
              />
              <Button productId={product.id} text="delete" class="level-item" /> */}
            </td>
          </tr>
          {/* quantity.innerHTML = this.props.changeQuantity() */}
        </div>
      )
    })
  }

  render() {
    console.log('CART', this.props)
    if (this.props.order[0] === undefined) {
      return <div> You don't have any items in your cart yet! </div>
    } else {
      const products = this.props.order[0].products
      const sum = products.reduce((accum, curElement) => {
        const quantity = curElement.orderDetail.quantity
        return (accum = accum + quantity)
      }, 0)
      return (
        <div className="has-text-centered">
          <img id="allBanner" src="CART.png" className="has-text-centered" />
          <table className="table">{this.getProducts(products)}</table>
          <button
            className="button is-success"
            type="submit"
            onClick={this.handleClick}
          >
            Checkout
          </button>
          {this.state.isClicked ? (
            <Redirect from="/home" to="/checkout" />
          ) : null}
          <div>
            Total order quantity:
            <div>{sum}</div>
          </div>
        </div>
      )
    }
  }
}

// class = "is-fullwidth"
const mapStateToProps = state => {
  return {
    order: state.order,
    updatedOrder: state.order,
    quantity: state.quantity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(getCartThunk()),
    addProduct: (productId, productPrice) =>
      dispatch(addProductThunk(productId, productPrice)),
    deleteProduct: productId => dispatch(deleteProductThunk(productId)),
    increaseQuantity: (id, quantity) =>
      dispatch(increaseProductThunk(id, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
