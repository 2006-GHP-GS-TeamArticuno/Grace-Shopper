import React from 'react'
import {connect} from 'react-redux'
import {getAllProductsThunk} from '../store/allProducts'
import {Link} from 'react-router-dom'
// import Navbar from './navbar'
import {getTotalCountThunk} from '../store/increment'
import Button from './Button'
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
    this.props.getCart()
  }
  render() {
    const products = this.props.products
    const cart = document.getElementById('cart')
    console.log('the all products cart', this.props.count)
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
                <Button
                // type="submit"
                // onClick={() => {
                //   this.increment()
                //   cart.innerHTML = this.state.count
                //   // console.log('value', cart.value)
                //   // console.log('COUNT', this.state.count)
                // }}
                />
              </div>
            )
          })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('the state from all products', state)
  return {
    products: state.products,
    count: state.cart.totalQuantity
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProductsThunk()),
    getCart: () => dispatch(getTotalCountThunk())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
