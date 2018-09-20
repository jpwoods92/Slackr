import { connect } from 'react-redux'
import { fetchRooms, fetchRoom } from '../actions/room_actions'
import RoomsList from './rooms_list'
import { openModal } from '../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    rooms: state.entities.rooms,
    room: state.ui.room
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchRooms()),
  fetchRoom: (id) => dispatch(fetchRoom(id)),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList)
