import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth } from '../../store/user'

class Signup extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    const name = evt.target.name.value
    this.props.auth(email, password, name)
  }
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <div className="column">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="column">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className="column">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>

          <button type="submit">{this.props.type}</button>
          {this.props.error && <div>{this.props.error}</div>}
        </form>
        <form method="get" action="/auth/google">
          <button type="submit" className="btn bg-red white p1 rounded">
            Login with Google
          </button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    type: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => ({
  auth: (email, password, name) =>
    dispatch(auth({ email, password, name }, 'post'))
})

export default connect(mapState, mapDispatch)(Signup)
