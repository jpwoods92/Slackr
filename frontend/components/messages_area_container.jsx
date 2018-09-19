import { connect } from 'react-redux'
import MessagesArea from './messages_area'

const mapStateToProps = (state) => {
  let room = state.ui.room
  return {
    room: room,
    users: state.entities.users
  }
}

export default connect(mapStateToProps)(MessagesArea)
