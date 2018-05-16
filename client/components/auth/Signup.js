import AuthForm from './AuthForm'
import {connect} from 'react-redux'
import {auth} from '../../store/user'

const mapState = (state) => {
  return {
    type: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth({email, password}, 'post'))
    }
  }
}

export default connect(mapState, mapDispatch)(AuthForm)
