import React from 'react'
import { connect } from 'react-redux'
import { calculateWinner } from '../../utils'
import { jumpTo, updateBoard } from '../../actions'

const mapStateToProps = ({ history }) => ({
  history: history.history,
  selectedHistory: history.selectedHistory,
  xIsNext: history.xIsNext
})

const mapDispatchToProps = (dispatch) => ({
  jumpTo: (step, board) => {
    dispatch(jumpTo(step))
    dispatch(updateBoard(board, step))
  }
})

const History = (props) => {
  const moves = props.history.map((step, move) => {
    const col = step.coordinates.col
    const row = step.coordinates.row

    const desc = move ?
      `Go to move #${move}, (${col}, ${row})` :
      'Go to game start'

    return (
      <li key={move}>
        <button
          className={props.selectedHistory !== move ? "" : "history-selected"}
          onClick={() => props.jumpTo(move, props.history[move])}
        >
          {desc}
        </button>
      </li>
    )
  })

  const winner = calculateWinner(props.history[props.history.length - 1].squares)
  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else if (props.history.length === 10) {
    status = 'Drawed'
  } else {
    status = `Next player: ${props.xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div>{status}</div>
      <ol>
        {moves}
      </ol>
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)