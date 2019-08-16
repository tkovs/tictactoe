import { TICK_SQUARE } from '../actions'

const INITIAL_STATE = {
  history: [{
    squares: Array(9).fill(null),
    coordinates: [],
    selectedHistory: null,
  }],
  stepNumber: 0,
  xIsNext: true
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function mapMoveToCoordinates(cell) {
  let coordinates = [
    {col: 0, row: 0}, {col: 1, row: 0}, {col: 2, row: 0},
    {col: 0, row: 1}, {col: 1, row: 1}, {col: 2, row: 1},
    {col: 0, row: 2}, {col: 1, row: 2}, {col: 2, row: 2},
  ]

  return coordinates[cell]
}

export default function reducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case TICK_SQUARE:
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
          squares: squares,
          coordinates: mapMoveToCoordinates(action.position),
          selectedHistory: null,
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      }
    default:
      return state
  }
}