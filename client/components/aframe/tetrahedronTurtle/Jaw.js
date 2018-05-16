import React from 'react'
import { animate } from '../PetModel'

const Jaw = props => {
  return (
    <a-tetrahedron
      id="jaw"
      material="shader:flat;color:#513797"
      raduis="0.1"
      position="0 -0.2 0.2307664801058491"
      rotation=""
    >
      {animate(props.animation, 'jaw')}
    </a-tetrahedron>
  )
}

export default Jaw
