import React from 'react'
import Torso from './bodyParts/Torso'
import PawLeftFront from './bodyParts/PawLeftFront'
import PawRightFront from './bodyParts/PawRightFront'
import PawLeftHind from './bodyParts/PawLeftHind'
import PawRightHind from './bodyParts/PawRightHind'

const PetModel = props => {
  return (
    <a-entity id="body">
      <Torso animation={props.animation} animate={animate} />
      <PawLeftFront animation={props.animation} animate={animate} />
      <PawRightFront animation={props.animation} animate={animate} />
      <PawLeftHind animation={props.animation} animate={animate} />
      <PawRightHind animation={props.animation} animate={animate} />
    </a-entity>
  )
}

const animate = (animation, component) => {
  let animations
  switch (animation) {
    case 'joy':
      try {
        animations = require(`./animations/${component}/joy`)
        return animations && animations.default.map(elem => elem)
      } catch (error) {
        return
      }
    case 'sadness':
      try {
        animations = require(`./animations/${component}/sadness`)
        return animations && animations.default.map(elem => elem)
      } catch (error) {
        return
      }
    case 'speak':
      try {
        animations = require(`./animations/${component}/speak`)
        return animations.default.map(elem => elem)
      } catch (error) {
        return
      }
    case 'fear':
      try {
        animations = require(`./animations/${component}/fear`)
        return animations.default.map(elem => elem)
      } catch (error) {
        return
      }
    case 'analytical':
      try {
        animations = require(`./animations/${component}/analytical`)
        return animations.default.map(elem => elem)
      } catch (error) {
        return
      }
    default:
      return []
  }
}

export default PetModel
