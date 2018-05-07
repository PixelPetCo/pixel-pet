import React, { Component } from 'react'
import emotions from './animations/emotions'
import commands from './animations/commands'

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
      case 'joy':
        animations =
          emotions.joy[Math.floor(Math.random() * emotions.joy.length)]
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
      case 'joy':
        animations =
          emotions.joy[Math.floor(Math.random() * emotions.joy.length)]
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
    //const jaw = this.state.animations.jaw
    const pawLeftFront = this.state.animations.pawLeftFront
    const pawRightFront = this.state.animations.pawRightFront
    const pawLeftHind = this.state.animations.pawLeftHind
    const pawRightHind = this.state.animations.pawRightHind
    return (
      <a-entity id="pixel-pet">
        <Body animation={body && body.map(animation => animation)} />
        {/* <Jaw animation={jaw && jaw.map(animation => animation)} /> */}
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
