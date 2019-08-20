import * as types from '../../actions/types'

export default function reducer(state = Array(9).fill(null), action) {
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