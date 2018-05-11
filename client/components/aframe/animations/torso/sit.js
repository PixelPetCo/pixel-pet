import React from 'react'

const joy = [
  <a-animation
    key="1"
    attribute="rotation"
    dur="400"
    direction="alternate"
    fill="forwards"
    from="0 0 45"
    to="-45 0 45"
  />,
  <a-animation
    key="1"
    attribute="rotation"
    delay="4000"
    dur="400"
    direction="alternate"
    fill="forwards"
    from="-45 0 45"
    to="0 0 45"
  />,
  <a-animation
    key="2"
    attribute="position"
    dur="400"
    direction="alternate"
    fill="forwards"
    from="0.024 0.324 -1.501"
    to="0.024 0.324 -1.501"
    repeat="indefinite"
  />
]

export default joy
