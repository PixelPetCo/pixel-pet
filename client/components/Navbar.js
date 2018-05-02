import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'
import { connect } from 'react-redux'

const Navbar = props =>
  !!props.user.id && (
    <nav className="row center-y">
      <Link to="/">
        <img id="logo" src="/favicon.ico" />
      </Link>
      <p>Welcome back, {props.user.name || props.user.email}!</p>
      <AuthLink to="/account">Account</AuthLink>
      <AuthLink to="/">
        <Logout />
      </AuthLink>
    </nav>
  )

const mapState = ({ user }) => ({
  user
})

export default connect(mapState)(Navbar)
