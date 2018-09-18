import { connect } from 'react-redux'
import NewMessageForm from './new_message_form'
import { createMessage } from '../actions/message_actions'

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  }
}

export default connect(null, mapDispatchToProps)(NewMessageForm)
