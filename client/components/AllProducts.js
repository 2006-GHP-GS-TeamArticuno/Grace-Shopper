import React from 'react'
import {connect} from 'react-redux'
import {getAllProductsThunk} from '../store/allProducts'
import {Link} from 'react-router-dom'
import Navbar from './navbar'

class AllProducts extends React.Component {
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
    this.props.getAllProducts()
  }
  render() {
    const products = this.props.products
    const cart = document.getElementById('cart')
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
                <div>
                  {' '}
                  <img src={product.imageUrl} />
                </div>
                <div> {product.description} </div>
                <div> Price: {product.price} </div>
                <button
                  type="submit"
                  onClick={() => {
                    this.increment()
                    cart.innerHTML = this.state.count
                    console.log('value', cart.value)
                    console.log('COUNT', this.state.count)
                  }}
                >
                  Add to Cart
                </button>
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
