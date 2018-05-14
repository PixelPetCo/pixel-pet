import React from 'react'
import Jaw from './Jaw'
import { animate } from '../PetModel'

const Head = props => {
  return (
    <a-entity
      id="head"
      position="0.12789000425531563 0.12610999574468434 0.388331139133306"
      rotation="0 0 -45"
    >
      <a-sphere
        id="head-base"
        material="shader:flat;color:#484D49"
        radius=".25"
        position=""
        geometry=""
      >
        {animate(props.animation, 'head/head_base')}
      </a-sphere>

      {/* <a-box
        id="snout"
        material="shader:flat;color:#291B4E"
        depth="0.14"
        height="0.18"
        width="0.2"
        position="0 -0.11923910006574229 0.29267250124366273"
        geometry=""
        rotation=""
      /> */}

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
      <a-tetrahedron
        id="ear-right"
        material="shader:flat;color:#303331"
        rotation="36.24 49 2.961"
        radius=".15"
        position="-0.16 0.200 0.042"
        geometry=""
      />

      <a-tetrahedron
        id="ear-inner-right"
        material="shader:flat;color:#F8ABA3"
        rotation="36 62.90 0"
        radius=".05"
        position="-0.16 0.212 0.098"
        geometry=""
      />

      <a-tetrahedron
        id="ear-left"
        material="shader:flat;color:#303331"
        rotation="43.65 156.1 -173"
        radius=".15"
        position="0.16 0.200 0.042"
        geometry=""
      />

      <a-tetrahedron
        id="ear-inner-left"
        material="shader:flat;color:#F8ABA3"
        rotation="-45.5 -3.005 -16.3"
        radius=".05"
        position="0.179 0.217 0.102"
        geometry=""
      />

      <a-ring
        id="eye-right"
        position="-0.08 0.078 0.230"
        rotation="-18.9 -14.5 -28.9"
        radius-inner="0.02"
        radius-outer="0.05"
        segments-theta="48"
        material="color: #32CD32; emissive: #78A23C"
      />

      <a-sphere
        id="pupil-right"
        position="-0.08 0.074 0.230"
        rotation="-9.12 -22.4 1.317"
        scale="1 1.5 1"
        material="shader:flat;color:#000000"
        radius=".025"
        geometry=""
      />

      <a-ring
        id="eye-left"
        position="0.101 0.083 0.227"
        rotation="-21.2 21.18 -31.0"
        radius-inner="0.02"
        radius-outer="0.05"
        segments-theta="48"
        material="color: #32CD32; emissive: #78A23C"
      />

      <a-sphere
        id="pupil-left"
        position="0.101 0.074 0.218"
        rotation="-9.12 -22.4 1.317"
        scale="1 1.5 1"
        material="shader:flat;color:#000000"
        radius=".025"
        geometry=""
      />

      <a-tetrahedron
        id="nose"
        material="shader:flat;color:#F8ABA3"
        rotation="-43.3 -174 48.87"
        radius=".05"
        position="0.012 0.007 0.240 "
        geometry=""
      />

        <Jaw animation={props.animation} />
        {animate(props.animation, 'head')}
    </a-entity>
      )
    }

    export default Head
