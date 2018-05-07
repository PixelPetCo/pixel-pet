import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'
import { connect } from 'react-redux'

const Navbar = props => {
  const identifier =
    process.env.NODE_ENV === 'development'
      ? 'PixelPet Team'
      : props.user.name || props.user.email
  return !props.user.id && process.env.NODE_ENV === 'production' ? (
    <div />
  ) : (
    <nav className="row center-y">
      <Link to="/">
        <img id="logo" src="/favicon.ico" />
      </Link>
      <p>Welcome back, {identifier}!</p>
      <AuthLink to="/account">Account</AuthLink>
      <AuthLink to="/">
        <Logout />
      </AuthLink>
    </nav>
  )
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState)(Navbar)
