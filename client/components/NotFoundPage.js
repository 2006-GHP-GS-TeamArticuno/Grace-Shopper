import React from 'react'
import {Link} from 'react-router-dom'
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Go to Home </Link>
        <img
          align="center"
          id="notFoundImg"
          src="https://i.pinimg.com/564x/64/55/2e/64552ea8642df46fc9581cff194d7037.jpg"
        />
        <p style={{textAlign: 'center'}} />
      </div>
    )
  }
}
export default NotFoundPage
