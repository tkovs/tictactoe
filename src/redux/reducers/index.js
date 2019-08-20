import { combineReducers } from 'redux'
import feedback from './feedback'
import history from './history'
import step from './step'

export default combineReducers({
  history,
  step,
  feedback
})