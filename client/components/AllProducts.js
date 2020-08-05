import React from 'react'
import {connect} from 'react-redux'
import {getAllProductsThunk} from '../store/allProducts'

class AllProducts extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getAllProducts()
  }
  render() {
    const products = this.props.products
    return (
      <div>
        <h1>All packages</h1>
        {products &&
          products.map(product => {
            return (
              <div key={product.id}>
                {product.name}
                {product.price}
                {product.imageUrl}
              </div>
            )
          })}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products
})
const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProductsThunk())
})
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
