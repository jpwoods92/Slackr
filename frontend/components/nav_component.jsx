import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import { Route, NavLink } from 'react-router-dom'

const navLinks = (props) => {
  return (
    <header className='nav-bar'>
        <NavLink id='nav-logo-link' to='/'>Hi hello how are you</NavLink></li>
      <ul className='nav-lists'>
        <li><NavLink to='/'></NavLink></li>
        <li><NavLink id='nav-login' to='/login'>Log In</NavLink></li>
        <li><NavLink id='nav-signup' to='/signup'>Sign Up</NavLink></li>
      </ul>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
    user: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(navLinks)
