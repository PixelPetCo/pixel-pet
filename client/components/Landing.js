import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
const style = {
  margin: 12
}

const Landing = () => {
  return (
    <div>
      <h1>Welcome to PixelPet!</h1>
      <ul>
        <Link to="/login">
          <RaisedButton label="Login" primary={true} style={style} />
        </Link>
        <Link to="/signup">
          <RaisedButton label="Sign Up" secondary={true} style={style} />
        </Link>
      </ul>
    </div>
  )
}

export default Landing
