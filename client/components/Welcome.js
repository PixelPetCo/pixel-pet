import React from 'react'
import { connect } from 'react-redux'
import Landing from './Landing'
import Home from './Home'
import Adopt from './Adopt'

// Welcome: a landing page for unauthenticated users
const Welcome = props => {
  return !props.user.id ? (
    <Landing />
  ) : !props.user.petModel ? (
    <Adopt />
  ) : (
    // Home: home/landing page for the authenticated users when logged in
    <Home />
  )
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState, null)(Welcome)
