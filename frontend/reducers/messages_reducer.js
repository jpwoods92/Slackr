import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions'

export default function messagesReducer (state = {}, action) {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      let newState = action.messages
      return newState
    case RECEIVE_MESSAGE:
      newState = Object.assign({}, state, {[action.message.id]: action.message})
      return newState
    default:
      return state
  }
}
