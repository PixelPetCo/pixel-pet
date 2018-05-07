import React, { Component } from 'react'
import PetModel from './PetModel'

export default class ModelScene extends Component {
  render = () => {
    console.log('props from model ', this.props)
    return (
      <a-scene>
        <PetModel mood={this.props.mood || ''} command={this.props.command || ''} />

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

        <a-entity position="1 -0.8 0.6">
          <a-camera id="user-view" wasd-controls look-controls>
            <a-entity
              cursor="fuse: true; fuseTimeout: 500"
              geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
              material="color: black; shader: flat"
            />
          </a-camera>
        </a-entity>
      </a-scene>
    )
  }
}

// Emotions + colors
// joy, sad, mad

// Commands
// jump, sit, roll-over, spin, lie-down, shake hands, clap, beg, speak

// Clicking on pet causes it to emit sound and/or emotion action

// Future features
// petting also produces action from pet
