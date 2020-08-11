import React from 'react'
import {connect} from 'react-redux'
import {
  getAllProductsThunk,
  deleteProductThunk,
  addProductThunk
} from '../store/allProducts'
// import {Link} from 'react-router-dom'
import Product from './Product'
import AddProductForm from './AddProductForm'
class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  render() {
    const products = this.props.products
    console.log('AAAAA products props', products)
    return (
      <div className="has-text-centered">
        <img id="allBanner" src="All-Banner.png" />
        {this.props.user.isAdmin && (
          <AddProductForm addProduct={this.props.addProduct} />
        )}
        <div className="columns is-multiline is-centered">
          {this.props.products || this.props.products !== undefined
            ? this.props.products.map(product => {
                return (
                  <div>
                    {product !== undefined ? (
                      <Product
                        key={product.id}
                        product={product}
                        user={this.props.user}
                        removeProduct={this.props.removeProduct}
                      />
                    ) : null}
                  </div>
                )
              })
            : null}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProductsThunk()),
    removeProduct: id => dispatch(deleteProductThunk(id)),
    addProduct: product => dispatch(addProductThunk(product))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
