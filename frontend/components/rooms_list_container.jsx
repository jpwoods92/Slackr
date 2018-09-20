import { connect } from 'react-redux'
import { fetchRooms } from '../actions/room_actions'
import RoomsList from './rooms_list'
import { openModal } from '../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    rooms: state.entities.rooms
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchRooms()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList)
