import React from 'react'
import { connect } from 'react-redux'

export const animate = (animation, component) => {
  try {
    const animations = require(`./animations/${component}/${animation}`)
    return (
      animations &&
      animations.default.map((elem, i) =>
        React.createElement('a-animation', { ...elem, key: i.toString() })
      )
    )
  } catch (error) {
    return []
  }
}

const PetModel = props => {
  const model = props.user.petModel
  const Torso = require(`./${model}/Torso`).default
  const PawLeftFront = require(`./${model}/PawLeftFront`).default
  const PawRightFront = require(`./${model}/PawRightFront`).default
  const PawLeftHind = require(`./${model}/PawLeftHind`).default
  const PawRightHind = require(`./${model}/PawRightHind`).default

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

const mapState = ({ user }) => ({ user })

export default connect(mapState)(PetModel)
