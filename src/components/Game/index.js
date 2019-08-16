import React from 'react'
import './index.css'
import Board from '../Board'
import History from '../History'

const Game = (props) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <History />
      </div>
    </div>
  )
}

export default Game