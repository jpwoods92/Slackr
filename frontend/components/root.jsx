import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Slackr from './Slackr'
import actionCable from 'actioncable'

const CableApp = {}

CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Slackr cableApp={CableApp}/>
    </HashRouter>
  </Provider>
)
