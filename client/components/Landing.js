import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

const Landing = () => {
  return (
    <div className="center">
      <img id="logo-large" src="/favicon.ico" /><h1 className="pixel-font-white center">Welcome to PixelPet!</h1>
      <Link to="/login">
        <RaisedButton
          label="Login"
          primary={true}
          style={loginBtn}
        />
      </Link>
      <Link to="/signup">
        <RaisedButton
          label="Sign Up"
          secondary={true}
          style={signUpBtn}
        />
      </Link>
    </div>
  )
}

const loginBtn = {
  marginRight: 15,
  marginTop: 50
}
const signUpBtn = {
  marginLeft: 15,
  marginTop: 50
}

export default Landing
