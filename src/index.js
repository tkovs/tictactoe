import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const SquareInfo = props => {
  return (
    <div className="square square-info">{props.value}</div>
  )
}

const SquareButton = props => {
  return (
    <button className="square square-btn" onClick={props.onClick} >
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <SquareButton
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    let i = 0

    return (
      <>
        <div className="board-row">
          { [0, 1, 2].map((col) => <SquareInfo value={col} />) }
        </div>

        { [0, 1, 2].map((row) => 
          <div className="board-row">
            { [0, 1, 2].map((col) => this.renderSquare(i++)) }
            { <SquareInfo value={row} />}
          </div>
        ) }
      </>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      history: [{
        squares: Array(9).fill(null),
        coordinates: [],
        selectedHistory: null
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const col = step.coordinates.col
      const row = step.coordinates.row

      const desc = move ?
        `Go to move #${move} (${col}, ${row})` :
        'Go to game start'

      return (
        <li key={move}>
          <button
            className={this.state.selectedHistory !== move ? "" : "history-selected"}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      )
    })

    let status

    if (winner) {
      status = `Winner: ${winner}`
    } else if (this.state.history.length === 10) {
      status = 'Drawed'
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([{
        squares: squares,
        coordinates: this.mapMoveToCoordinates(i)
      }]),
      selectedHistory: null,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      selectedHistory: step
    })
  }

  mapMoveToCoordinates(cell) {
    let coordinates = [
      {col: 0, row: 0}, {col: 1, row: 0}, {col: 2, row: 0},
      {col: 0, row: 1}, {col: 1, row: 1}, {col: 2, row: 1},
      {col: 0, row: 2}, {col: 1, row: 2}, {col: 2, row: 2},
    ]

    return coordinates[cell]
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

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
