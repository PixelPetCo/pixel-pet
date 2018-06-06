import React from 'react'
import { connect } from 'react-redux'
import Landing from './Landing'
import Home from './Home'
import HomeNoSpeech from './HomeNoSpeech'
import Adopt from './Adopt'
import BrowserDetection from 'react-browser-detection'

const browserHandler = {
  chrome: () => <Home />,
  default: () => <HomeNoSpeech />
}

const Welcome = props => {
  return !props.user.id ? (
    <Landing />
  ) : !props.user.petModel ? (
    <Adopt />
  ) : (
    <BrowserDetection>{browserHandler}</BrowserDetection>
  )
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState, null)(Welcome)
