import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/reducers'
import { createStore, applyMiddleware } from 'redux'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
      )
  )
}
