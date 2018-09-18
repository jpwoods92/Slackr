import { connect } from 'react-redux'
import MessagesArea from './messages_area'

const mapStateToProps = (state) => {
  let room = state.ui.room || null
  let messages = []
  if (room) {
    messages = state.ui.room.messages
  }
  return {
    room: room,
    messages: messages
  }
}

export default connect(mapStateToProps)(MessagesArea)
