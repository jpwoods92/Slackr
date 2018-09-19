import modal from './modal_reducer'
import { combineReducers } from 'redux'
import room from './single_room_reducer'

export default combineReducers({
  room,
  modal
})
