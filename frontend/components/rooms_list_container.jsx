import { connect } from 'react-redux'
import { createRoom, fetchRooms } from '../actions/room_actions'
import RoomsList from './rooms_list'

const mapStateToProps = (state) => {
  return {
    rooms: Object.values(state.entities.rooms)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchRooms())
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList)
