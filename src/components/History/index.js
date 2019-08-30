import React from 'react'
import { calculateWinner } from '../../utils'
import PropTypes from 'prop-types'

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
          className={props.step !== move ? "" : "history-selected"}
          onClick={() => props.handleClick(move)}
        >
          {desc}
        </button>
      </li>
    )
  })

  const winner = calculateWinner(props.history[props.step].squares)
  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else if (props.step === 9) {
    status = 'Drawed'
  } else {
    const player = (props.step % 2) ? 'O' : 'X'
    status = `Next player: ${player}`
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

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
  step: PropTypes.number.isRequired
}

export default History