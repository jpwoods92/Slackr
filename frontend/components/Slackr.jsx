import React from 'react'
import SplashContainer from './splash_container'
import { Route, NavLink, Switch } from 'react-router-dom'
import LoginFormContainer from '../components/auth_components/login_form_container'
import SignupFormContainer from '../components/auth_components/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import MainApp from './main_app'

const Slackr = () => (
  <div>
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/main' component={MainApp} />
    <AuthRoute exact path='/' component={SplashContainer} />
  </div>
)

export default Slackr
