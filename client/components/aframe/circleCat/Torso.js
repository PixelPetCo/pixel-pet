import React from 'react'
import Head from './Head'
import { animate } from '../PetModel'

const Torso = props => {
  return (
    <a-sphere
      id="body"
      material="shader:flat;color:#7D8697"
      rotation="0 0 45"
      radius="0.27"
      position="0.024 0.324 -1.501"
      geometry=""
    >
      <Head animation={props.animation} animate={props.animate} />
      {animate(props.animation, 'torso')}

    </a-sphere>




  )
}

export default Torso
