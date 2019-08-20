import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import rootLogic from './logic'

export default function configureStore(preloadedState) {
  const loggerMiddleware = createLogger()
  const logicMiddleware = createLogicMiddleware(rootLogic)

  const middlewares = applyMiddleware(
    loggerMiddleware, logicMiddleware
  )

  const store = createStore(
    rootReducer, preloadedState, middlewares
  )

  return store
}