import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateUser } from '../store/user'

export class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const newInfo = Object.keys(this.state).reduce((obj, key) => {
      if (this.state[key]) obj[key] = this.state[key]
      return obj
    }, {})
    const userId = this.props.user.id
    this.props.editUser(userId, newInfo)
  }

  render() {
    const { name, email } = this.props.user
    const password = ''

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              name="password"
              placeholder={password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  editUser: async (userId, user) => {
    await dispatch(updateUser(userId, user))
    ownProps.history.push(`/account`)
  }
})

export default connect(null, mapDispatch)(UserForm)
