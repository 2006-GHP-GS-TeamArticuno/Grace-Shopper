import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
  // handleSubmit(){
  //   return <AllProducts />
  // }

  console.log('the props from', props)
  return (
    <div>
      <h1>Welcome to PartyBox!</h1>
      <h2>Your social distancing party solution</h2>
      <img src="PARTYBOX.png" />
      <div>
        <h4>WE BRING THE PARTY TO YOU VIRTUALLY!</h4>
        <div>
          Are you dreaming about an unforgetable experience by having fun remote
          with your friends,family,collegues or maybe someome else?
          <br />Okay,you are definately at the right place!<br />Go ahead and
          choose any package that suits you.<br />And we promise that you're
          gonna come back for more fun!:)
        </div>
        <h3>See all of our fabulous fun packages!</h3>
        {/* <Link to="/products">See all of our fabulous fun packages!</Link> */}
        <button type="submit" onClick={() => <Link to="/products" />} />
      </div>
    </div>
  )
}
export default Home
