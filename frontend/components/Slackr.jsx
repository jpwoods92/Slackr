import React, { Fragment } from 'react'
import SplashContainer from './splash_container'
import LoginFormContainer from '../components/auth_components/login_form_container'
import SignupFormContainer from '../components/auth_components/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import MainApp from './main_app'
import Modal from './modal'

const Slackr = () => (
  <Fragment>
    <Modal />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/channels/:id' component={MainApp} />
    <AuthRoute exact path='/' component={SplashContainer} />
  </Fragment>
)

export default Slackr
