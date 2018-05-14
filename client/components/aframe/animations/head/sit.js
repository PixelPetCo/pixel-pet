const sit = [
  {
    id: 'head-sitting-angle',
    attribute: 'rotation',
    easing: 'linear',
    dur: '400',
    direction: 'alternate',
    fill: 'forwards',
    from: '0 0 -45',
    to: '45 -45 -45'
  },
  {
    id: 'head-standing-angle',
    attribute: 'rotation',
    easing: 'linear',
    dur: '400',
    delay: '4000',
    direction: 'alternate',
    fill: 'forwards',
    from: '45 -45 -45',
    to: '0 0 -45'
  },
  {
    id: 'head-sit-height',
    attribute: 'position',
    dur: '400',
    easing: 'linear',
    direction: 'alternate',
    fill: 'forwards',
    from: '0.12789000425531563 0.12610999574468434 0.388331139133306',
    to: '0.02789000425531563 0.06610999574468434 0.388331139133306'
  },
  {
    id: 'head-sit-height',
    attribute: 'position',
    dur: '400',
    delay: '4000',
    easing: 'linear',
    fill: 'forwards',
    from: '0.12789000425531563 0.06610999574468434 0.388331139133306',
    to: '0.02789000425531563 0.12610999574468434 0.388331139133306'
  }
]

export default sit
