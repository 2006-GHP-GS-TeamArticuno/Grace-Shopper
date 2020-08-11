import React from 'react'
import {connect} from 'react-redux'
import {
  getSingleProductThunk,
  updateSingleProductThunk
} from '../store/singleProduct'
import {getCartThunk, increaseProductThunk} from '../store/cart'
import Button from './Button'
import EditProduct from './EditProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleProduct(id)
    this.props.getCart()
  }
  render() {
    const product = this.props.product
    console.log('single product props', this.props)
    return (
      <div className="has-text-centered">
        {/* <h1>Its single product</h1> */}
        <br />
        {this.props.user.isAdmin && (
          <EditProduct
            productId={product.id}
            editProduct={this.props.editProduct}
          />
        )}

        <div className="title" id="singleTitle">
          {product.name}
        </div>
        <div>
          <img src={product.imageUrl} />
        </div>
        <div className="subtitle is-6 has-text-weight-light">
          {product.description}
          <br />
          <h1 className="has-text-weight-semibold">
            Price: ${(product.price / 100).toFixed(2)}
          </h1>
        </div>
        {/* <Button
          class="button is-primary"
          productId={product.id}
          productPrice={product.price}

          text="Add To Cart"
        /> */}
        <button
          type="submit"
          onClick={() => {
            {
              // this.props.order[0].products.length
              //   ?
              this.props.increaseQuantity(
                (this.props.order[0].products[0].orderDetail.quantity =
                  this.props.order[0].products[0].orderDetail.quantity + 1),
                product.id,
                product.price
              )

              // : this.props.addProduct(product.id, product.price)
            }
          }}
        >
          AddToCart
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    product: state.product,
    user: state.user,
    order: state.order
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(getSingleProductThunk(id)),
    editProduct: (id, product) =>
      dispatch(updateSingleProductThunk(id, product)),
    getCart: () => dispatch(getCartThunk()),
    increaseQuantity: (id, quantity, price) =>
      dispatch(increaseProductThunk(id, quantity, price))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
