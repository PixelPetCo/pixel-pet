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

  render = () => {
    const head = this.state.animations.head
    const body = this.state.animations.body
    const jaw = this.state.animations.jaw
    const pawLeftFront = this.state.animations.pawLeftFront
    const pawRightFront = this.state.animations.pawRightFront
    const pawLeftHind = this.state.animations.pawLeftHind
    const pawRightHind = this.state.animations.pawRightHind
    return (
      <a-entity>
        <Head animation={head && head.map(animation => animation)} />
        <Body animation={body && body.map(animation => animation)} />
        <Jaw animation={jaw && jaw.map(animation => animation)} />
        <PawLeftFront
          animation={pawLeftFront && pawLeftFront.map(animation => animation)}
        />
        <PawRightFront
          animation={pawRightFront && pawRightFront.map(animation => animation)}
        />
        <PawLeftHind
          animation={pawLeftHind && pawLeftHind.map(animation => animation)}
        />
        <PawRightHind
          animation={pawRightHind && pawRightHind.map(animation => animation)}
        />
      </a-entity>
    )
  }
}

export default PetModel

// body shades
const lightPurple = 'shader: flat; color: #513797'
const darkPurple = 'shader: flat; color: #291B4E'
const black = 'shader: flat; color: #000'
const white = 'shader: flat; color: white'
