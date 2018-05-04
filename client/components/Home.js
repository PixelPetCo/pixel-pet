import React from 'react'
import Button from 'muicss/lib/react/button';

// Home: there's no place like it (as long as you've logged in).
const Home = () => (
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

export default Home
