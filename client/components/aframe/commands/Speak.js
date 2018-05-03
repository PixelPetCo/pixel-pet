import React from 'react'

import Head from '../bodyParts/Head'
import Body from '../bodyParts/Body'
import Jaw from '../bodyParts/Jaw'
import PawLeftFront from '../bodyParts/PawLeftFront'
import PawRightFront from '../bodyParts/PawRightFront'
import PawLeftHind from '../bodyParts/PawLeftHind'
import PawRightHind from '../bodyParts/PawRightHind'

const Speak = props => {
  const jawAnimation = (
    <a-animation
      attribute="position"
      rotation="45 0 0"
      dur="2000"
      dir='alternate'
      easing="linear"
      repeat="indefinite"
      from="0 0.290 -0.892"
      to="0 0.2 -0.892"
    />
  )
  return (
    <a-entity>
      <Head />
      <Body />
      <Jaw animation={jawAnimation} />
      <PawLeftFront />
      <PawRightFront />
      <PawLeftHind />
      <PawRightHind />
    </a-entity>
  )
}

export default Speak
