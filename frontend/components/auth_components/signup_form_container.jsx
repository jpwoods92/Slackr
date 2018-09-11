import React from 'react'
import { connect } from 'react-redux'
import SignupForm from './signup_form'
import { signup } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'signup'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => (dispatch(signup(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
