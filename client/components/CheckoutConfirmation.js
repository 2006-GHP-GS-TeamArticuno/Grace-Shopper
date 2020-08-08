import React from 'react'
import {connect} from 'react-redux'

class CheckoutConfirmation extends React.Component {
  render() {
    return (
      <div align="center">
        <div>Thank you for your order!</div>
        <img
          id="thanksfororderimg"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thank-you-for-shopping-card-gold-glitter-design-template-83a5fc519f7602061d59819caf371510_screen.jpg?ts=1561378062"
        />
        {/* <div>Your order is #</div> */}
      </div>
    )
  }
}

export default connect(null, null)(CheckoutConfirmation)
