import { connect } from 'react-redux'
import { fetchRooms, fetchRoom, receiveRoom } from '../../actions/room_actions'
import { fetchMessages } from '../../actions/message_actions'
import RoomsList from './rooms_list'
import { openModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    rooms: Object.values(state.entities.rooms),
    room: state.ui.room
  }
}
const mapDispatchToProps = dispatch => ({
  receiveRoom: (room) => dispatch(receiveRoom(room)),
  fetchRooms: () => dispatch(fetchRooms()),
  fetchRoom: (id) => dispatch(fetchRoom(id)),
  fetchMessages: (roomId) => dispatch(fetchMessages(roomId)),
  openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomsList))
