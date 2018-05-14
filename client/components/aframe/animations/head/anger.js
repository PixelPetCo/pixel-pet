import React from 'react'

const anger = [
  {
    id: 'head-shake-angle',
    begin: 'startshake',
    attribute: 'rotation',
    easing: 'linear',
    dur: '80',
    direction: 'alternate',
    fill: 'forwards',
    from: '-10 -10 -45',
    to: '10 10 -45',
    repeat: '8'
  },
  {
    id: 'head-shake-height',
    begin: 'startshake',
    attribute: 'position',
    dur: '400',
    easing: 'linear',
    direction: 'alternate',
    fill: 'forwards',
    from: '0.12789000425531563 0.12610999574468434 0.388331139133306',
    to: '0.12789000425531563 0.06610999574468434 0.388331139133306',
    repeat: '1'
  }
]

export default anger
