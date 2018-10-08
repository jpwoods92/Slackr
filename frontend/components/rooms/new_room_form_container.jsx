import { connect } from 'react-redux'
import { createRoom } from '../../actions/room_actions'
import { createMembership } from '../../actions/room_mebership_actions'
import { closeModal } from '../../actions/modal_actions'
import NewRoomForm from './new_room_form'

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  createRoom: (room) => dispatch(createRoom(room)),
  createMembership: (userIds) => dispatch(createMembership(userIds)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm)
