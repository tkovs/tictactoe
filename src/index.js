import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import rootLogic from './redux/logic'
import './index.css'
import Game from './components/Game'

const logger = createLogger()
const logicMiddleware = createLogicMiddleware(rootLogic)

const store = createStore(
  rootReducer,
  applyMiddleware(
    logicMiddleware,
    logger
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
