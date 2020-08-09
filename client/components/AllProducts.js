import React from 'react'
import {connect} from 'react-redux'
import {
  getAllProductsThunk,
  deleteProductThunk,
  addProductThunk
} from '../store/allProducts'
import {Link} from 'react-router-dom'
import AddProductForm from './AddProductForm'
// import Navbar from './navbar'
class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  render() {
    const products = this.props.products
    console.log('the all products props', this.props)
    return (
      <div className="has-text-centered">
        {/* <h1 className="title is-size-3 has-text-centered has-text-primary">Pick Your Party</h1> */}
        {/* <br/> */}
        <img id="allBanner" src="All-Banner.png" />
        {this.props.user.isAdmin && (
          <AddProductForm addProduct={this.props.addProduct} />
        )}
        <div className="columns is-multiline is-centered">
          {products &&
            products.map(product => {
              return (
                <div className="column is-one-quarter" key={product.id}>
                  <div className="has-text-centered title is-6">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>{' '}
                  </div>
                  <div className="has-text-centered ">
                    {' '}
                    <img src={product.imageUrl} />
                  </div>
                  <div className="has-text-centered subtitle is-6 has-text-weight-light">
                    {' '}
                    {product.description}{' '}
                  </div>
                  <div className="has-text-centered has-text-weight-semibold">
                    {' '}
                    Price: ${(product.price / 100).toFixed(2)}{' '}
                  </div>
                  {this.props.user.isAdmin && (
                    <button
                      className="button is-danger"
                      type="submit"
                      onClick={() => this.props.removeProduct(product.id)}
                    >
                      Remove Product
                    </button>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('the state from all products', state)
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
