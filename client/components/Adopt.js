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
    if (
      evt.target.previousElementSibling && // detect if there's a previous element (looking for input element)
      evt.target.previousElementSibling.type === 'radio' // redundantly? checks the type is radio, could also check tagName "INPUT"
    ) {
      evt.target.previousElementSibling.checked = true // this doesn't actually trigger the handleChange
      this.handleChange({ ...evt, target: evt.target.previousElementSibling }) // manually passing event with target set to previous input element to handleChange
    } else {
      this.setState({
        [evt.target.name]: evt.target.value // is it possible to trigger this by clicking on the input without clicking the image?
      })
    }
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
                <img onClick={this.handleClick} src="cuboidCanine.gif" />
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
                <img onClick={this.handleClick} src="tetrahedronTurtle.png" />
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
                <img onClick={this.handleClick} src="boxyBunny.gif" />
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
                <img onClick={this.handleClick} src="circleCat.gif" />
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
