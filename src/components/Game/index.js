import React from 'react'
import './index.css'
import Board from '../Board'

const Game = (props) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

export default Game