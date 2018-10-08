import React from 'react'
import { connect } from 'react-redux'
import SignupForm from './signup_form'
import { signup, clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
