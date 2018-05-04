import React, { Component } from 'react'
import PetModel from './components/aframe/PetModel'

export default class Main3DModel extends Component {
  state = {
    emotion: 'happy',
    command: ''
  }
  render = () => {
    return (
      <a-scene>
        <PetModel mood={this.state.emotion} command={this.state.command} />

        {/* <a-plane
          rotation="-90 0 0"
          color="#CCCCCC"
          height="20"
          width="20"
        >
        </a-plane> */}

        <a-light
          // position="-1 1 0" // top left
          // target
          type="directional; castShadow:true;"
          color="#FFF"
          intensity="1"
        />

        <a-camera id="user-view" wasd-controls look-controls>
          <a-entity
            cursor="fuse: true; fuseTimeout: 500"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat"
          />
        </a-camera>
      </a-scene>
    )
  }
}

// Emotions + colors
// happy, sad, mad

// Commands
// jump, sit, roll-over, spin, lie-down, shake hands, clap, beg, speak

// Clicking on pet causes it to emit sound and/or emotion action

// Future features
// petting also produces action from pet
