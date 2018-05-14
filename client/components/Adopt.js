import React, { Component } from 'react'
import { editUser } from '../store/user'
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

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.editUser({
      ...this.props.user,
      petModel: this.state.petModel,
      petPersonality: this.state.petPersonality
    })
    this.setState({ userMessage: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Animal</legend>
          <input
            type="image"
            className={this.state.petModel === 'cuboidCanine' && 'selected'}
            onClick={this.handleClick}
            name="petModel"
            value="cuboidCanine"
            alt="Cuboid Canine"
            src="/images/cuboidCanine.png"
            width="80"
            height="80"
          />
          <input
            type="image"
            className={
              this.state.petModel === 'triangleTurtle' ? 'selected' : null
            }
            onClick={this.handleClick}
            name="petModel"
            value="triangleTurtle"
            alt="Triangle Turtle"
            src="/images/triangleTurtle.png"
            width="80"
            height="80"
          />
          <input
            type="image"
            className={this.state.petModel === 'circleCat' ? 'selected' : null}
            onClick={this.handleClick}
            name="petModel"
            value="circleCat"
            alt="Circle Cat"
            src="/images/circleCat.png"
            width="80"
            height="80"
          />
          <input
            type="image"
            className={this.state.petModel === 'boxyBunny' ? 'selected' : null}
            onClick={this.handleClick}
            name="petModel"
            value="boxyBunny"
            alt="Boxy Bunny"
            src="/images/boxyBunny.png"
            width="80"
            height="80"
          />
        </fieldset>
        <fieldset>
          <legend>Personality</legend>
          <ul>
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
  editUser: user => dispatch(editUser(user))
})

const mapState = ({ user }) => ({
  user
})

export default connect(mapState, mapDispatch)(Adopt)
