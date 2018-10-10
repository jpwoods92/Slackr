import { Link, matchPath } from 'react-router-dom'
import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

export default class RoomListItem extends React.Component {
  constructor (props) {
    super(props)
    this.processClick = this.processClick.bind(this)
  }

  parseTitle (title) {
    let nameList = []
    title.split(', ').forEach(name => {
      if (name !== this.props.currentUser.username) {
        nameList.push(name)
      }
    })
    return nameList.join(', ')
  }

  processClick (e) {
    e.preventDefault()
    this.refs.RoomsChannel.perform('speak_delete', {
      id: this.props.room.id,
      current_user: this.props.currentUserId
    })
    if (this.props.room.is_dm) {
      let newTitle = this.parseTitle(this.props.room.title)
      this.refs.RoomsChannel.perform('speak_update', {
        id: this.props.room.id,
        title: newTitle
      })
    }
    this.props.history.push('/channels/1')
  }

  render () {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/channels/:param',
      exact: true,
      strict: false
    })
    if (!match) return null
    let parameter = parseInt(match.params.param)
    let classText
    if (this.props.room.id === parameter) {
      classText = 'room-list-link active'
    } else {
      classText = 'room-list-link'
    }
    let title
    if (this.props.room.is_dm) {
      if (this.props.room.title.length > 18) {
        title = this.props.room.title.slice(0, 15) + '...'
      } else {
        title = this.props.room.title
      }
      return (
        <li key={this.props.room.id} className="room-list-item" onClick={this.props.handleClick(this.props.room.id)}>
          <Link className={classText} to={`/channels/${this.props.room.id}`}># {title}</Link>
          <button to='/channels/1' className='room-list-button' onClick={(e) => { this.processClick(e) }}>X</button>
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
          />
        </li>)
    } else {
      let button
      if (this.props.room.id !== 1) {
        button = <button className='room-list-button' onClick={(e) => { this.processClick(e) }}>X</button>
      }
      return (
        <li key={this.props.room.id} className="room-list-item" onClick={this.props.handleClick(this.props.room.id)}>
          <Link className={classText} to={`/channels/${this.props.room.id}`}># {this.props.room.title}</Link>
          {button}
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
          />
        </li>)
    }
  }
}
