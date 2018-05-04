import React, { Component } from 'react'
import emotions from './animations/emotions'
import commands from './animations/commands'
// import {
//   Head,
//   Body,
//   Jaw,
//   PawLeftFront,
//   PawRightFront,
//   PawLeftHind,
//   PawRightHind
// } from './bodyParts'
import Head from './bodyParts/Head'
import Body from './bodyParts/Body'
import Jaw from './bodyParts/Jaw'
import PawLeftFront from './bodyParts/PawLeftFront'
import PawRightFront from './bodyParts/PawRightFront'
import PawLeftHind from './bodyParts/PawLeftHind'
import PawRightHind from './bodyParts/PawRightHind'

class PetModel extends Component {
  state = {
    animations: {}
  }

  componentDidMount = () => {
    let animations
    let trigger = this.props.command || this.props.mood
    switch (trigger) {
      case 'happy':
        animations =
          emotions.happy[Math.floor(Math.random() * emotions.happy.length)]
            .animations
        break
      case 'speak':
        animations = commands.speak
        break
      default:
        animations = {}
    }
    this.setState({ animations })
  }

  componentWillReceiveProps = props => {
    let animations
    let trigger = props.command || props.mood
    switch (trigger) {
      case 'happy':
        animations =
          emotions.happy[Math.floor(Math.random() * emotions.happy.length)]
            .animations
        break
      case 'speak':
        animations = commands.speak
        break
      default:
        animations = {}
    }
    this.setState({ animations })
  }

  render = () => (
    <a-entity>
      <Head animation={this.state.animations.head} />
      <Body animation={this.state.animations.body} />
      <Jaw animation={this.state.animations.jaw} />
      <PawLeftFront animation={this.state.animations.pawLeftFront} />
      <PawRightFront animation={this.state.animations.pawRightFront} />
      <PawLeftHind animation={this.state.animations.pawLeftHind} />
      <PawRightHind animation={this.state.animations.pawRightHind} />
    </a-entity>
  )
}

export default PetModel

// body shades
const lightPurple = 'shader: flat; color: #513797'
const darkPurple = 'shader: flat; color: #291B4E'
const black = 'shader: flat; color: #000'
const white = 'shader: flat; color: white'
