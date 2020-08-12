import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="has-text-centered">
      <img id="allBanner" src="LOGIN.png" />
      <form onSubmit={handleSubmit} name={name}>
        <div className="field">
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

      {/* <a href="/auth/google" className="button is-info">
          {displayName} with Google
      </a> */}

      <br />
      <br />
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
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
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
