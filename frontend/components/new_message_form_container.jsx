import { connect } from 'react-redux'
import NewMessageForm from './new_message_form'
import { createMessage } from '../actions/message_actions'

const mapStateToProps = state => {
  return {
    room: state.ui.room,
    roomId: state.ui.room.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageForm)
