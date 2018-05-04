import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import MessageForm from './MessageForm'

// Home: there's no place like it (as long as you've logged in).
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      showTxtInput: false
    }
  }

  handleClick = evt => {
    this.setState({
      showTxtInput: !this.state.showTxtInput
    })
  }

  render() {
    console.log('state in msg form ', this.state)
    return (
      <main>
        <div id="translator">PixelPetSpeek Translator</div>
        <div id="a-frame">Companion component!</div>
        <div id="input-buttons">
          {!this.state.showTxtInput ? (
            <FloatingActionButton
              name="showTxtInput"
              onClick={this.handleClick}
              style={style}
            >
              text
            </FloatingActionButton>
          ) : (
            <MessageForm />
          )}
          <FloatingActionButton
            onClick={this.handleClick}
            secondary={true}
            style={style}
          >
            mic
          </FloatingActionButton>
        </div>
      </main>
    )
  }
}

const style = {
  marginRight: 20
}
