import React from 'react'
import {Link} from 'react-router-dom'
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img src="https://i.pinimg.com/564x/64/55/2e/64552ea8642df46fc9581cff194d7037.jpg" />
        <p style={{textAlign: 'center'}}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    )
  }
}
export default NotFoundPage
