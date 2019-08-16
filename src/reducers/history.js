import { ADD_HISTORY, JUMP_TO } from '../actions'
import { calculateWinner, mapMoveToCoordinates } from '../utils'

const INITIAL_STATE = {
  history: [{
    squares: Array(9).fill(null),
    coordinates: [],
  }],
  stepNumber: 0,
  xIsNext: true,
  selectedHistory: null
}

const history = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_HISTORY:
      const history = state.history.slice(0, state.stepNumber + 1)
      const current = history[history.length - 1]
      const squares = current.squares.slice()

      if (calculateWinner(squares) || squares[action.position]) {
        return state
      }

      squares[action.position] = state.xIsNext ? 'X' : 'O'

      return {
        ...state,
        history: history.concat([{
          squares,
          coordinates: mapMoveToCoordinates(action.position)
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        selectedHistory: null
      }
    case JUMP_TO:
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: (action.step % 2) === 0,
        selectedHistory: action.step
      }
    default:
      return state
  }
}

export default history