import React from 'react'

const PetModel = () => {
  // body shades
  const lightPurple = 'shader: flat; color: #513797'
  const darkPurple = 'shader: flat; color: #291B4E'
  const black = 'shader: flat; color: #000'
  const white = 'shader: flat; color: white'

  return (
    <a-entity>
      <a-entity>
        {/* head */}
        <a-box
          material={lightPurple}
          depth="0.45"
          height="0.4"
          width="0.4"
          position="0 0.5 -1.118"
        />
        <a-box
          material={darkPurple}
          depth="0.1"
          height="0.2"
          width="0.2"
          position="0.000 0.395 -0.843"
        />
        {/* nostrils */}
        <a-box
          material={black}
          depth="0.020"
          height="0.04"
          width="0.04"
          position="-0.038 0.469 -0.761"
        />
        <a-box
          material={black}
          depth="0.020"
          height="0.04"
          width="0.04"
          position="0.039 0.469 -0.761"
        />
        {/* smile */}
        <a-entity
          material={black}
          geometry="primitive: torus; radius: 1; radiusTubular: 0.5; arc: 180"
          rotation="0 0 180"
          radiusTubular="0.0"
          scale="0.05 0.05 0.05"
          position="0.010 0.324 -0.77"
        />
        {/* mouth */}
        <a-box
          material={darkPurple}
          depth="0.250"
          height="0.060"
          width="0.250"
          position="0 0.272 -0.885"
        />
        {/* ears */}
        <a-box
          material={lightPurple}
          rotation="45.0 -30.0 0"
          depth="0.140"
          height="0.02"
          width="0.09"
          position="0.217 0.731 -1.346"
        />
        <a-box
          material={lightPurple}
          rotation="45.0 30.0 0"
          depth="0.140"
          height="0.02"
          width="0.09"
          position="-0.201 0.731 -1.346"
        />
        {/* eyes */}
        <a-box
          material={white}
          rotation="0 0 0"
          depth="0.150"
          height="0.150"
          width="0.01"
          position="-0.206 0.570 -1.160"
        />
        <a-box
          material={white}
          rotation="0 0 0"
          depth="0.150"
          height="0.150"
          width="0.01"
          position="0.206 0.570 -1.160"
        />
        {/* iris */}
        <a-box
          material={black}
          rotation="0 0 0"
          depth="0.1"
          height="0.1"
          width="0.01"
          position="0.206 0.550 -1.131"
        />
        <a-box
          material={black}
          rotation="0 0 0"
          depth="0.1"
          height="0.1"
          width="0.01"
          position="-0.211 0.550 -1.131"
        />
      </a-entity>

      {/* body */}
      <a-box
        material={darkPurple}
        rotation="0 0 45"
        depth="0.27"
        height="0.27"
        width="0.27"
        position="0.024 0.324 -1.501"
      />

      {/* feet */}
      <a-box
        material={lightPurple}
        depth="0.13"
        height="0.06"
        width="0.1"
        position="-0.101 0 -1.385"
      />
      <a-box
        material={lightPurple}
        depth="0.13"
        height="0.06"
        width="0.1"
        position="0.130 0 -1.385"
      />
      <a-box
        material={lightPurple}
        depth="0.13"
        height="0.06"
        width="0.1"
        position="-0.101 0 -1.614"
      />
      <a-box
        material={lightPurple}
        depth="0.13"
        height="0.06"
        width="0.1"
        position="0.130 0 -1.614"
      />
    </a-entity>
  )
}

export default PetModel
