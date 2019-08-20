import * as types from '../../actions/types'
import { moveToCoordinates } from '../../utils'
import { combineReducers } from 'redux'

export function squares(state = Array(9).fill(null), action) {
  switch(action.type) {
    case types.TICK_SQUARE:
      let squares = state.slice()

      const nulls = squares.filter(s => s === null).length
      const player = (nulls % 2 === 0) ? 'O' : 'X'
      squares[action.payload.position] = player

      return squares
    default:
      return state
  }
}

export function history(
  state = [{
    squares: Array(9).fill(null),
    coordinates: {}
  }],
  action
) {
  switch(action.type) {
    case types.TICK_SQUARE:
      return [
        ...(state.slice(0, action.payload.step + 1)), {
        squares: squares(state[action.payload.step].squares, action),
        coordinates: moveToCoordinates(action.payload.position)
      }]
    default:
      return state
  }
}

export function step(state = 0, action) {
  switch(action.type) {
    case types.INCREMENT_STEP:
      return state + 1
    case types.JUMP_TO:
      return action.payload
    default:
      return state
  }  
}

export default combineReducers({
  history,
  step
})