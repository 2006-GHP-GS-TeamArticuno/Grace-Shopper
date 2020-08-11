import React from 'react'

//will be rendered from Cart Component
class Checkout extends React.Component {
  render() {
    return (
      <div align="center">
        <form>
          <input>Name</input>
          <input>Email</input>
          <input>Address</input>
          <button type="submit">Continue to payment</button>
          <button type="submit">Confirm</button>
        </form>
      </div>
    )
  }
}

export default Checkout
