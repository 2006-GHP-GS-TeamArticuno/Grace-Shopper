import React from 'react'
import {Redirect} from 'react-router-dom'
import AllProducts from './AllProducts'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {isClicked: false}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState({
      isClicked: true
    })
  }

  render(){
  return (
     <div>
      <h1>Welcome to PartyBox!</h1>
      <h2>Your social distancing party solution</h2>
      <img src="PARTYBOX.png" />
        <div>
          <h4>WE BRING THE PARTY TO YOU VIRTUALLY!</h4>
          <div>
            Are you dreaming about an unforgetable experience by having fun
            remote with your friends,family,collegues or maybe someome else?
            <br />Okay,you are definately at the right place!<br />Go ahead and
            choose any package that suits you.<br />And we promise that you're
            gonna come back for more fun!:)
          </div>
          <h3>See all of our fabulous fun packages!</h3>
          {/* <Link to="/products">See all of our fabulous fun packages!</Link> */}
          <div>
            <button type="submit" onClick={this.handleClick}>
              Products
            </button>
            {this.state.isClicked ? (
              <Redirect from="/home" to="/products" />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
