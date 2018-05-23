import React from 'react'
import { connect } from 'react-redux'
import Landing from './Landing'
import Home from './Home'
import HomeNoSpeech from './HomeNoSpeech'
import BrowserDetection from 'react-browser-detection'

const browserHandler = {
  chrome: () => <Home />,
  default: () => <HomeNoSpeech />
}

// Welcome: a landing page for unauthenticated users
const Welcome = props => {
  return !props.user.id ? (
    <Landing />
  ) : (
    // Home: home/landing page for the authenticated users when logged in
    <BrowserDetection>{browserHandler}</BrowserDetection>
  )
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState, null)(Welcome)
