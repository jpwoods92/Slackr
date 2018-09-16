import { combineReducers } from 'redux'
import usersReducer from './auth_reducers/users_reducer'
import roomsReducer from './rooms_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  rooms: roomsReducer
})

export default entitiesReducer
