import { TICK_SQUARE, UPDATE_BOARD } from '../actions'
import { calculateWinner } from '../utils'

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const board = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TICK_SQUARE:
      const squares = state.squares.slice()

      if (calculateWinner(squares) || squares[action.position]) {
        return state
      }

      squares[action.position] = state.xIsNext ? 'X' : 'O'

      return {
        ...state,
        squares: squares,
        xIsNext: !state.xIsNext
      }
    case UPDATE_BOARD:
      return {
        squares: action.board.squares,
        xIsNext: (action.board.step % 2) === 0
      }
    default:
      return state
  }
}

export default board