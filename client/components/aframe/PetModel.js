import React from 'react'
import { connect } from 'react-redux'

export const animate = (animation, component) => {
  try {
    const animations = require(`./animations/${component}/${animation}`).default
    return animations && animations.map(elem => elem)
  } catch (error) {
    return []
  }
}

const PetModel = props => {
  const Torso = require(`./${props.model.name}/Torso`).default
  const PawLeftFront = require(`./${props.model.name}/PawLeftFront`).default
  const PawRightFront  = require(`./${props.model.name}/PawRightFront`).default
  const PawLeftHind  = require(`./${props.model.name}/PawLeftHind`).default
  const PawRightHind  = require(`./${props.model.name}/PawRightHind`).default

  return (
    <a-entity id="body">
      <Torso animation={props.animation} />
      <PawLeftFront animation={props.animation} />
      <PawRightFront animation={props.animation} />
      <PawLeftHind animation={props.animation} />
      <PawRightHind animation={props.animation} />
      {animate(props.animation, 'body')}
    </a-entity>
  )
}

const mapState = ({ model }) => ({ model })

export default connect(mapState)(PetModel)
