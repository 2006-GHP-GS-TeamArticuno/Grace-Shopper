import React from 'react'

class CheckoutConfirmation extends React.Component {
  render() {
    return (
      <div align="center">
        <br />
        <h1 className="title is-5" id="singleTitle">
          {' '}
          Thank you for your Order, it's almost...
          <br />
          <img
            id="welcomeIMG"
            src="https://media1.giphy.com/media/f9RHPRFxJhKTF0MQth/giphy.gif?cid=ecf05e4797qn3f7690y9pidr7w208pgomccfzoj98sjt29uz&rid=giphy.gif"
          />
          <br />
          PARTY TIME!
        </h1>
      </div>
    )
  }
}

export default CheckoutConfirmation
