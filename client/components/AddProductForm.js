import React, {Component} from 'react'
export default class AddProductForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      quantity: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addProduct(this.state)
    this.setState({
      name: '',
      price: '',
      quantity: '',
      description: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Add new product
          <br />
          <input
            className="input"
            placeholder="enter product name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            className="input"
            placeholder="enter product price"
            type="text"
            name="price"
            onChange={this.handleChange}
            value={this.state.price}
          />
          <input
            className="input"
            placeholder="enter product quantity"
            type="text"
            name="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />
          <input
            className="input"
            placeholder="enter product description"
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
