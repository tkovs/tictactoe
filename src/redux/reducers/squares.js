import * as types from '../../actions/types'

export default function reducer(state = Array(9).fill(null), action) {
  switch(action.type) {
    case types.TICK_SQUARE:
      const nulls = state.filter(s => s === null).length
      const player = (nulls % 2 === 0) ? 'O' : 'X'

      return [
        ...state.slice(0, action.payload.position),
        player,
        ...state.slice(action.payload.position + 1)
      ]
    default:
      return state
  }
}