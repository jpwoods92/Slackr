import React from 'react'
import { connect } from 'react-redux'
import { logout, clearErrors } from '../../actions/session_actions'
import { Link } from 'react-router-dom'

const navLinks = (props) => {
  let nav = (
    <ul className='nav-list'>
      <li><Link onClick={() => clearErrors()} id='nav-login' to='/login'>Log In</Link></li>
      <li><Link onClick={() => clearErrors()} id='nav-signup' to='/signup'>Sign Up</Link></li>
    </ul>
  )

  return (
    <header className='nav-bar'>
      <Link id='nav-logo-link' to='/'><img src={window.slackrLogo} alt="slackr-logo"/></Link>
      {nav}
    </header>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    user: state.entities.users[state.session.currentUserId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(navLinks)
