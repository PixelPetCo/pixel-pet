import React, { Component } from 'react'
import PetModel from './PetModel'
import { connect } from 'react-redux'

class ModelScene extends Component {
  componentDidUpdate = () => {
    let scriptString
    let animation = this.props.chat.command || this.props.chat.mood
    switch (animation) {
      case 'anger':
        scriptString = `
          var head = document.querySelector('#head');
          var pawStompHeight = document.querySelector('#paw-stomp-height');
          pawStompHeight.addEventListener('animationend', function() {
            head.emit('startshake');
          })`
        break
      default:
        scriptString = ''
    }
    const scriptTag = document.createElement('script')
    scriptTag.type = 'text/javascript'
    scriptTag.async = true
    scriptTag.innerHTML = scriptString
    document.body.appendChild(scriptTag)
  }

  render = () => {

    let animation = this.props.chat.command || this.props.chat.mood
    return (
      <a-scene
        environment="preset: forest; groundTexture: checkerboard; groundColor: #8acca7; groundColor2: #b5fce1"
        vr-mode-ui="enabled: false"
      >
        <PetModel animation={animation} />

        <a-light color="#FFF" intensity="1" />

        <a-entity position="0.8 -0.8 0.6" rotation="0 20 0">
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

const mapState = ({ chat }) => ({ chat })

export default connect(mapState)(ModelScene)
