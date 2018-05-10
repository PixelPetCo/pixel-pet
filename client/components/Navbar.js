import React from 'react'
import { connect } from 'react-redux'
import Pop from './Pop'
import AppBar from 'material-ui/AppBar'

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
      <p>Welcome back, {identifier}!</p>
      <img id="logo" src="/favicon.ico" />
    </AppBar>
  )
}

const style = {
  height: '8%'
}

const mapState = ({ user }) => ({
  user
})

export default connect(mapState)(Navbar)
