import React from 'react'
import Head from './circleCatModel/Head'
import Torso from './circleCatModel/Torso'
import PawLeftFront from './circleCatModel/PawLeftFront'
import PawRightFront from './circleCatModel/PawRightFront'
import PawLeftHind from './circleCatModel/PawLeftHind'
import PawRightHind from './circleCatModel/PawRightHind'

const CircleCatModel = props => {
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

export const animate = (animation, component) => {
  try {
    const animations = require(`./animations/${component}/${animation}`)
    return animations && animations.default.map(elem => elem)
  } catch (error) {
    return []
  }
}

export default CircleCatModel
