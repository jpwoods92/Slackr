import React, { Fragment } from 'react'
import SplashContainer from './splash_container'
import { Route, NavLink, Switch } from 'react-router-dom'
import LoginFormContainer from '../components/auth_components/login_form_container'
import SignupFormContainer from '../components/auth_components/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import MainApp from './main_app'
import NewRoomForm from './new_room_form'

const Slackr = () => (
  <Fragment>
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/rooms' component={MainApp} />
    <ProtectedRoute exact path='/rooms/new' component={NewRoomForm} />
    <AuthRoute exact path='/' component={SplashContainer} />
  </Fragment>
)

export default Slackr
