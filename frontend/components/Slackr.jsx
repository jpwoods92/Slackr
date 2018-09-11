import React from 'react'
import SplashContainer from './splash_container'
// import { Route } from 'react-router-dom'
import LoginFormContainer from './auth_components/login_form_container'
import SignupFormContainer from './auth_components/signup_form_container'
import {AuthRoute} from '../util/route_util'

const Slackr = () => (
  <div>
    <header>
      <h1>Welcome to Slackr!</h1>

    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
)

export default Slackr
