import * as types from '../../actions/types'
import { moveToCoordinates } from '../../utils'
import squares from './squares'

export default function reducer(
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
