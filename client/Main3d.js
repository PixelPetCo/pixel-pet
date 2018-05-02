import React, { Component } from 'react'

export default class Main3DModel extends Component {
  render () {
    return (
      <a-scene>

        <a-box
          color="tomato"
          depth="0.3"
          height="0.3"
          width="0.3"
          position="0 2 -2"
        >
        </a-box>

        <a-plane
          rotation="-90 0 0"
          color="#CCC"
          height="20"
          width="20"
        >
        </a-plane>

        <a-light
          // position="-1 1 0" // top left
          type="directional"
          color="#FFF"
          intensity="1"
          target
        >
        </a-light>

        <a-camera
          id="user-view"
          wasd-controls
          look-controls
        >
          <a-entity
            cursor="fuse: true; fuseTimeout: 500"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat"
          >
          </a-entity>
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
