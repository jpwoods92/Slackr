import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Slackr from './app'
import { ActionCableProvider } from 'react-actioncable-provider'

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <ActionCableProvider>
        <Slackr />
      </ActionCableProvider>
    </HashRouter>
  </Provider>
)
