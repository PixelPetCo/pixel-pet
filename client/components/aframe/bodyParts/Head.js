import React from 'react'
import Jaw from './Jaw'

const Head = props => {
  return (
    <a-entity
      id="head"
      position="0.12789000425531563 0.12610999574468434 0.388331139133306"
      rotation="0 0 -45"
    >
      <a-box
        id="head-base"
        material="shader:flat;color:#513797"
        depth="0.45"
        height="0.4"
        width="0.4"
        position=""
        geometry=""
      />
      <a-box
        id="snout"
        material="shader:flat;color:#291B4E"
        depth="0.14"
        height="0.18"
        width="0.2"
        position="0 -0.11923910006574229 0.29267250124366273"
        geometry=""
        rotation=""
      />
      <a-box
        id="nostril-right"
        material="shader:flat;color:#000"
        depth="0.02"
        height="0.04"
        width="0.02"
        position="-0.04 -0.043 0.356"
        geometry=""
      />
      <a-box
        id="nostril-left"
        material="shader:flat;color:#000"
        depth="0.020"
        height="0.04"
        width="0.02"
        position="0.04 -0.045 0.356"
        geometry=""
      />
      <a-entity
        id="smile"
        material="shader:flat;color:#000"
        geometry="primitive:torus;radiusTubular:0.1;arc:180"
        rotation="0 0 180"
        radiustubular="0.0"
        scale="0.05 0.05 0.05"
        position="0.01 0.3720996014761166 -0.77"
        visible="false"
      />
      <a-box
        id="ear-left"
        material="shader:flat;color:#513797"
        rotation="45 0 0"
        depth="0.140"
        height="0.02"
        width="0.09"
        position="0.14881709598662096 0.3 -0.32160633752978557"
        geometry=""
      />

      <a-box
        id="ear-right"
        material="shader:flat;color:#513797"
        rotation="45 0 0"
        depth="0.140"
        height="0.02"
        width="0.09"
        position="-0.172 0.296 -0.338"
        geometry=""
      />
      <a-box
        id="sclera-right"
        material="shader:flat;color:white"
        rotation="0 90 0"
        depth="0.150"
        height="0.150"
        width="0.01"
        position="-0.11 0.067 0.221"
        geometry=""
      />
      <a-box
        id="sclera-left"
        material="shader:flat;color:white"
        rotation="0 90 0"
        depth="0.150"
        height="0.150"
        width="0.01"
        position="0.11 0.067 0.221"
        geometry=""
      />
      <a-box
        id="pupil-left"
        material="shader:flat;color:#000"
        rotation="0 90 0"
        depth="0.1"
        height="0.1"
        width="0.01"
        position="0.11 0.042 0.226"
        geometry=""
      />
      <a-box
        id="pupil-right"
        material="shader:flat;color:#000"
        rotation="0 90 0"
        depth="0.1"
        height="0.1"
        width="0.01"
        position="-0.11104977197930957 0.042 0.226"
        geometry=""
      />
      <Jaw animation={props.animation} animate={props.animate} />
      {props.animate(props.animation, 'head')}
    </a-entity>
  )
}

export default Head

// {props.animation}
