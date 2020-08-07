import React from 'react'
import {connect} from 'react-redux'

class CheckoutConfirmation extends React.Component {
  render() {
    return (
      <div align="center">
        <div>Thank you for your order!</div>
        <div>Your order is #</div>
      </div>
    )
  }
}

export default connect(null, null)(CheckoutConfirmation)
