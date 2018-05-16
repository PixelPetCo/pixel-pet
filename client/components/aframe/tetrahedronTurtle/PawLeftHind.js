import React from 'react'
import { animate } from '../PetModel'

const PawLeftHind = props => {
  return (
    <a-tetrahedron
      id="paw-left-hind"
      material="shader:flat;color:#513797"
      raduis="0.1"
      position="0.13 0 -1.614"
      geometry=""
    >
      {animate(props.animation, 'pawLeftHind')}
    </a-tetrahedron>
  )
}

export default PawLeftHind
