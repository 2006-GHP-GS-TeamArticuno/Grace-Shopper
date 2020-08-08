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
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <h1 className="title is-5">Add new product</h1>

          <div>
            <input
              className="input"
              placeholder="Package Name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <br />

          <div>
            <input
              className="input"
              placeholder="Product Price"
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.state.price}
            />
          </div>
          <br />

          <div>
            <input
              className="input"
              placeholder="Product Qty"
              type="text"
              name="quantity"
              onChange={this.handleChange}
              value={this.state.quantity}
            />
          </div>
          <br />

          <div>
            <input
              className="input"
              placeholder="enter product description"
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <br />

          <button className="button is-primary" type="submit">
            Submit
          </button>
        </form>
        <br />
      </div>
    )
  }
}
