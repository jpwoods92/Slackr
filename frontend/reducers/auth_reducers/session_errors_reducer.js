import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session_actions'

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_ERRORS:
      let newState = action.errors
      return newState
    case RECEIVE_CURRENT_USER:
      return []
    default:
      return state
  }
}
