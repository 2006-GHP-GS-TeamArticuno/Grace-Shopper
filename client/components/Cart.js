import React from 'react'
import {connect} from 'react-redux'
import Button from './Button'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {getCartThunk} from '../store/cart'
class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.getProducts = this.getProducts.bind(this)
    this.state = {
      isClicked: false,
      totalQuantity: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
  }
  handleClick = async () => {
    try {
      await axios.put('api/cart/checkout', {isPurchased: true})
      this.setState({
        isClicked: true
      })
    } catch (error) {
      console.error(error)
    }
  }

  getProducts(products) {
    return products.map(product => {
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
            <td className="buttons are-small">
              <Button
                text="+"
                productId={product.id}
                productPrice={product.price}
              />
              <Button
                text="-"
                productId={product.id}
                productPrice={product.price}
              />
              <Button text="delete" productId={product.id} />
            </td>
          </tr>
        </div>
      )
    })
  }

  render() {
    if (this.props.order[0] === undefined) {
      return <div> You don't have any items in your cart yet! </div>
    } else {
      const products = this.props.order[0].products
      const sum = products.reduce((accum, curElement) => {
        const quantity = curElement.orderDetail.quantity
        return (accum = accum + quantity)
      }, 0)
      const priceSum = products.reduce((accum, curElement) => {
        const quantity = curElement.orderDetail.quantity
        const price = curElement.orderDetail.productPrice * quantity
        return accum + price
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
            Total order price:
            <div>${(priceSum / 100).toFixed(2)}</div>
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
    quantity: state.quantity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(getCartThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
