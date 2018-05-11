import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
const leftButtonStyle = {
  marginRight: 80,
  marginTop: 50
}
const rightButtonStyle = {
  marginLeft: 80,
  marginTop: 50
}

const Landing = () => {
  return (
    <div className="center">
      <h1 className="pixel-font center">Welcome to PixelPet!</h1>
      <Link to="/login">
        <RaisedButton label="Login" primary={true} style={leftButtonStyle} />
      </Link>
      <Link to="/signup">
        <RaisedButton
          label="Sign Up"
          secondary={true}
          style={rightButtonStyle}
        />
      </Link>
    </div>
  )
}

export default Landing
