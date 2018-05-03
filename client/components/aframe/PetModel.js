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
        <a-box
          id="head"
          material="shader:flat;color:#513797"
          depth="0.45"
          height="0.4"
          width="0.4"
          position="0 0.5 -1.118"
          geometry=""
        />
        <a-box
          id="snout"
          material="shader:flat;color:#291B4E"
          depth="0.14"
          height="0.18"
          width="0.2"
          position="0 0.383 -0.824"
          geometry="depth:0.14;height:0.18"
          rotation=""
        />
        <a-box
          id="nostril-right"
          material="shader:flat;color:#000"
          depth="0.02"
          height="0.04"
          width="0.02"
          position="-0.038 0.46 -0.761"
        />
        <a-box
          id="nostril-left"
          material="shader:flat;color:#000"
          depth="0.020"
          height="0.04"
          width="0.02"
          position="0.039 0.46 -0.761"
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
          id="jaw"
          material="shader:flat;colorleft:#513797"
          depth="0.250"
          height="0.020"
          width="0.199"
          position="0 0.290 -0.892"
          rotation=""
        />
        <a-box
          id="ear-left"
          material="shader:flat;color:#513797"
          rotation="45 -29.999999999999996 0"
          depth="0.140"
          height="0.02"
          width="0.09"
          position="0.217 0.731 -1.346"
          geometry=""
        />
        <a-box
          id="ear-right"
          material="shader:flat;color:#513797"
          rotation="45 29.999999999999996 0"
          depth="0.140"
          height="0.02"
          width="0.09"
          position="-0.201 0.731 -1.346"
          geometry=""
        />
        <a-box
          id="sclera-right"
          material="shader:flat;color:white"
          rotation="0 90 0"
          depth="0.150"
          height="0.150"
          width="0.01"
          position="-0.11798077125982731 0.57 -0.892"
          geometry=""
        />
        <a-box
          id="sclera-left"
          material="shader:flat;color:white"
          rotation="0 90 0"
          depth="0.150"
          height="0.150"
          width="0.01"
          position="0.12279881803934703 0.57 -0.892"
          geometry=""
        />
        <a-box
          id="pupil-left"
          material="shader:flat;color:#000"
          rotation="0 90 0"
          depth="0.1"
          height="0.1"
          width="0.01"
          position="0.126 0.545 -0.891"
          geometry=""
        />
        <a-box
          id="pupil-right"
          material="shader:flat;color:#000"
          rotation="0 90 0"
          depth="0.1"
          height="0.1"
          width="0.01"
          position="-0.118 0.5457793819758201 -0.891"
          geometry=""
        />
      </a-entity>
      <a-box
        id="body"
        material="shader:flat;color:#291B4E"
        rotation="0 0 45"
        depth="0.27"
        height="0.27"
        width="0.27"
        position="0.024 0.324 -1.501"
        geometry=""
      />
      <a-box
        id="paw-right-front"
        material="shader:flat;color:#513797"
        depth="0.13"
        height="0.06"
        width="0.1"
        position="-0.101 0 -1.385"
        geometry=""
      />
      <a-box
        id="paw-left-front"
        material="shader:flat;color:#513797"
        depth="0.13"
        height="0.06"
        width="0.1"
        position="0.13 0 -1.385"
        geometry=""
      />
      <a-box
        id="paw-right-hind"
        material="shader:flat;color:#513797"
        depth="0.13"
        height="0.06"
        width="0.1"
        position="-0.101 0 -1.614"
        geometry=""
      />
      <a-box
        id="paw-left-hind"
        material="shader:flat;color:#513797"
        depth="0.13"
        height="0.06"
        width="0.1"
        position="0.13 0 -1.614"
        geometry=""
      />
    </a-entity>
  )
}

export default PetModel
