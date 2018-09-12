import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import { Route, NavLink } from 'react-router-dom'

const navLinks = (props) => {
  let button
  if (props.loggedIn) {
    button = (<button onClick={props.logout}>Log Out</button>)
  }

  return (
    <header className='nav-bar'>
      {button}
      <NavLink id='logo-link' to='/'></NavLink>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
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
