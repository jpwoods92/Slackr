import { combineReducers } from 'redux'
import usersReducer from './auth_reducers/users_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer
})

export default entitiesReducer
