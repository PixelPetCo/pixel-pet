import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'

const Navbar = props => {
  const identifier =
    process.env.NODE_ENV === 'development'
      ? 'PixelPet Team'
      : props.user.name || props.user.email
  return !props.user.id && process.env.NODE_ENV === 'production' ? (
    <div />
  ) : (
    <AppBar className="row center-y" style={style}>
      <p>Welcome back, {identifier}!</p>
      <Link to="/">
        <img id="logo" src="/favicon.ico" />
      </Link>
      <AuthLink to="/account">Account</AuthLink>
      <AuthLink to="/">
        <Logout />
      </AuthLink>
    </AppBar>
  )
}

const style = {
  backgroundColor: "#ffffff"
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState)(Navbar)
