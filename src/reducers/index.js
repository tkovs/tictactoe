import { combineReducers } from 'redux'
import board from './board'
import history from './history'

export default combineReducers({
  board,
  history
})