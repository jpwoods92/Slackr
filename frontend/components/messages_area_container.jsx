import { connect } from 'react-redux'
import MessagesArea from './messages_area'
import { fetchRooms } from '../actions/room_actions'

const mapStateToProps = (state) => {
  let room = state.ui.room
  let messages = []
  if (Object.keys(room).length) {
    messages = state.ui.room.messages
  }
  return {
    room: room,
    messages: messages,
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRooms: () => dispatch(fetchRooms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesArea)
