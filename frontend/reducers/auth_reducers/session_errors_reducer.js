import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../../actions/session_actions'

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_ERRORS:
      let newState = action.errors
      return newState
    case CLEAR_ERRORS:
      return []
    default:
      return state
  }
}
