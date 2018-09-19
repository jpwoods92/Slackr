import { connect } from 'react-redux'
import MessagesArea from './messages_area'

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

export default connect(mapStateToProps)(MessagesArea)
