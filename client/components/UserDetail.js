import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class UserDetail extends Component {
  render() {
    const { id, name, email } = this.props.user
    return (
      <div>
        <div>
          <h1>{name}</h1>
          <h5>{email}</h5>
          <Link to={`/account/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default UserDetail
