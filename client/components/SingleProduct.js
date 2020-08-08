import React from 'react'
import {connect} from 'react-redux'
import {
  getSingleProductThunk,
  updateSingleProductThunk
} from '../store/singleProduct'
import Button from './Button'
import EditProduct from './EditProduct'
class SingleProduct extends React.Component {
  constructor() {
    super()
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
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleProduct(id)
  }
  render() {
    const cart = document.getElementById('cart')
    const product = this.props.product
    return (
      <div className="singleProduct">
        <h1>Its single product</h1>
        {this.props.user.isAdmin && (
          <EditProduct
            productId={product.id}
            editProduct={this.props.editProduct}
          />
        )}

        <div>{product.name}</div>
        <div>
          <img src={product.imageUrl} />
        </div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <Button
          productId={product.id}
          productPrice={product.price}
          text="Add To Cart"
          // type="submit"
          // onClick={() => {
          //   this.increment()
          //   cart.innerHTML = this.state.count
          // }}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    product: state.product,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(getSingleProductThunk(id)),
    editProduct: (id, product) =>
      dispatch(updateSingleProductThunk(id, product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
