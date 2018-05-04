import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from 'muicss/lib/react/button';


// Welcome: a landing page for unauthenticated users
const Welcome = (props) => (
  !props.user.id ? (
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
    :
    // Home: home/landing page for the authenticated users when logged in
    <main>
      <div id="translator">PixelPetSpeek Translator</div>
      <div id="a-frame">Companion component!</div>
      <div id="input-buttons">
        <Button variant="fab" color="accent">TXT</Button>
        <Button variant="fab" color="accent">MIC</Button>
        {/* <button id="toggle-text">TXT</button>
        <button id="toggle-mic">MIC</button> */}
      </div>
    </main>
)

const mapState = ({ user }) => ({
  user
})


export default connect(mapState, null)(Welcome)
