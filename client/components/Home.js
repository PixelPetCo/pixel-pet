import React, { Component } from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Avatar from 'material-ui/Avatar'
import SvgIconKeyboard from 'material-ui/svg-icons/hardware/keyboard'

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
    const { botText, mood, command } = this.props.chat
    return (
      <main>
        <Translator botText={botText} />
        <ModelScene mood={mood} command={command} />
        <div id="input-buttons">
          {this.state.showTxtInput && <MessageForm />}
          <FloatingActionButton
            name="showTxtInput"
            onClick={this.handleClick}
            secondary={true}
            style={style}
          >
            <SvgIconKeyboard color="#fff" />
          </FloatingActionButton>
          <SpeechDisplay />
        </div>
      </main>
    )
  }
}

const style = {
  position: 'absolute',
  right: '5%',
  bottom: '14%'
}

const mapState = ({ chat }) => ({ chat })

export default connect(mapState)(Home)
