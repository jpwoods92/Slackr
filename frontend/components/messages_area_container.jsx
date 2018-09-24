import { connect } from 'react-redux'
import MessagesArea from './messages_area'
import { fetchMessages, receiveMessage } from '../actions/message_actions'
import { withRouter } from 'react-router-dom'
import { fetchRoom } from '../actions/room_actions'

const mapStateToProps = (state) => {
  return {
    room: state.ui.room,
    messages: state.entities.messages,
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (roomId) => dispatch(fetchMessages(roomId)),
    fetchRoom: (id) => dispatch(fetchRoom(id)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagesArea))
