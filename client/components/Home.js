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

  render() {
    return (
      <div className="has-text-centered">
        <br />
        <h1 className="title is-3">Introducing:</h1>
        <div>
          <img id="homeImg" src="PARTYBOX.png" />
          {/* <h2 class="subtitle is-5 has-text-weight-medium">Your social distancing party solution!</h2> */}
          {/* <h4 class="has-text-weight-light">WE BRING THE PARTY TO YOU VIRTUALLY!</h4> */}
          <div className="has-text-weight-light">
            <h2 className="subtitle is-5 has-text-weight-medium">
              Your social distancing party solution!
            </h2>
            Get-togethers look a little bit different these days...
            <br />
            Instead of meeting at our favorite venues, we're meeting in our
            "favorite" video chats 😭
            <br />
            We're here to bring you a party filled box, so you can party in your
            (video) box!
            <br />
            <br />
            <div>
              <img
                id="homeImg2"
                src="https://ca-times.brightspotcdn.com/dims4/default/9321c96/2147483647/strip/true/crop/2400x1350+0+125/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg"
              />
            </div>
          </div>
          {/* <h3>Let's get started!</h3> */}
          {/* <Link to="/products">See all of our fabulous fun packages!</Link> */}
          <div>
            <button
              className="button is-primary"
              type="submit"
              onClick={this.handleClick}
            >
              START PARTYING
            </button>
            {this.state.isClicked ? (
              <Redirect from="/home" to="/products" />
            ) : null}
          </div>
        </div>
        <br />
        <br />
      </div>
    )
  }
}
export default Home
