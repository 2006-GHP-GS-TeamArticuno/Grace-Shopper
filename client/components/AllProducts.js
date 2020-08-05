import React from 'react'
import {connect} from 'react-redux'
import {getAllProductsThunk} from '../store/allProducts'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
    console.log('the props1 are', this.props)
  }
  render() {
    console.log('the preops are', this.props)
    const products = this.props.products
    return (
      <div>
        <h1>All packages</h1>
        {products &&
          products.map(product => {
            return (
              <div key={product.id}>
                <div>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>{' '}
                </div>
                <div> {product.description} </div>
                <div> Price: {product.price} </div>
                <div>
                  {' '}
                  <img src={product.imageUrl} />
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('the state', state)
  return {
    products: state.products
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProductsThunk())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
