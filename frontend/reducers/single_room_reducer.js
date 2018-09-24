import { SWITCH_ROOM } from '../actions/room_actions'

export default function roomReducer (state = {}, action) {
  Object.freeze(state)
  switch (action.type) {
    case SWITCH_ROOM:
      let newState = action.room
      return newState
    default:
      return state
  }
}
