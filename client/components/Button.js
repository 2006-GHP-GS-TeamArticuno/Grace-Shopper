import React from 'react'

class Button extends React.Component {
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
  render() {
    const cart = document.getElementById('cart')
    return (
      <div>
        <button
          type="submit"
          onClick={() => {
            this.increment()
            cart.innerHTML = this.state.count
          }}
        >
          Add to Cart
        </button>
      </div>
    )
  }
}

export default Button
