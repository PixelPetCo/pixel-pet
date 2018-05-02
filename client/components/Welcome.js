import React from 'react'
import { Link } from 'react-router-dom'

// Welcome: a landing page for unauthenticated users
const Welcome = () => (
  <div>
    <h1>Welcome to PixelPet!</h1>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Register</Link>
      </li>
    </ul>
  </div>
)

export default Welcome
