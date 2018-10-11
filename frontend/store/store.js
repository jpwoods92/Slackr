import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/root_reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

export default (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
}
