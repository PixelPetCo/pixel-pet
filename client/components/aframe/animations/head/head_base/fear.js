import getColor from './getColor'

const base = getColor()

const fear = [
  {
    attribute: 'material.color',
    fill: 'forwards',
    easing: 'ease-in',
    to: base,
    from: '#9403A6',
    dur: '6000'
  }
]

export default fear
