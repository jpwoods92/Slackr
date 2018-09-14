import React, { Component } from 'react'

class LineWebSocket extends Component {
  componentDidMount () {
    this.props['data-getLineData']
    (window.location.href.match(/\d+$/)[0])

    this.props['data-cableApp'].line = this.props['data-cableApp'].cable.subscriptions
      .create({channel: 'LineChannel', room: window.location.href.match(/\d+$/)[0]}, {
        received: (newLine) => {
          this.props['data-updateApp'](newLine)
        }
      })
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default LineWebSocket
