import React from 'react'
class EditProduct extends React.Component {
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
    this.props.editProduct(this.props.productId, this.state)
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
          Edit product <br />
          <br />
          <input
            className="input"
            placeholder="enter new name here"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />
          <input
            className="input"
            placeholder="enter new price here"
            type="text"
            name="price"
            onChange={this.handleChange}
            value={this.state.price}
          />
          <input
            className="input"
            placeholder="enter new quantity here"
            type="text"
            name="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />
          <input
            className="input"
            placeholder="enter new descriprion here"
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

export default EditProduct
