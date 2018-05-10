import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/user'

const Logout = ({ logout }) => <span onClick={logout}>Sign Out</span>

const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatch)(Logout)
