import React, { Component } from 'react'
import { updateUser } from '../store/user'
import { toggleTutorial, sendMessage } from '../store/chat'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardMedia
} from 'material-ui/Card'

const cardStyle = {
  borderRadius: 5
}

const titleTextStyle = {
  margin: 0
}

const titleStyle = {
  fontSize: '14px',
  fontWeight: '500'
}

class Adopt extends Component {
  state = {
    petModel: '',
    petPersonality: ''
  }

  componentDidMount = () => {
    const { user } = this.props
    this.setState({
      petModel: user.petModel,
      petPersonality: user.petPersonality
    })
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  // ideally this function shouldn't be needed
  handleClick = petPersonality => {
    this.setState({
      petPersonality
    })
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    this.props.toggleTutorial()
    await this.props.updateUser({
      ...this.props.user,
      name: null,
      petName: null,
      petModel: this.state.petModel,
      petPersonality: this.state.petPersonality
    })
    this.props.sendMessage('FIRST USER MESSAGE')
  }

  isChecked = (type, value) => {
    return this.state[type] === value && 'true'
  }

  render() {
    const { petModel, petPersonality } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <h3 className="pixel-font-white">Select your pet:</h3>
          <ul id="pet-picker">
            <li>
              <label htmlFor="cuboidCanine">
                <input
                  id="cuboidCanine"
                  type="radio"
                  onChange={this.handleChange}
                  name="petModel"
                  value="cuboidCanine"
                  checked={this.isChecked('petModel', 'cuboidCanine') || ''}
                />
                <Card style={cardStyle}>
                  <img src="pets/dog-joy.gif" />
                </Card>
              </label>
            </li>
            <li>
              <label htmlFor="boxyBunny">
                <input
                  id="boxyBunny"
                  type="radio"
                  onChange={this.handleChange}
                  name="petModel"
                  value="boxyBunny"
                  checked={this.isChecked('petModel', 'boxyBunny') || ''}
                />
                <Card style={cardStyle}>
                  <img src="pets/bunny-sit.gif" />
                </Card>
              </label>
            </li>
            <li>
              <label htmlFor="circleCat">
                <input
                  id="circleCat"
                  type="radio"
                  onChange={this.handleChange}
                  name="petModel"
                  value="circleCat"
                  checked={this.isChecked('petModel', 'circleCat') || ''}
                />
                <Card style={cardStyle}>
                  <img src="pets/cat-analytical.gif" />
                </Card>
              </label>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="pixel-font-white">Choose a personality:</h3>
          <ul id="personality-picker">
            <li>
              <label htmlFor="chipper">
                <input
                  id="chipper"
                  type="radio"
                  onChange={this.handleChange}
                  name="petPersonality"
                  value="chipper"
                  checked={this.isChecked('petPersonality', 'chipper') || ''}
                />
                <RaisedButton
                  onClick={() => this.handleClick('chipper')}
                  label="Chipper"
                  secondary={petPersonality === 'chipper'}
                />
              </label>
            </li>
            <li>
              <label htmlFor="grumpy">
                <input
                  id="grumpy"
                  type="radio"
                  onChange={this.handleChange}
                  name="petPersonality"
                  value="grumpy"
                  checked={this.isChecked('petPersonality', 'grumpy') || ''}
                />
                <RaisedButton
                  onClick={() => this.handleClick('grumpy')}
                  label="Grumpy"
                  secondary={petPersonality === 'grumpy'}
                />
              </label>
            </li>
          </ul>
        </section>
        <RaisedButton
          type="submit"
          label="Adopt!"
          primary={true}
          disabled={!petModel || !petPersonality}
        />
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  toggleTutorial: () => dispatch(toggleTutorial()),
  sendMessage: text => dispatch(sendMessage(text))
})

const mapState = ({ user }) => ({
  user
})

export default connect(mapState, mapDispatch)(Adopt)
