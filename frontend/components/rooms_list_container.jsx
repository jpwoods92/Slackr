import { connect } from 'react-redux'
import { fetchRooms } from '../actions/room_actions'
import RoomsList from './rooms_list'
import { fetchRoom } from '../actions/ui_actions'

const mapStateToProps = (state) => {
  return {
    rooms: state.entities.rooms
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchRooms()),
  fetchRoom: (id) => dispatch(fetchRoom(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList)
