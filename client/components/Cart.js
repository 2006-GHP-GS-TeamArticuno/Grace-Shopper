import React from 'react'
import {connect} from 'react-redux'
import Button from './Button'
import {Redirect} from 'react-router-dom'
import {
  getCartThunk,
  addProductThunk,
  deleteProductThunk,
  decreaseProductThunk,
  changeQuantityThunk
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

  componentDidMount() {
    this.props.getCart()
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
    // quantity.innerHTML = this.props.changeQuantity();
    return productArray.map(product => {
      // const q = Number(this.props.changeQuantity(product.id))
      return (
        <div key={product.id}>
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
              Total Quantity:{' '}
              <div id="quantity">{this.state.totalQuantity}</div>{' '}
            </td>
            <td className="level-item">Price: {product.price}</td>
            {/* </div> */}

            {/* <div class = "level-right"> */}
            <td className="buttons are-small">
              <button
                type="submit"
                onClick={() => {
                  this.props.addProduct(product.id, product.price)
                  this.increment()
                }}
              >
                +
              </button>
              <button
                type="submit"
                onClick={() => {
                  this.props.decreaseProduct(product.id)
                  this.decrement()
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
    const quantity = +document.getElementById('quantity')
    console.log('the auantuty', quantity)
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
    addProduct: (productId, productPrice) =>
      dispatch(addProductThunk(productId, productPrice)),
    deleteProduct: productId => dispatch(deleteProductThunk(productId)),
    decreaseProduct: productId => dispatch(decreaseProductThunk(productId)),
    changeQuantity: id => dispatch(changeQuantityThunk(id))
    // changeQuantity: id => dispatch(changeQuantityThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
