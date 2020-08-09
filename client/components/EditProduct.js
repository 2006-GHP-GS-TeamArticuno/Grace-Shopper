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
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <h1 className="title is-5">Update Product</h1>

          <div>
            <input
              className="input"
              placeholder="Update Name"
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
              placeholder="Update Price (*100)"
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
              placeholder="Update Qty"
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
              placeholder="Update Description"
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <br />

          <button className="button is-success is-light" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default EditProduct
