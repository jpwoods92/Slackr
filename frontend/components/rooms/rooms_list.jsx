import React from 'react'
import RoomListItem from './rooms_list_item'

class RoomsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: this.props.rooms
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchRooms()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.rooms.length !== nextProps.rooms.length) {
      this.setState({rooms: nextProps.rooms})
      this.props.fetchRoom(parseInt(nextProps.history.location.pathname.split('/').pop()))
    }
  }

  handleClick (id) {
    return () => this.props.fetchRoom(id).then(this.props.fetchMessages(id))
  }

  render () {
    if (!this.props.rooms.length) return null
    let rooms = this.props.rooms.slice()
    const sortedRooms = rooms.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )

    return (
      <div className='rooms'>
        <div className='list-header'>
          <h2 id='channels'>Channels</h2>
          <button className='room-form-button' onClick={() => this.props.openModal('newRoom')}><img src={window.addChannel} alt="add-channel-icon"/></button>
        </div>
        <ul className='roomsList'>
          {sortedRooms.map(room =>
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
