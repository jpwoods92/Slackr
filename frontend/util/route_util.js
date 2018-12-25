import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Redirect } from 'react-router-dom'

const Auth = ({component: Component, path, loggedIn, exact}) => {
  function toRender (props) {
    if (!loggedIn) {
      return <Component {...props} />
    } else {
      return <Redirect to="/channels/1" />
    }
  }
  return <Route path={path} exact={exact} render={toRender} />
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  function toRender (props) {
    if (!loggedIn) {
      return <Redirect to='/' />
    } else {
      return <Component {...props} />
    }
  }

  return <Route tpath={path} exact={exact} render={toRender} />
}

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUserId)}
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
