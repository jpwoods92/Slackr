import { combineReducers } from 'redux'
import usersReducer from './auth_reducers/users_reducer'
import roomsReducer from './rooms_reducer'
import messagesReducer from './messages_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  rooms: roomsReducer,
  messages: messagesReducer
})

export default entitiesReducer
