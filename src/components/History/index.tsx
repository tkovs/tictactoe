import React, { FC } from 'react'
import { calculateWinner } from '../../utils'

interface Coordinate {
  col: number
  row: number
}

interface HistoryItem {
  squares: number[] | null[]
  coordinates: Coordinate
}

type History = HistoryItem[]

interface HistoryProps {
  history: History
  step: number
  handleClick: (step: number) => void
}

type Props = HistoryProps

const History: FC<Props> = ({ history, step, handleClick }: Props) => {
  const moves = history.map((historyItem, move) => {
    const col = historyItem.coordinates.col
    const row = historyItem.coordinates.row

    const desc = move ?
      `Go to move #${move}, (${col}, ${row})` :
      'Go to game start'

    return (
      <li key={move}>
        <button
          className={step !== move ? "" : "history-selected"}
          onClick={() => handleClick(move)}
        >
          {desc}
        </button>
      </li>
    )
  })

  const winner = calculateWinner(history[step].squares)
  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else if (step === 9) {
    status = 'Drawed'
  } else {
    const player = (step % 2) ? 'O' : 'X'
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

export default History