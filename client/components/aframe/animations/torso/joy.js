import React from 'react'

const joy = [
  <a-animation
    key="1"
    attribute="rotation"
    dur="400"
    direction="alternate"
    fill="forwards"
    from="0 10 45"
    to="0 -10 45"
    repeat="indefinite"
  />,
  <a-animation
    key="2"
    attribute="position"
    dur="400"
    direction="alternate"
    fill="forwards"
    from="-0.024 0.324 -1.501"
    to="0.064 0.324 -1.501"
    repeat="indefinite"
  />,
  <a-animation
    key="3"
    attribute="material.color"
    from="#F6F078"
    to="#D1C756"
    dur="500"
  />
]

export default joy
