import React from 'react'
import Torso from './bodyParts/Torso'
import PawLeftFront from './bodyParts/PawLeftFront'
import PawRightFront from './bodyParts/PawRightFront'
import PawLeftHind from './bodyParts/PawLeftHind'
import PawRightHind from './bodyParts/PawRightHind'

export const animate = (animation, component) => {
  try {
    const animations = require(`./animations/${component}/${animation}`)
    return animations && animations.default.map(elem => elem)
  } catch (error) {
    return []
  }
}

const PetModel = props => {
  return (
    <a-entity id="body">
      <Torso animation={props.animation} />
      <PawLeftFront animation={props.animation} />
      <PawRightFront animation={props.animation} />
      <PawLeftHind animation={props.animation} />
      <PawRightHind animation={props.animation} />
    </a-entity>
  )
}

export default PetModel
