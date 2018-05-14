import React from 'react'
import { animate } from '../PetModel'

const Jaw = props => {
  return (
    <a-sphere
      id="jaw"
      material="shader:flat;color:#303331" geometry=""
      radius=".04"
      position="0 -0.2 0.2307664801058491"
      scale="2 1 1" >
      {animate(props.animation, 'jaw')}
    </a-sphere>
  )
}

export default Jaw
