import React from 'react'
import SplashContainer from './splash_container'
import { Route, NavLink, Switch } from 'react-router-dom'
import LoginFormContainer from '../components/auth_components/login_form_container'
import SignupFormContainer from '../components/auth_components/signup_form_container'
import {AuthRoute} from '../util/route_util'

const Slackr = () => (
  <div>
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Route path='/' component={SplashContainer} />
    </Switch>
  </div>
)

export default Slackr
