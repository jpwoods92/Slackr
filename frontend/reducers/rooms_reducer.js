import { REMOVE_ROOM, RECEIVE_ALL_ROOMS, RECEIVE_ROOM } from '../actions/room_actions'

export default function roomsReducer (state = {}, action) {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_ROOMS:
      let newState = action.rooms
      return newState
    case RECEIVE_ROOM:
      newState = Object.assign({}, state, {[action.room.id]: action.room})
      return newState
    case REMOVE_ROOM:
      newState = Object.assign({}, state)
      delete newState[action.id]
      return newState
    default:
      return state
  }
}
