import { RECEIVE_ALL_ROOMS, RECEIVE_ROOM } from '../actions/room_actions'
import merge from 'lodash/merge'

export default function (state = {}, action) {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_ROOMS:
      let newState = merge({}, state, action.rooms)
      return newState
    case RECEIVE_ROOM:
      newState = merge({}, state, {[action.room.id]: action.room})
      return newState
    default:
      return state
  }
}
