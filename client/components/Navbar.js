import React from 'react'
import { connect } from 'react-redux'
import Pop from './Pop'
import AppBar from 'material-ui/AppBar'
const style = {
  height: '8%'
}

const Navbar = props => {
  const identifier = props.user.name || props.user.email
  return !props.user.id ? (
    <div />
  ) : (
    <AppBar
      className="nav row center-y"
      style={style}
      iconElementLeft={<Pop />}
    >
      <h3 className="pixel-font left-logo">PIXELPET</h3>
      <img id="logo" src="/favicon.ico" />
      <p className="pixel-font">Welcome back, {identifier}!</p>
    </AppBar>
  )
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState)(Navbar)
