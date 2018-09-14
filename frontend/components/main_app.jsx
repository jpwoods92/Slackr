import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import { Route } from 'react-router-dom'
import LinePage from './line_page'

class mainApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      auth: {
        isLoggedIn: false,
        user: ''
      },
      joinLine: {
        code: '',
        error: false,
        lineId: null,
        redirect: false
      },
      line: {
        line: {},
        users: []
      }
    }
    this.updateAppStateLine = this.updateAppStateLine.bind(this)
  }

  updateAppStateLine (newLine) {
    this.setState({
      line: {
        line: newLine.line,
        users: newLine.users
      }
    })
  }

  render () {
    let button
    if (this.props.loggedIn) {
      button = <li><button id='nav-logout' onClick={this.props.logout} >Log Out</button></li>
    }

    return (
      <div>
        {button}
        <Route path='/lines/:id' render={(props) => (
          <LinePage
            {...props}
            data-cableApp={this.props.cableApp}
            data-updateApp={this.updateAppStateLine}
            data-lineData={this.state.lineData}
            data-getLineData={this.getLineData}
            getLineData={this.getLineData}
            lineData={this.state.line}
            authData={this.state.auth}
          />
        )} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    user: state.entities.users[state.session.currentUserId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mainApp)
