import { connect } from 'react-redux'
import { fetchRooms, fetchRoom } from '../actions/room_actions'
import RoomsList from './rooms_list'

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
