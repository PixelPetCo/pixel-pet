import React from 'react'
import Head from './Head'
import { animate } from '../PetModel'

const Torso = props => {
  return (
    <a-box
      id="body"
      material="shader:flat;color:#ff7777"
      rotation="0 0 45"
      depth="0.27"
      height="0.27"
      width="0.27"
      position="0.024 0.324 -1.501"
      geometry=""
    >
      <a-sphere
        id="tail"
        material="shader:flat;color:#ffd1d1"
        radius="5"
        geometry="radius:0.1"
        position="0.13509804566792077 0.1557253827590191 -0.20930187771625497"
        scale="0.5 0.5 0.5"
      />
      <Head animation={props.animation} animate={props.animate} />
      {animate(props.animation, 'torso')}
    </a-box>
  )
}

export default Torso
