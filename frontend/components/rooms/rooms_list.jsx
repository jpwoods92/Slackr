import React from 'react'
import RoomListItem from './room_list_item_container'
import { ActionCable } from 'react-actioncable-provider'

export default class RoomsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: this.props.rooms
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleReceivedChange = this.handleReceivedChange.bind(this)
  }

  componentDidMount () {
    this.props.fetchRooms()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.rooms.length !== nextProps.rooms.length) {
      this.setState({rooms: nextProps.rooms})
    }
  }

  handleClick (id) {
    return () => this.props.fetchRoom(id).then(this.props.fetchMessages(id))
  }

  handleReceivedChange (data) {
    if (data.action === 'new_room' || data.action === 'update_room') {
        this.props.receiveRoom(data)
    } else if (data.action === 'delete_room') {
      this.props.removeRoom(data.id)
    } else {
      return null
    }
  }

  render () {
    if (!this.props.rooms.length) return null
    let rooms = this.props.rooms
    return (
      <div className='rooms'>
        <div className='list-header'>
          <h2 className='channels'>Channels</h2>
          <button className='room-form-button' onClick={() => this.props.openModal('newRoom')}><img src={window.addChannel} alt="add-channel-icon"/></button>
        </div>
        <ul className='roomsList'>
          {rooms.map(room =>
            !room.is_dm
              ? <RoomListItem
                key={room.id}
                room={room}
                handleClick={this.handleClick}
                currentRoom={this.props.room}
              /> : null
          )}
        </ul>
        <ActionCable
          ref='RoomsChannel'
          channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
          onReceived={this.handleReceivedChange}
        />
        <h2 className='channels'>Direct Messages</h2>
        <button className='room-form-button' onClick={() => this.props.openModal('newDMForm')}><img src={window.addChannel} alt="add-channel-icon"/></button>
        <ul className='roomsList'>
          {rooms.map(room =>
            room.is_dm
              ? <RoomListItem
                key={room.id}
                room={room}
                handleClick={this.handleClick}
                currentRoom={this.props.room}
              /> : null
          )}
        </ul>
      </div>
    )
  }
}
