import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'

// Welcome: a landing page for unauthenticated users
const Welcome = (props) => (
  !props.user.id ? (
    <div>
      <h1>Welcome to PixelPet!</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Register</Link>
        </li>
      </ul>
    </div>
  )
    :
    // Home: home/landing page for the authenticated users when logged in
    <Home />
)

const mapState = ({ user }) => ({
  user
})


export default connect(mapState, null)(Welcome)
