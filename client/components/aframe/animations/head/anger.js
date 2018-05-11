import React from 'react'

const anger = [
  <a-animation
    id="head-shake-angle"
    key="6"
    begin="startshake"
    attribute="rotation"
    easing="linear"
    dur="80"
    direction="alternate"
    fill="forwards"
    from="-10 -10 -45"
    to="10 10 -45"
    repeat="8"
  />,
  <a-animation
    id="head-shake-height"
    begin="startshake"
    key="5"
    attribute="position"
    dur="400"
    easing="linear"
    direction="alternate"
    fill="forwards"
    from="0.12789000425531563 0.12610999574468434 0.388331139133306"
    to="0.12789000425531563 0.06610999574468434 0.388331139133306"
    repeat="1"
  />
]

export default anger
