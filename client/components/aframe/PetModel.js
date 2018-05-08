import React, { Component } from 'react'
import emotions from './animations/emotions'
import commands from './animations/commands'

import Torso from './bodyParts/Torso'
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

  componentWillReceiveProps = nextProps => {
    if (nextProps) {
      // figure out how to compare to current props
      let animations
      let trigger = nextProps.command || nextProps.mood
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
  }

  render = () => {
    return (
      <a-entity id="body">
        <Torso mood={this.state.mood} command={this.state.command} />
        <PawLeftFront mood={this.state.mood} command={this.state.command} />
        <PawRightFront mood={this.state.mood} command={this.state.command} />
        <PawLeftHind mood={this.state.mood} command={this.state.command} />
        <PawRightHind mood={this.state.mood} command={this.state.command} />
      </a-entity>
    )
  }
}

export default PetModel
