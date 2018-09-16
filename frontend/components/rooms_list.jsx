import React from 'react'
import { ActionCable } from 'react-actioncable-provider'
import NewRoomForm from './new_room_form'
import MessagesArea from './messages_area'
import Cable from './cables'

class RoomsList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rooms: this.props.rooms,
      activeRoom: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleReceivedRoom = this.handleReceivedRoom.bind(this)
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
  }

  componentDidMount () {
    this.props.fetchRooms()
  };

  handleClick (id) {
    this.setState({ activeRoom: id })
  };

  handleReceivedRoom (response) {
    const {room} = response
    this.setState({rooms: [...this.state.rooms, room]})
  };

  handleReceivedMessage (response) {
    const { message } = response
    const rooms = [...this.props.rooms]
    const room = rooms.find(
      room => room.id === message.room_id
    )
    room.messages = [...room.messages, message]
    this.setState({ rooms })
  };

  render () {
    const rooms = this.props.rooms
    const activeRoom = this.state.activeRoom
    return (
      <div className="roomsList">
        <ActionCable
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceivedRoom}
        />
        {rooms.length ? (
          <Cable
            rooms={rooms}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Rooms</h2>
        <ul>{mapRooms(rooms, this.handleClick)}</ul>
        <NewRoomForm />
        {activeRoom ? (
          <MessagesArea
            room={findActiveRoom(
              rooms,
              activeRoom
            )}
          />
        ) : null}
      </div>
    )
  };
}

export default RoomsList

const findActiveRoom = (rooms, activeRoom) => {
  return rooms.find(
    room => room.id === activeRoom
  )
}

const mapRooms = (rooms, handleClick) => {
  return rooms.map(room => {
    return (
      <li key={room.id} onClick={() => handleClick(room.id)}>
        {room.title}
      </li>
    )
  })
}
