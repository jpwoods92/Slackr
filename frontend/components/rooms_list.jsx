import React from 'react'
import { ActionCable } from 'react-actioncable-provider'
import MessagesAreaContainer from './messages_area_container'
import { ProtectedRoute } from '../util/route_util'
import RoomListItem from './rooms_list_item'
import { Link } from 'react-router-dom'

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
    this.setState({rooms: [...this.props.rooms, room]})
  }

  handleClick (id) {
    this.props.fetchRoom(id)
  }

  render () {
    if (!this.props.rooms.length) return <p>loading</p>
    let rooms = this.state.rooms
    return (
      <div className="roomsList">
        <ActionCable
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceivedRoom}
        />
        <h2>Rooms</h2>
        <ProtectedRoute exact path='/rooms/:roomId' component={MessagesAreaContainer}/>
        <ul>{rooms.map(room => <RoomListItem key={room.id} room={room} handleClick={this.handleClick} />)}</ul>
        <Link to='rooms/new'>Add a room</Link>
      </div>
    )
  }
}

export default RoomsList
