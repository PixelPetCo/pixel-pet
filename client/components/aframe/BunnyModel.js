import React from 'react'
import Head from './bunnyModel/Head'
import Torso from './bunnyModel/Torso'
import PawLeftFront from './bunnyModel/PawLeftFront'
import PawRightFront from './bunnyModel/PawRightFront'
import PawLeftHind from './bunnyModel/PawLeftHind'
import PawRightHind from './bunnyModel/PawRightHind'

const BunnyModel = props => {
  return (
    <a-entity id="body">
      {/* <Head animation={props.animation} /> */}
      <Torso animation={props.animation} />
      <PawLeftFront animation={props.animation} />
      <PawRightFront animation={props.animation} />
      <PawLeftHind animation={props.animation} />
      <PawRightHind animation={props.animation} />
    </a-entity>
  )
}

export const animate = (animation, component) => {
  try {
    const animations = require(`./animations/${component}/${animation}`)
    return animations && animations.default.map(elem => elem)
  } catch (error) {
    return []
  }
}

export default BunnyModel
