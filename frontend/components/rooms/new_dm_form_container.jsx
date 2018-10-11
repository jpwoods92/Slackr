import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import NewDMForm from './new_dm_form'

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm)
