import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const Product = props => {
  const product = props.product
  const isAdmin = props.user.isAdmin
  return (
    <div key={product.id}>
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
      {!!isAdmin && (
        <button
          className="button is-danger"
          type="submit"
          onClick={() => props.removeProduct(product.id)}
        >
          Remove Product
        </button>
      )}
    </div>
  )
}
export default Product
