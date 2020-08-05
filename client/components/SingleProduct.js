import React from 'react'
import {connect} from 'react-redux'
import {getSingleProductThunk} from '../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleProduct(id)
  }
  render() {
    const product = this.props.product
    console.log('the single product', product)
    return (
      <div className="singleProduct">
        <h1>Its single product</h1>

        <div>{product.name}</div>
        <div>
          <img src={product.imageUrl} />
        </div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <div> In stock: </div>
        <div> In cart: 0 </div>
        <button>Add to Cart</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    product: state.product
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(getSingleProductThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
