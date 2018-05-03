import React from 'react'

import Speak from './commands/Speak'

const PetModel = props => {
  let command

  switch (props.command) {
    case 'speak':
      command = <Speak />
    default:
      command = <Speak />
  }
  console.log(command)
  return command
}

export default PetModel

// body shades
const lightPurple = 'shader: flat; color: #513797'
const darkPurple = 'shader: flat; color: #291B4E'
const black = 'shader: flat; color: #000'
const white = 'shader: flat; color: white'
