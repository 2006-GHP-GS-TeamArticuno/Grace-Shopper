import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const SignUp = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="has-text-centered">
      <img id="allBanner" src="FormBanner.png" />
      <form onSubmit={handleSubmit} name={name}>
        <div className="field">
          <label className="label" htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" className="input" />
        </div>

        <br />

        <div>
          <label className="label" htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" className="input" />
        </div>

        <br />

        <div>
          <label className="label" htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" className="input" />
        </div>

        <br />

        <div>
          <label className="label" htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" className="input" />
        </div>

        <br />

        <div>
          <button type="submit" className="button is-primary">
            {displayName}
          </button>
        </div>

        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/* 
      <a href="/auth/google" className="button is-info">
        {displayName} with Google
      </a> */}

      <br />
      <br />
    </div>
  )
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      dispatch(authSignUp(firstName, lastName, email, password, formName))
    }
  }
}

export default connect(mapSignup, mapDispatch)(SignUp)

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
