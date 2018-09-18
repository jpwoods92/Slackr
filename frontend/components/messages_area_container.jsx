import { connect } from 'react-redux'
import MessagesArea from './messages_area'
import { fetchRoom } from '../actions/ui_actions'

const mapStateToProps = (state) => {
  let room = state.ui.room || null
  return {
    room: room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoom: (id) => dispatch(fetchRoom(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesArea)
