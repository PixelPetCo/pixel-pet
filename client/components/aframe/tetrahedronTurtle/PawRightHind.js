import React from 'react'
import { animate } from '../PetModel'

const PawRightHind = props => {
  return (
    <a-tetrahedron
      id="paw-right-hind"
      material="shader:flat;color:#513797"
      raduis="0.1"
      position="-0.101 0 -1.614"
      geometry=""
    >
      {animate(props.animation, 'pawRightHind')}
    </a-tetrahedron>
  )
}

export default PawRightHind
