import { connect } from 'react-redux'
import NewMessageForm from './new_message_form'

const mapStateToProps = state => {
  return {
    user: state.session.currentUserId,
    room: state.ui.room,
    roomId: state.ui.room.id
  }
}

export default connect(mapStateToProps)(NewMessageForm)
