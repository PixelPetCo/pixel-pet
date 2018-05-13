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
      <a-box
        id="head-base"
        material="shader:flat;color:#ffd1d1"
        depth="0.45"
        height="0.4"
        width="0.4"
        position=""
        geometry=""
      >
        {animate(props.animation, 'head/head_base')}
      </a-box>
      <a-box
        id="tooth-right"
        material="shader:flat;color:#fff"
        depth="0.13"
        height="0.03"
        width="0.08"
        position="0.048936793962452735 -0.17698910042742133 0.2310439490887265"
        rotation="90 0 0"
      />
      <a-box
        id="tooth-left"
        material="shader:flat;color:#efefef;"
        depth="0.13"
        height="0.03"
        width="0.08"
        position="-0.04066953710820101 -0.17698910042742133 0.2310439490887265"
        rotation="90 0 0"
      />
      <a-torus
        id="nose"
        material="shader:flat;color:#ff7777"
        arc="270"
        geometry="arc:360;segmentsTubular:3"
        radius="2"
        radius-tubular="3"
        position="0.0073417697842635965 0.12013805438214664 0.21293642338429458"
        scale="0.01 0.01 0.01"
        rotation="0 0 29.999999999999996"
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
      <a-torus
        id="ear-left"
        material="shader:flat;color:#ff7777"
        arc="270"
        geometry="arc:360;segmentsTubular:3"
        radius="2"
        radius-tubular="3"
        position="0.3632795919742391 -0.12373599041608907 -0.19766564808380793"
        scale="0.01 0.05 0.01"
        rotation="-29.999999999999996 90 0"
      />
      <a-torus
        id="ear-right"
        material="shader:flat;color:#ff7777"
        arc="270"
        geometry="arc:360;segmentsTubular:3"
        radius="2"
        radius-tubular="3"
        position="-0.3425792089299614 -0.12373599041608907 -0.19766564808380793"
        scale="0.01 0.05 0.01"
        rotation="29.999999999999996 90 0"
      />
      <a-torus
        id="pupil-left"
        material="shader:flat;color:#000"
        arc="270"
        geometry="arc:360"
        radius="5"
        radius-tubular="1"
        position="0.20395796339749916 0.07304086165417467 -0.07053940668460235"
        scale="0.008 0.008 0.008"
        rotation="0 90 0"
      />
      <a-torus
        id="pupil-right"
        material="shader:flat;color:#000"
        arc="270"
        geometry="arc:360"
        radius="5"
        radius-tubular="1"
        position="-0.20350730248595683 0.07304086165417467 -0.07053940668460235"
        scale="0.008 0.008 0.008"
        rotation="0 90 0"
      />

      <Jaw animation={props.animation} />
      {animate(props.animation, 'head')}
    </a-entity>
  )
}

export default Head
