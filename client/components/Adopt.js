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
                    checked={
                      this.state.petModel === 'cuboidCanine' ? 'true' : null
                    }
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
                      this.state.petModel === 'tetrahedronTurtle'
                        ? 'true'
                        : null
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
                    checked={
                      this.state.petModel === 'boxyBunny' ? 'true' : null
                    }
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
                    checked={
                      this.state.petModel === 'circleCat' ? 'true' : null
                    }
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
                      this.state.petPersonality === 'chipper' ? 'true' : null
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
                    checked={
                      this.state.petPersonality === 'grumpy' ? 'true' : null
                    }
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
