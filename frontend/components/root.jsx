import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Slackr from './Slackr'
import { ActionCableProvider } from 'react-actioncable-provider'

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <ActionCableProvider url='ws://best-slackr.herokuapp.com/cable'>
        <Slackr />
      </ActionCableProvider>
    </HashRouter>
  </Provider>
)
