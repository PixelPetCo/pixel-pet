import React, { Component } from 'react'
import { updateUser } from '../store/user'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

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

  handleSubmit = evt => {
    evt.preventDefault()
    console.log(this.props)
    this.props.updateUser({
      ...this.props.user,
      petModel: this.state.petModel,
      petPersonality: this.state.petPersonality
    })
  }

  isChecked = (type, value) => {
    return this.state[type] === value && 'true'
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <fieldset>
            <legend>Animal</legend>
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
                  <img src="cuboidCanine.png" />
                </label>
              </li>
              <li>
                <label htmlFor="tetrahedronTurtle">
                  <input
                    id="tetrahedronTurtle"
                    type="radio"
                    onChange={this.handleChange}
                    name="petModel"
                    value="tetrahedronTurtle"
                    checked={
                      this.isChecked('petModel', 'tetrahedronTurtle') || ''
                    }
                  />
                  <img src="tetrahedronTurtle.png" />
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
                  <img src="boxyBunny.png" />
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
                  <img src="circleCat.png" />
                </label>
              </li>
            </ul>
          </fieldset>
        </section>
        <section>
          <fieldset>
            <legend>Personality</legend>
            <ul id="personality-picker">
              <li>
                <label htmlFor="chipper">
                  <input
                    id="chipper"
                    type="radio"
                    onChange={this.handleChange}
                    name="petPersonality"
                    value="chipper"
                    checked={
                      this.isChecked('petPersonality', 'chipper') || ''
                    }
                  />
                  <RaisedButton
                    onClick={() => this.handleClick('chipper')}
                    label="Chipper"
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
                  />
                </label>
              </li>
            </ul>
          </fieldset>
        </section>
        <RaisedButton type="submit" label="Adopt!" primary={true} />
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
})

const mapState = ({ user }) => ({
  user
})

export default connect(mapState, mapDispatch)(Adopt)
