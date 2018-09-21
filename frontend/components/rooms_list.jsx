import React from 'react'
import { ActionCable } from 'react-actioncable-provider'
import RoomListItem from './rooms_list_item'

class RoomsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleReceivedRoom = this.handleReceivedRoom.bind(this)
  }

  componentDidMount () {
    this.props.fetchRooms()
  }

  componentWillReceiveProps (nextProps) {
    if (!this.state.rooms.length) {
      this.setState({rooms: nextProps.rooms})
    }
  }

  handleReceivedRoom (response) {
    const {room} = response
    this.setState({rooms: [...this.state.rooms, room]})
  }

  handleClick (id) {
    return () => this.props.fetchRoom(id)
  }

  render () {
    if (!this.props.rooms.length) return <p>loading</p>
    let rooms = this.state.rooms
    return (
      <div className='rooms'>
        <ActionCable
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceivedRoom}
        />
        <div className='list-header'>
          <h2 id='channels'>Channels</h2>
          <button className='room-form-button' onClick={() => this.props.openModal('newRoom')}><img src={window.addChannel} alt="add-channel-icon"/></button>
        </div>
        <ul className='roomsList'>
          {rooms.map(room =>
            <RoomListItem
              key={room.id}
              room={room}
              handleClick={this.handleClick}
              currentRoom={this.props.room}
            />)}
        </ul>
      </div>
    )
  }
}

export default RoomsList
