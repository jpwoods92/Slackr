import { combineReducers } from 'redux'
import sessionErrorsReducer from './auth_reducers/session_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
})

export default errorsReducer
