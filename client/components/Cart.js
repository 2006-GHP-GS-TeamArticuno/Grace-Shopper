import React from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/cart'
import Button from './Button'
import {Redirect} from 'react-router-dom'
import {changeQuantityThunk} from '../store/cart'
class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.getProducts = this.getProducts.bind(this)
    this.state = {isClicked: false}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
  }
  handleClick = () => {
    this.setState({
      isClicked: true
    })
  }
  getProducts(productArray) {
    // quantity.innerHTML = this.props.changeQuantity();
    return productArray.map(product => {
      // const q = Number(this.props.changeQuantity(product.id))
      console.log('PROPS IN CART', this.props)
      return (
        <div>
          <tr className="level">
            {/*
          <div key={product.id} class = 'level-left'> */}
            <td className="level-item">
              {' '}
              <strong>{product.name}</strong>
            </td>
            <td className="level-item">
              {' '}
              <img src={product.imageUrl} />{' '}
            </td>
            <td className="level-item">
              Total Quantity: <span id="quantity">1</span>{' '}
            </td>
            <td className="level-item">Price: {product.price}</td>
            {/* </div> */}

            {/* <div class = "level-right"> */}
            <td className="buttons are-small">
              <Button productId={product.id} text="-" class="level-item" />
              <Button
                productId={product.id}
                productPrice={product.price}
                text="+"
                class="level-item"
              />
              <Button productId={product.id} text="delete" class="level-item" />
            </td>
          </tr>
          {/* quantity.innerHTML = this.props.changeQuantity() */}
        </div>
      )
    })
  }

  render() {
    // const quantity = +document.getElementById('quantity')
    if (this.props.order[0] === undefined) {
      return <div> You don't have any items in your cart yet! </div>
    } else {
      const products = this.props.order[0].products
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
        </div>
      )
    }
  }
}

// class = "is-fullwidth"
const mapStateToProps = state => {
  return {
    order: state.order,
    updatedOrder: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(getCartThunk()),
    changeQuantity: id => dispatch(changeQuantityThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
