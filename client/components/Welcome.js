import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

import Home from './Home'

// Welcome: a landing page for unauthenticated users
const Welcome = props =>
  !props.user.id ? (
    <div>
      <h1>Welcome to PixelPet!</h1>
      <ul>
        <Link to="/login">
          <RaisedButton label="Login" primary={true} style={style} />
        </Link>
        <Link to="/signup">
          <RaisedButton label="Sign Up" secondary={true} style={style} />
        </Link>
      </ul>
    </div>
  ) : (
    // Home: home/landing page for the authenticated users when logged in
    <Home />
  )

const style = {
  margin: 12
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState, null)(Welcome)
