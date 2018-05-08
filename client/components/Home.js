import React, { Component } from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Translator from './Translator'
import MessageForm from './MessageForm'
import ModelScene from '../components/aframe/ModelScene'
import SpeechDisplay from './SpeechDisplay'

// Home: there's no place like it (as long as you've logged in).
class Home extends Component {
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
    const { botText, mood, command } = this.props
    return (
      <main>
        <Translator petReply={botText} />
        {/* <ModelScene mood={mood} command={command} /> */}
        <div id="input-buttons">
          {this.state.showTxtInput && <MessageForm />}
          <FloatingActionButton
            name="showTxtInput"
            onClick={this.handleClick}
            style={style}
          >
            text
          </FloatingActionButton>
          {/* <FloatingActionButton
            // onClick={this.handleClick}
            secondary={true}
            style={style}
          >
          </FloatingActionButton> */}
            <SpeechDisplay />
        </div>
      </main>
    )
  }
}

const style = {
  marginRight: 20
}

const mapState = state => {
  const { botText, mood, command } = state.chat
  return { botText, mood, command }
}

export default connect(mapState)(Home)
