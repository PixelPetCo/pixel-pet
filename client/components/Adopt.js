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

  handleClick = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
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
        <fieldset>
          <legend>Animal</legend>
          <ul id="pet-picker">
            <li
              className={
                this.state.petModel === 'cuboidCanine' ? 'selected' : null
              }
            >
              <label htmlFor="cuboidCanine">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="petModel"
                  value="cuboidCanine"
                  alt="Cuboid Canine"
                />
                <img src="cuboidCanine.png" />
              </label>
            </li>
            <li
              className={
                this.state.petModel === 'tetrahedronTurtle' ? 'selected' : null
              }
            >
              <label htmlFor="tetrahedronTurtle">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="petModel"
                  value="tetrahedronTurtle"
                  alt="Tetrahedron Turtle"
                />
                <img src="tetrahedronTurtle.png" />
              </label>
            </li>
            <li
              className={
                this.state.petModel === 'boxyBunny' ? 'selected' : null
              }
            >
              <label htmlFor="boxyBunny">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="petModel"
                  value="boxyBunny"
                  alt="Boxy Bunny"
                />
                <img src="boxyBunny.png" />
              </label>
            </li>
            <li
              className={
                this.state.petModel === 'circleCat' ? 'selected' : null
              }
            >
              <label htmlFor="circleCat">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="petModel"
                  value="circleCat"
                  alt="Circle Cat"
                />
                <img src="circleCat.png" />
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Personality</legend>
          <ul id="personality-picker">
            <li>
              <label htmlFor="chipper">
                <RaisedButton
                  className={
                    this.state.petPersonality === 'chipper' ? 'selected' : null
                  }
                  onClick={this.handleClick}
                  label="Chipper"
                  name="petPersonality"
                  value="chipper"
                />
              </label>
            </li>
            <li>
              <label htmlFor="petPersonality">
                <RaisedButton
                  className={
                    this.state.petPersonality === 'grumpy' ? 'selected' : null
                  }
                  onClick={this.handleClick}
                  label="Grumpy"
                  name="petPersonality"
                  value="grumpy"
                />
              </label>
            </li>
          </ul>
        </fieldset>
        <RaisedButton type="submit" label="send" primary={true} />
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
