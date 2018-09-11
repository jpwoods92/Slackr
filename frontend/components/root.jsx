import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Slackr from './Slackr'

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Slackr />
    </HashRouter>
  </Provider>
)
