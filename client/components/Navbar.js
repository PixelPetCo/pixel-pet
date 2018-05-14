import React from 'react'
import { connect } from 'react-redux'
import Pop from './Pop'
import AppBar from 'material-ui/AppBar'

const navStyle = {
  height: '8%',
  background: 'linear-gradient(60deg, #635FAB, #7B6EB8)'
}

const Navbar = props => {
  const identifier = props.user.name || props.user.email
  return !props.user.id ? (
    <div />
  ) : (
    <AppBar
      className="nav row center-y"
      title={<h3 className="pixel-font-white">PIXELPET</h3>}
      style={navStyle}
      iconElementLeft={<Pop />}
    >

      <p className="pixel-font-white">Welcome back, {identifier}!</p>
      <img id="logo" src="/favicon.ico" />
    </AppBar>
  )
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState)(Navbar)
