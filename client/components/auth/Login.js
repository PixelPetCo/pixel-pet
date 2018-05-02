import AuthForm from './AuthForm'
import { connect } from 'react-redux'
import { auth } from '../../store/user'

const mapState = state => {
  return {
    type: 'Login',
    error: state.user.error,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth({ email, password }, 'put'))
    }
  }
}

export default connect(mapState, mapDispatch)(AuthForm)
