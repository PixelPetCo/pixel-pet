import React, { Component } from 'react'
import PetModel from './PetModel'

export default class ModelScene extends Component {
  render = () => {
    let animation = this.props.command || this.props.mood
    return (
      <a-scene>
        <a-assets>
          <img id="grassTexture" src="/grass.png" />
          <img id="skyTexture" src="/sky.png" />
        </a-assets>

        <PetModel animation={animation} />

        <a-plane
          material="shader: flat; src: #grassTexture"
          rotation="-90 0 0"
          height="20"
          width="20"
        />

        <a-sky material="shader: flat; src: #skyTexture" />

        <a-light color="#FFF" intensity="1" />

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
