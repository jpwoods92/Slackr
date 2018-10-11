import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import NewRoomForm from './new_room_form'

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm)
