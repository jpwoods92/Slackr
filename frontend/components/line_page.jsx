import React from 'react'
import { Route } from 'react-router-dom'
import LineWebSocket from './line_web_socket'

export default () => {
  return (
    <LineWebSocket
      data-cableApp={this.props['data-cableApp']}
      data-updateApp={this.props['data-updateApp']}
      data-lineData={this.props['data-lineData']}
      data-getlineData={this.props['data-getLineData']}
    />
  )
}
