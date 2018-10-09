import { connect } from 'react-redux'
import { createMembership } from '../../actions/room_mebership_actions'
import { closeModal } from '../../actions/modal_actions'
import NewDMForm from './new_dm_form'

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
  createMembership: (userIds) => dispatch(createMembership(userIds)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm)
